
export interface DataPoint {
  year: number;
  temperature: number;
  co2: number;
  seaLevel: number;
}

export interface CauseItem {
  id: string;
  title: string;
  description: string;
  image: string;
  impactLevel: 'High' | 'Medium' | 'Critical';
}

export interface ImpactItem {
  id: string;
  title: string;
  category: 'Wildlife' | 'Oceans' | 'Humans';
  description: string;
  image: string;
}

export interface SolutionItem {
  id: string;
  title: string;
  category: 'Personal' | 'Systemic';
  action: string;
  benefit: string;
  icon: string;
}
