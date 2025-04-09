export type ProjectStatus = 'development' | 'construction' | 'operational';
export type RiskLevel = 'low' | 'medium' | 'high';
export type ProjectType = 'solar' | 'wind' | 'hydro' | 'storage';
export type Region = 'chile' | 'brazil' | 'peru' | 'colombia';

export interface Project {
  id: string | number;
  name: string;
  location: string;
  type: string;
  capacity: string;
  investment: number;
  image: string;
  riskScore: number;
  irr: number;
  riskLevel: string;
  energySecurity: number;
  status: string;
  developer: string;
  ppaTerm: number;
  carbonOffset: number;
  description: string;
  
  financials: {
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
  
  timeline: {
    development: string;
    construction: string;
    commissioning: string;
    operation: string;
    ppaStart: string;
    ppaEnd: string;
  };
  
  energyMetrics: {
    annualGeneration: number;
    capacityFactor: number;
    availability: number;
    performanceRatio: number;
    degradationRate: number;
  };
  
  environmental: {
    carbonOffset: number;
    landUse: number;
    waterUsage: number;
    biodiversityImpact: string;
    socialImpact: string;
  };
  
  team: {
    developer: string;
    epc: string;
    oem: string;
    om: string;
    legal: string;
    technical: string;
  };
}

export interface ProjectFilters {
  minPrice: number;
  maxPrice: number;
  projectTypes: ProjectType[];
  regions: Region[];
  riskLevels: RiskLevel[];
  projectStatuses: ProjectStatus[];
} 