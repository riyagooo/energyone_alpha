import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    account: {
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      role: 'Project Manager',
      avatar: '/images/avatar-01.jpg',
      bio: 'Project manager with 5 years of experience in renewable energy projects.'
    },
    notifications: {
      email: {
        projectUpdates: true,
        riskAlerts: true,
        systemMessages: false
      },
      push: {
        projectUpdates: true,
        riskAlerts: true,
        systemMessages: true
      }
    },
    billing: {
      plan: 'Pro',
      status: 'Active',
      nextBillingDate: '2024-05-01',
      paymentMethod: '•••• •••• •••• 4242'
    },
    apps: {
      connected: [
        { name: 'Google Calendar', status: 'Connected' },
        { name: 'Slack', status: 'Connected' },
        { name: 'Microsoft Teams', status: 'Disconnected' }
      ]
    },
    plans: {
      current: 'Pro',
      available: [
        { name: 'Basic', price: '$9', features: ['Basic project management', 'Email support'] },
        { name: 'Pro', price: '$29', features: ['Advanced analytics', 'Priority support', 'API access'] },
        { name: 'Enterprise', price: '$99', features: ['Custom solutions', 'Dedicated support', 'Advanced security'] }
      ]
    }
  }),

  getters: {
    getAccount: (state) => state.account,
    getNotifications: (state) => state.notifications,
    getBilling: (state) => state.billing,
    getApps: (state) => state.apps,
    getPlans: (state) => state.plans
  },

  actions: {
    async updateAccount(accountData) {
      this.account = { ...this.account, ...accountData }
      return this.account
    },

    async updateNotifications(notificationData) {
      this.notifications = { ...this.notifications, ...notificationData }
      return this.notifications
    },

    async updateBilling(billingData) {
      this.billing = { ...this.billing, ...billingData }
      return this.billing
    },

    async connectApp(appName) {
      const app = this.apps.connected.find(a => a.name === appName)
      if (app) {
        app.status = 'Connected'
      }
      return this.apps
    },

    async disconnectApp(appName) {
      const app = this.apps.connected.find(a => a.name === appName)
      if (app) {
        app.status = 'Disconnected'
      }
      return this.apps
    },

    async changePlan(planName) {
      this.plans.current = planName
      return this.plans
    }
  }
}) 