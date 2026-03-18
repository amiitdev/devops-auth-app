// store/authStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      isLoading: false,
      error: null,

      register: async (userData) => {
        set({ isLoading: true, error: null });
        try {
          const response = await axios.post(`${API_URL}/register`, userData);
          set({ isLoading: false });
          return { success: true, message: response.data.message };
        } catch (error) {
          set({
            isLoading: false,
            error: error.response?.data?.error || 'Registration failed',
          });
          return { success: false, error: error.response?.data?.error };
        }
      },

      login: async (credentials) => {
        set({ isLoading: true, error: null });
        try {
          const response = await axios.post(`${API_URL}/login`, credentials, {
            withCredentials: true,
          });

          set({
            user: response.data.user,
            isLoading: false,
            error: null,
          });

          return { success: true, user: response.data.user };
        } catch (error) {
          set({
            isLoading: false,
            error: error.response?.data?.error || 'Login failed',
          });
          return { success: false, error: error.response?.data?.error };
        }
      },

      logout: async () => {
        set({ isLoading: true });
        try {
          await axios.post(`${API_URL}/logout`, {}, { withCredentials: true });

          set({
            user: null,
            isLoading: false,
            error: null,
          });

          return { success: true };
        } catch (error) {
          set({
            isLoading: false,
            error: error.response?.data?.error || 'Logout failed',
          });
          return { success: false };
        }
      },

      fetchUser: async () => {
        set({ isLoading: true });
        try {
          const response = await axios.get(`${API_URL}/user`, {
            withCredentials: true,
          });

          set({
            user: response.data,
            isLoading: false,
            error: null,
          });

          return { success: true, user: response.data };
        } catch (error) {
          set({
            user: null,
            isLoading: false,
            error: error.response?.data?.error || 'Failed to fetch user',
          });
          return { success: false };
        }
      },

      clearError: () => set({ error: null }),
      isAuthenticated: () => !!get().user,
    }),
    {
      name: 'auth-storage', // name of the item in localStorage
      partialize: (state) => ({ user: state.user }), // only persist user
    },
  ),
);

export default useAuthStore;
