import type { LucideIcon } from 'lucide-react';

export type MetricKey = 'cpu' | 'memory' | 'disk' | 'region';

export type ServiceStatus = 'Healthy' | 'Degraded' | 'Down';

export type MetricDefinition = {
  id: string;
  key: MetricKey;
  label: string;
  icon: LucideIcon;
};
