// src/shared/utils.js

/**
 * Format a number as currency
 * @param {number} value - The value to format
 * @param {string} currency - Currency code (default: USD)
 * @returns {string} Formatted currency string
 */
export function formatCurrency(value, currency = 'USD') {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency
    }).format(value);
  }
  
  /**
   * Format a number as a percentage
   * @param {number} value - The value to format (e.g., 0.12 for 12%)
   * @param {number} decimals - Number of decimal places
   * @returns {string} Formatted percentage string
   */
  export function formatPercent(value, decimals = 2) {
    return new Intl.NumberFormat('en-US', {
      style: 'percent',
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    }).format(value);
  }
  
  /**
   * Format a date
   * @param {string|Date} date - Date to format
   * @param {string} format - Format style ('short', 'medium', 'long', or 'full')
   * @returns {string} Formatted date string
   */
  export function formatDate(date, format = 'medium') {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    
    if (format === 'short') {
      options.month = 'numeric';
    } else if (format === 'long') {
      options.month = 'long';
    } else if (format === 'full') {
      options.month = 'long';
      options.weekday = 'long';
    }
    
    return new Date(date).toLocaleDateString('en-US', options);
  }
  
  /**
   * Truncate text with ellipsis
   * @param {string} text - Text to truncate
   * @param {number} length - Maximum length
   * @returns {string} Truncated text
   */
  export function truncateText(text, length = 50) {
    if (!text) return '';
    return text.length > length ? `${text.substring(0, length)}...` : text;
  }
  
  /**
   * Generate a unique ID
   * @returns {string} Unique ID
   */
  export function generateId() {
    return Math.random().toString(36).substring(2, 15) + 
           Math.random().toString(36).substring(2, 15);
  }
  
  /**
   * Deep clone an object
   * @param {object} obj - Object to clone
   * @returns {object} Cloned object
   */
  export function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  
  /**
   * Check if an object is empty
   * @param {object} obj - Object to check
   * @returns {boolean} True if empty
   */
  export function isEmptyObject(obj) {
    return Object.keys(obj).length === 0;
  }
  
  /**
   * Calculate WACC (Weighted Average Cost of Capital)
   * @param {number} equityRatio - Ratio of equity in capital structure
   * @param {number} equityCost - Cost of equity (as decimal)
   * @param {number} debtRatio - Ratio of debt in capital structure
   * @param {number} debtCost - Cost of debt (as decimal)
   * @param {number} taxRate - Corporate tax rate (as decimal)
   * @returns {number} WACC (as decimal)
   */
  export function calculateWACC(equityRatio, equityCost, debtRatio, debtCost, taxRate) {
    return (equityRatio * equityCost) + (debtRatio * debtCost * (1 - taxRate));
  }
  
  /**
   * Calculate Net Present Value
   * @param {number} initialInvestment - Initial investment (negative)
   * @param {number[]} cashFlows - Array of cash flows
   * @param {number} discountRate - Discount rate (as decimal)
   * @returns {number} NPV
   */
  export function calculateNPV(initialInvestment, cashFlows, discountRate) {
    let npv = initialInvestment;
    
    cashFlows.forEach((cf, index) => {
      npv += cf / Math.pow(1 + discountRate, index + 1);
    });
    
    return npv;
  }
  
  /**
   * Calculate Internal Rate of Return (IRR) using Newton-Raphson method
   * @param {number[]} cashFlows - Array of cash flows (first value is initial investment, negative)
   * @param {number} guess - Initial guess for IRR (default: 0.1)
   * @param {number} tolerance - Calculation tolerance (default: 0.0001)
   * @returns {number} IRR value (as decimal)
   */
  export function calculateIRR(cashFlows, guess = 0.1, tolerance = 0.0001) {
    const maxIterations = 100;
    let irr = guess;
    
    for (let i = 0; i < maxIterations; i++) {
      let npv = 0;
      let derivativeNpv = 0;
      
      for (let j = 0; j < cashFlows.length; j++) {
        const factor = Math.pow(1 + irr, j);
        npv += cashFlows[j] / factor;
        derivativeNpv -= j * cashFlows[j] / (factor * (1 + irr));
      }
      
      const newIrr = irr - npv / derivativeNpv;
      
      if (Math.abs(newIrr - irr) < tolerance) {
        return newIrr;
      }
      
      irr = newIrr;
    }
    
    return irr; // Return best approximation
  }