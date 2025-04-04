import { defineStore } from 'pinia'

export const useMessagesStore = defineStore('messages', {
  state: () => ({
    conversations: [
      {
        id: 1,
        name: 'Sarah Johnson',
        avatar: '/images/avatar-01.jpg',
        role: 'Project Manager',
        lastMessage: 'Latest updates on the solar project...',
        timestamp: '10:30 AM',
        unread: true
      },
      {
        id: 2,
        name: 'Michael Chen',
        avatar: '/images/avatar-02.jpg',
        role: 'Risk Analyst',
        lastMessage: 'Review of the latest risk metrics...',
        timestamp: 'Yesterday',
        unread: false
      }
    ],
    currentConversation: null,
    messages: [],
    loading: false
  }),

  getters: {
    getConversations: (state) => state.conversations,
    getCurrentConversation: (state) => state.currentConversation,
    getMessages: (state) => state.messages,
    getUnreadCount: (state) => state.conversations.filter(c => c.unread).length,
    isLoading: (state) => state.loading
  },

  actions: {
    setCurrentConversation(conversationId) {
      this.currentConversation = this.conversations.find(c => c.id === conversationId)
      if (this.currentConversation) {
        this.currentConversation.unread = false
      }
    },

    async sendMessage(content) {
      if (!this.currentConversation) return
      
      const newMessage = {
        id: Date.now(),
        content,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        sent: true
      }
      
      this.messages.push(newMessage)
      return newMessage
    },

    async loadMessages(conversationId) {
      this.loading = true
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 800))
        
        this.messages = [
          {
            id: 1,
            content: 'Hi there! How can I help you today?',
            timestamp: '10:30 AM',
            sent: false
          },
          {
            id: 2,
            content: 'I need some information about the solar project.',
            timestamp: '10:31 AM',
            sent: true
          }
        ]
      } finally {
        this.loading = false
      }
    }
  }
}) 