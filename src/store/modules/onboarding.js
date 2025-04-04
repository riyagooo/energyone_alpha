import { defineStore } from 'pinia'

export const useOnboardingStore = defineStore('onboarding', {
  state: () => ({
    // General onboarding state
    onboardingCompleted: false,
    currentStep: 1,
    
    // Investor profile
    investorType: 'Institutional Investor (Pension Fund, Bank, Asset Manager)',
    
    // Investment preferences
    investmentStage: 'Pre-seed / Seed',
    targetReturn: '10-15%',
    investmentHorizon: 'Medium term (3-7 years)',
    riskTolerance: 'Moderate',
    
    // Project preferences
    projectTypes: {
      solar: true,
      wind: true,
      hydro: false,
      geothermal: false,
      biomass: false,
      storage: true,
      grid: false
    },
    projectSize: 'Medium-scale (1-10MW)',
    developmentPhase: 'Ready-to-build',
    
    // Geographic preferences
    primaryRegion: 'North America',
    targetCountries: {
      usa: true,
      canada: true,
      uk: false,
      germany: false,
      france: false,
      spain: false,
      italy: false,
      australia: false,
      india: false,
      brazil: false
    },
    regulatoryPreference: 'Stable regulatory framework',
    
    // Notification preferences
    notificationPreferences: {
      newProjects: true,
      marketUpdates: true,
      portfolioAlerts: true
    }
  }),
  
  getters: {
    isOnboardingCompleted: (state) => state.onboardingCompleted,
    getCurrentStep: (state) => state.currentStep,
    getInvestorType: (state) => state.investorType,
    getInvestmentPreferences: (state) => {
      return {
        stage: state.investmentStage,
        targetReturn: state.targetReturn,
        horizon: state.investmentHorizon,
        riskTolerance: state.riskTolerance
      }
    },
    getProjectPreferences: (state) => {
      return {
        types: state.projectTypes,
        size: state.projectSize,
        phase: state.developmentPhase
      }
    },
    getGeographicPreferences: (state) => {
      return {
        primaryRegion: state.primaryRegion,
        countries: state.targetCountries,
        regulatoryPreference: state.regulatoryPreference
      }
    },
    getNotificationPreferences: (state) => state.notificationPreferences,
    
    // Helper getters for dashboard customization
    getPreferredProjectTypes: (state) => {
      return Object.keys(state.projectTypes)
        .filter(type => state.projectTypes[type])
    },
    getPreferredCountries: (state) => {
      return Object.keys(state.targetCountries)
        .filter(country => state.targetCountries[country])
    }
  },
  
  actions: {
    // Investor profile
    setInvestorType(type) {
      console.log('Setting investor type:', type)
      this.investorType = type
    },
    
    // Investment preferences
    setInvestmentStage(stage) {
      console.log('Setting investment stage:', stage)
      this.investmentStage = stage
    },
    
    setTargetReturn(targetReturn) {
      console.log('Setting target return:', targetReturn)
      this.targetReturn = targetReturn
    },
    
    setInvestmentHorizon(horizon) {
      console.log('Setting investment horizon:', horizon)
      this.investmentHorizon = horizon
    },
    
    setRiskTolerance(tolerance) {
      console.log('Setting risk tolerance:', tolerance)
      this.riskTolerance = tolerance
    },
    
    // Project preferences
    setProjectTypes(types) {
      console.log('Setting project types:', types)
      this.projectTypes = types
    },
    
    setProjectSize(size) {
      console.log('Setting project size:', size)
      this.projectSize = size
    },
    
    setDevelopmentPhase(phase) {
      console.log('Setting development phase:', phase)
      this.developmentPhase = phase
    },
    
    // Geographic preferences
    setPrimaryRegion(region) {
      console.log('Setting primary region:', region)
      this.primaryRegion = region
    },
    
    setTargetCountries(countries) {
      console.log('Setting target countries:', countries)
      this.targetCountries = countries
    },
    
    setRegulatoryPreference(preference) {
      console.log('Setting regulatory preference:', preference)
      this.regulatoryPreference = preference
    },
    
    // Notification preferences
    setNotificationPreferences(preferences) {
      console.log('Setting notification preferences:', preferences)
      this.notificationPreferences = preferences
    },
    
    // Onboarding status
    setCurrentStep(step) {
      console.log('Setting current step:', step)
      this.currentStep = step
    },
    
    completeOnboarding() {
      console.log('Completing onboarding')
      this.onboardingCompleted = true
    },
    
    resetOnboarding() {
      console.log('Resetting onboarding')
      this.onboardingCompleted = false
      this.currentStep = 1
    }
  }
}) 