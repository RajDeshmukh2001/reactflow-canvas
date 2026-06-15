import type { LucideIcon } from 'lucide-react';

export type NodeMetric = {
  id: string;
  key: string;
  label: string;
  icon: LucideIcon;
  value: number;
};

export type ServiceStatus = 'Healthy' | 'Degraded' | 'Down';
