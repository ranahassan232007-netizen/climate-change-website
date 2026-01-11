
import { DataPoint, CauseItem, ImpactItem, SolutionItem } from './types';

export const CLIMATE_DATA: DataPoint[] = [
  { year: 2000, temperature: 0.39, co2: 369.7, seaLevel: 48.7 },
  { year: 2002, temperature: 0.63, co2: 373.5, seaLevel: 52.1 },
  { year: 2004, temperature: 0.54, co2: 377.7, seaLevel: 55.4 },
  { year: 2006, temperature: 0.64, co2: 382.1, seaLevel: 61.2 },
  { year: 2008, temperature: 0.54, co2: 385.9, seaLevel: 66.8 },
  { year: 2010, temperature: 0.72, co2: 390.1, seaLevel: 71.3 },
  { year: 2012, temperature: 0.65, co2: 394.1, seaLevel: 76.9 },
  { year: 2014, temperature: 0.75, co2: 398.8, seaLevel: 82.4 },
  { year: 2016, temperature: 1.02, co2: 404.5, seaLevel: 88.1 },
  { year: 2018, temperature: 0.85, co2: 408.7, seaLevel: 93.7 },
  { year: 2020, temperature: 1.02, co2: 414.2, seaLevel: 99.4 },
  { year: 2022, temperature: 0.89, co2: 418.5, seaLevel: 104.2 },
  { year: 2024, temperature: 1.15, co2: 423.1, seaLevel: 108.9 },
  { year: 2025, temperature: 1.21, co2: 425.4, seaLevel: 112.5 },
];

export const CAUSES: CauseItem[] = [
  {
    id: 'fossil-fuels',
    title: 'Fossil Fuel Combustion',
    description: 'Burning coal, oil, and gas for energy and transport accounts for over 75% of global greenhouse gas emissions.',
    image: 'https://picsum.photos/seed/smoke/800/600',
    impactLevel: 'Critical'
  },
  {
    id: 'deforestation',
    title: 'Deforestation',
    description: 'Cutting down forests reduces the Earth\'s ability to absorb CO2. Trees release carbon when cleared.',
    image: 'https://picsum.photos/seed/forest/800/600',
    impactLevel: 'High'
  },
  {
    id: 'agriculture',
    title: 'Industrial Agriculture',
    description: 'Livestock farming and fertilizers release methane and nitrous oxide, potent greenhouse gases.',
    image: 'https://picsum.photos/seed/farm/800/600',
    impactLevel: 'Medium'
  }
];

export const IMPACTS: ImpactItem[] = [
  {
    id: 'polar-bears',
    title: 'Arctic Habitat Loss',
    category: 'Wildlife',
    description: 'Declining sea ice forces polar bears and seals to travel further for food, threatening their survival.',
    image: 'https://picsum.photos/seed/arctic/800/600'
  },
  {
    id: 'coral-bleaching',
    title: 'Coral Reef Bleaching',
    category: 'Oceans',
    description: 'Rising ocean temperatures cause corals to expel vital algae, turning white and dying off.',
    image: 'https://picsum.photos/seed/coral/800/600'
  },
  {
    id: 'heatwaves',
    title: 'Extreme Heatwaves',
    category: 'Humans',
    description: 'Increasingly frequent and intense heatwaves pose severe health risks to vulnerable populations.',
    image: 'https://picsum.photos/seed/heat/800/600'
  }
];

export const SOLUTIONS: SolutionItem[] = [
  {
    id: 'solar',
    title: 'Renewable Energy',
    category: 'Systemic',
    action: 'Switch to solar or wind power',
    benefit: 'Eliminates carbon emissions from power generation.',
    icon: '☀️'
  },
  {
    id: 'diet',
    title: 'Plant-Rich Diet',
    category: 'Personal',
    action: 'Reduce meat consumption',
    benefit: 'Lowers demand for high-methane livestock farming.',
    icon: '🥗'
  },
  {
    id: 'transport',
    title: 'Electric Transport',
    category: 'Personal',
    action: 'Use EVs or public transit',
    benefit: 'Reduces dependence on oil and cuts tailpipe emissions.',
    icon: '🚲'
  }
];
