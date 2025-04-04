import { defineStore } from 'pinia'

export const useRiskManagerStore = defineStore('riskManager', {
  state: () => ({
    risks: [],
    riskThreshold: 0.7,
    loading: false,
    error: null
  }),

  getters: {
    getRisks: (state) => state.risks,
    getRiskThreshold: (state) => state.riskThreshold,
    isLoading: (state) => state.loading,
    hasError: (state) => !!state.error,
    getHighRisks: (state) => state.risks.filter(risk => risk.score > state.riskThreshold)
  },

  actions: {
    async fetchRisks() {
      this.loading = true
      this.error = null
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 800))
        
        this.risks = [
          {
            id: 1,
            projectId: 1,
            type: 'environmental',
            description: 'Potential impact on local wildlife',
            score: 0.6,
            mitigationPlan: 'Implement wildlife protection measures'
          },
          {
            id: 2,
            projectId: 1,
            type: 'financial',
            description: 'Market price fluctuation',
            score: 0.8,
            mitigationPlan: 'Hedging strategy implementation'
          }
        ]
      } catch (error) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    },

    async addRisk(risk) {
      this.loading = true
      this.error = null
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 800))
        
        const newRisk = {
          id: Date.now(),
          ...risk
        }
        
        this.risks.push(newRisk)
        return newRisk
      } catch (error) {
        this.error = error.message
        throw error
      } finally {
        this.loading = false
      }
    },

    setRiskThreshold(threshold) {
      this.riskThreshold = threshold
    }
  }
}) 