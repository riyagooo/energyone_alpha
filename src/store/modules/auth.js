// src/store/modules/auth.js
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    isAuthenticated: false,
    isNewUser: false,
    token: null,
    loading: false,
    error: null
  }),

  getters: {
    currentUser: (state) => state.user,
    getUserId: (state) => state.user?.id,
    getUserEmail: (state) => state.user?.email,
    getUserName: (state) => state.user?.name,
    getError: (state) => state.error,
    isLoading: (state) => state.loading
  },

  actions: {
    async signIn(email, password) {
      this.loading = true
      this.error = null
      
      try {
        console.log('Auth store: Signing in with', email)
        
        // TODO: Implement actual authentication
        // For now, just simulate a successful login
        this.user = {
          id: '1',
          email,
          name: 'Test User'
        }
        this.isAuthenticated = true
        this.isNewUser = false
        console.log('Auth store: Sign in successful')
        
        return true
      } catch (error) {
        console.error('Auth store: Sign in failed', error)
        this.error = error.message || 'Authentication failed'
        return false
      } finally {
        this.loading = false
      }
    },

    async signUp(email, password, name) {
      this.loading = true
      this.error = null
      
      try {
        console.log('Auth store: Signing up with', email)
        
        // TODO: Implement actual registration
        // For now, just simulate a successful registration
        this.user = {
          id: '1',
          email,
          name: name || 'New User'
        }
        this.isAuthenticated = true
        this.isNewUser = true
        console.log('Auth store: Sign up successful')
        
        return true
      } catch (error) {
        console.error('Auth store: Sign up failed', error)
        this.error = error.message || 'Registration failed'
        return false
      } finally {
        this.loading = false
      }
    },

    async resetPassword(email) {
      this.loading = true
      this.error = null
      
      try {
        console.log('Auth store: Resetting password for', email)
        
        // TODO: Implement actual password reset
        // For now, just simulate a successful reset request
        console.log('Auth store: Password reset email sent')
        
        return true
      } catch (error) {
        console.error('Auth store: Password reset failed', error)
        this.error = error.message || 'Password reset failed'
        return false
      } finally {
        this.loading = false
      }
    },

    signOut() {
      console.log('Auth store: Signing out')
      this.user = null
      this.isAuthenticated = false
      this.isNewUser = false
      this.token = null
      this.error = null
      
      return true
    }
  }
})