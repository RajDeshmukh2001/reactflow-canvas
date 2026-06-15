import React from 'react';
import { Badge } from '@/components/ui/badge';
import type { ServiceStatus } from '@/types/node';

type StatusBadgeProps = {
  status: ServiceStatus;
};

const statusStyles: Record<ServiceStatus, string> = {
  Healthy: 'bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300',
  Degraded: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-400',
  Down: 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300',
};

const StatusBadge = ({ status }: StatusBadgeProps): React.JSX.Element => {
  return <Badge className={statusStyles[status]}>{status}</Badge>;
};

export default StatusBadge;
