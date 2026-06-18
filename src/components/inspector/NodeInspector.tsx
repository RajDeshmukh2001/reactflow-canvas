import React from 'react';
import MetricTabs from './MetricTabs';
import StatusBadge from './StatusBadge';
import ServiceHeader from './ServiceHeader';
import { metricDefinitions } from '@/data/metricDefinition';
import { useAppStore } from '@/store';
import useGraph from '@/hooks/useGraph';

const NodeInspector = (): React.JSX.Element => {
  const selectedAppId = useAppStore((state) => state.selectedAppId);
  const selectedNodeId = useAppStore((state) => state.selectedNodeId);

  const { data: selectedGraph } = useGraph(selectedAppId);
  const selectedNode = selectedGraph?.nodes.find((node) => node.id === selectedNodeId);

  return (
    <section className="flex-1 p-4">
      <h3 className="mb-4 font-medium">Service Node</h3>

      <div className="space-y-6 p-4 bg-sidebar border border-sidebar-border rounded-md">
        {selectedNode ? (
          <>
            <ServiceHeader label={selectedNode.data.label} logo={selectedNode.data.logoUrl} />
            <MetricTabs metricDefinitions={metricDefinitions} metrics={selectedNode.data.metrics} />
            <StatusBadge status={selectedNode.data.status} />
          </>
        ) : (
          <p className="text-sm text-center text-muted-foreground">
            Select a node to view its details
          </p>
        )}
      </div>
    </section>
  );
};

export default NodeInspector;
