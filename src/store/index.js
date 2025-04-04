// src/store/index.js
import { createPinia } from 'pinia'

// Create Pinia instance
const pinia = createPinia()

// Export Pinia instance
export default pinia

// Export store modules
export * from './modules/index'