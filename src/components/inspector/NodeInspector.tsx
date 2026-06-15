import React from 'react';
import MetricTabs from './MetricTabs';
import StatusBadge from './StatusBadge';
import ServiceHeader from './ServiceHeader';
import { SiPostgresql } from 'react-icons/si';
import { nodeMetrics } from '@/data/nodeMetrics';
import { useAppStore } from '@/store';

const NodeInspector = (): React.JSX.Element => {
  const selectedNodeId = useAppStore((state) => state.selectedNodeId);

  return (
    <section className="flex-1 p-4">
      <h3 className="mb-4 font-medium">Service Node</h3>

      <div className="space-y-6 p-4 bg-sidebar border border-sidebar-border rounded-md">
        {selectedNodeId ? (
          <>
            <ServiceHeader name="PostgreSQL" icon={SiPostgresql} />
            <MetricTabs nodeMetrics={nodeMetrics} />
            <StatusBadge status="Healthy" />
          </>
        ) : (
          <p className="text-sm text-center text-muted-foreground">Select a node to view its details</p>
        )}
      </div>
    </section>
  );
};

export default NodeInspector;
