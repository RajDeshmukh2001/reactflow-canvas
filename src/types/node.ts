import type { Edge, Node } from '@xyflow/react';
import type { LucideIcon } from 'lucide-react';

export type MetricKey = 'cpu' | 'memory' | 'disk' | 'region';

export type ServiceStatus = 'Healthy' | 'Degraded' | 'Down';

export type MetricDefinition = {
  id: string;
  key: MetricKey;
  label: string;
  icon: LucideIcon;
};

export type NodeMetrics = Record<MetricKey, number>;

export type ServiceNodeData = {
  label: string;
  serviceType: string;
  status: ServiceStatus;
  description?: string;
  metrics: NodeMetrics;
};

export type ServiceNode = Node<ServiceNodeData>;

export type AppGraph = {
  appId: string;
  nodes: ServiceNode[];
  edges: Edge[];
};
