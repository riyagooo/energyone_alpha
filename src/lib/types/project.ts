export type ProjectStatus = 'development' | 'construction' | 'operational';
export type RiskLevel = 'low' | 'medium' | 'high';
export type ProjectType = 'solar' | 'wind' | 'hydro' | 'storage';
export type Region = 'chile' | 'brazil' | 'peru' | 'colombia';

export interface Project {
  id: string;
  name: string;
  type: ProjectType;
  status: ProjectStatus;
  region: Region;
  riskLevel: RiskLevel;
  investment: number;
  
  // Energy Metrics
  capacity: number;
  annualGeneration: number;
  capacityFactor: number;
  peakGeneration: number;
  gridConnection: string;
  ppaType: string;
  
  // Environmental Impact
  carbonOffset: number;
  landUse: number;
  waterSavings: number;
  biodiversityScore: number;
  airQualityImprovement: number;
  wasteReduction: number;
  communityPrograms: number;
}

export interface ProjectFilters {
  minPrice: number;
  maxPrice: number;
  projectTypes: ProjectType[];
  regions: Region[];
  riskLevels: RiskLevel[];
  projectStatuses: ProjectStatus[];
} 