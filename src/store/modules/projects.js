import { defineStore } from 'pinia'

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    projects: [],
    loading: false,
    error: null
  }),

  getters: {
    getProjects: (state) => state.projects,
    isLoading: (state) => state.loading,
    hasError: (state) => !!state.error
  },

  actions: {
    async fetchProjects() {
      this.loading = true
      this.error = null
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 800))
        
        this.projects = [
          {
            id: 1,
            name: 'Solar Farm Alpha',
            type: 'solar',
            status: 'active',
            investment: 1500000
          },
          {
            id: 2,
            name: 'Wind Park Beta',
            type: 'wind',
            status: 'planning',
            investment: 2300000
          }
        ]
      } catch (error) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    },

    async addProject(project) {
      this.loading = true
      this.error = null
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 800))
        
        const newProject = {
          id: Date.now(),
          ...project
        }
        
        this.projects.push(newProject)
        return newProject
      } catch (error) {
        this.error = error.message
        throw error
      } finally {
        this.loading = false
      }
    }
  }
}) 