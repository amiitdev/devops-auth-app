// pipeline {
//     agent any

//     environment {
//         NODE_ENV = 'production'
//     }

//     stages {

//         stage('📥 Clone Code') {
//             steps {
//                 git 'https://github.com/your-username/your-repo.git'
//             }
//         }

//         stage('📦 Install Backend Dependencies') {
//             steps {
//                 dir('backend') {
//                     sh 'npm install'
//                 }
//             }
//         }

//         stage('⚛️ Install Frontend Dependencies') {
//             steps {
//                 dir('frontend') {
//                     sh 'npm install'
//                 }
//             }
//         }

//         stage('🏗️ Build Frontend') {
//             steps {
//                 dir('frontend') {
//                     sh 'npm run build'
//                 }
//             }
//         }

//         stage('🚀 Start Backend') {
//             steps {
//                 dir('backend') {
//                     sh 'npm start'
//                 }
//             }
//         }
//     }

//     post {
//         success {
//             echo '✅ Build Successful 🚀'
//         }
//         failure {
//             echo '❌ Build Failed'
//         }
//     }
// }

//////////////////////////////////
pipeline {
    agent any

    environment {
        MONGO_URL = credentials('mongo-url-id')
        JWT_SECRET = credentials('jwt-secret-id')
    }

    stages {

        stage('📥 Clone Code') {
            steps {
                git 'https://github.com/your-username/your-repo.git'
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
                docker-compose down
                docker-compose up -d
                '''
            }
        }

    }

    post {
        success {
            echo '✅ Deployment Successful 🚀'
        }
        failure {
            echo '❌ Deployment Failed'
        }
    }
}