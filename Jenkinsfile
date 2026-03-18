pipeline {
    agent any

    triggers {
        githubPush()  // This tells Jenkins to listen for GitHub webhooks
    }

    environment {
        MONGO_URL = credentials('mongo-url-id')
        JWT_SECRET = credentials('jwt-secret-id')
    }

    stages {
        stage('🧹 Clean Workspace') {
            steps {
                cleanWs()  // This cleans the workspace before build
            }
        }

        stage('📥 Clone Code') {
            steps {
                git branch: 'main', 
                    url: 'https://github.com/amiitdev/devops-auth-app.git'
            }
        }

        stage('🛑 Stop Existing Containers') {
            steps {
                sh '''
                echo "🔍 Checking for existing containers..."
                # Stop and remove containers from previous builds
                docker stop $(docker ps -q --filter "name=jenkinsproject") 2>/dev/null || true
                docker rm $(docker ps -aq --filter "name=jenkinsproject") 2>/dev/null || true
                
                # Also check for devops-auth-app containers (from compose)
                docker stop $(docker ps -q --filter "name=devops-auth-app") 2>/dev/null || true
                docker rm $(docker ps -aq --filter "name=devops-auth-app") 2>/dev/null || true
                
                echo "✅ Cleanup complete!"
                '''
            }
        }

        stage('🐳 Build Docker Images') {
            steps {
                sh 'docker-compose build'
            }
        }

        stage('🚀 Run Containers') {
            steps {
                sh '''
                echo "🚀 Starting fresh containers..."
                docker-compose down
                docker-compose up -d
                echo "✅ Containers are running!"
                '''
            }
        }
        
        stage('🔍 Verify Deployment') {
            steps {
                sh '''
                echo "⏳ Waiting for services to start..."
                sleep 5
                echo "📊 Running containers:"
                docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}" | grep -E "jenkinsproject|devops-auth-app" || true
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Deployment Successful 🚀'
            echo '📱 Application URLs:'
            echo '   - Frontend: http://localhost:5173'
            echo '   - Backend:  http://localhost:3000'
        }
        failure {
            echo '❌ Deployment Failed'
            echo '🔧 Check the console output for errors.'
        }
        always {
            sh '''
            echo "📝 Build completed at: $(date)"
            '''
        }
    }
}