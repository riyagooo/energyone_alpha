export type ProjectStatus = 'development' | 'construction' | 'operational';
export type RiskLevel = 'low' | 'medium' | 'high';
export type ProjectType = 'solar' | 'wind' | 'hydro' | 'storage';
export type Region = 'chile' | 'brazil' | 'peru' | 'colombia';
export type InvestmentType = 'equity' | 'debt' | 'tax equity' | 'passive investment' | 'mixed';

export interface Project {
  id: string | number;
  name: string;
  location: string;
  type: string;
  capacity: string;
  investment: number;
  minimumInvestment: number;
  investmentType: InvestmentType;
  image: string;
  riskScore?: number;
  irr?: number;
  riskLevel: string;
  energySecurity?: number;
  status: string;
  developer: string;
  ppaTerm?: number;
  carbonOffset?: number;
  description: string;
  
  financials?: {
    totalInvestment: number;
    equity: number;
    debt: number;
    dscr: number;
    paybackPeriod: number;
    npv: number;
    leveredIrr: number;
    unleveredIrr: number;
    wacc: number;
  };
  
  timeline?: {
    development: string;
    construction: string;
    commissioning: string;
    operation: string;
    ppaStart: string;
    ppaEnd: string;
  };
  
  energyMetrics?: {
    annualGeneration: number;
    capacityFactor: number;
    availability: number;
    performanceRatio: number;
    degradationRate: number;
  };
  
  environmental?: {
    carbonOffset: number;
    landUse: number;
    waterUsage: number;
    biodiversityImpact: string;
    socialImpact: string;
  };
  
  team?: {
    developer: string;
    epc: string;
    oem: string;
    om: string;
    legal: string;
    technical: string;
  };
  riskDetails?: {
    sentiment: string;
    marketAnalysis: string;
    regulatory: string;
    technical: string;
    environmental: string;
  };
}

export interface ProjectFilters {
  priceRange: {
    min: number;
    max: number;
  };
  minimumInvestmentRange: {
    min: number;
    max: number;
  };
  projectTypes: string[];
  regions: string[];
  riskLevels: string[];
  statuses: string[];
  investmentTypes?: string[];
} 