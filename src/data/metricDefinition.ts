import type { MetricDefinition } from '@/types/node';
import { Cpu, MemoryStick, HardDrive, Database } from 'lucide-react';

export const metricDefinitions: MetricDefinition[] = [
  {
    id: '33d8d6f2-2770-45a9-b880-4a1f41247593',
    key: 'cpu',
    label: 'CPU',
    icon: Cpu,
  },
  {
    id: '7555670b-d182-451f-b50f-8dfbef347170',
    key: 'memory',
    label: 'Memory',
    icon: MemoryStick,
  },
  {
    id: '413aa7ad-c177-4b9d-b890-cb8493a7dcb6',
    key: 'disk',
    label: 'Disk',
    icon: HardDrive,
  },
  {
    id: '508e0198-4ad9-48ff-a860-bf3cc60fc98b',
    key: 'region',
    label: 'Region',
    icon: Database,
  },
];
