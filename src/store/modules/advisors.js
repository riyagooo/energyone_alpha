import { defineStore } from 'pinia'

export const useAdvisorsStore = defineStore('advisors', {
  state: () => ({
    advisors: [],
    loading: false,
    error: null
  }),

  getters: {
    getAdvisors: (state) => state.advisors,
    isLoading: (state) => state.loading,
    hasError: (state) => !!state.error,
    getAdvisorById: (state) => (id) => state.advisors.find(advisor => advisor.id === id)
  },

  actions: {
    async fetchAdvisors() {
      this.loading = true
      this.error = null
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 800))
        
        this.advisors = [
          {
            id: 1,
            name: 'Sarah Johnson',
            specialization: 'Renewable Energy',
            experience: 12,
            rating: 4.8
          },
          {
            id: 2,
            name: 'Michael Chen',
            specialization: 'Environmental Impact',
            experience: 8,
            rating: 4.6
          }
        ]
      } catch (error) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    },

    async addAdvisor(advisor) {
      this.loading = true
      this.error = null
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 800))
        
        const newAdvisor = {
          id: Date.now(),
          ...advisor
        }
        
        this.advisors.push(newAdvisor)
        return newAdvisor
      } catch (error) {
        this.error = error.message
        throw error
      } finally {
        this.loading = false
      }
    }
  }
}) 