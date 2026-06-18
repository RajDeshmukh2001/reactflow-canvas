import React from 'react';
import MetricTabs from './MetricTabs';
import StatusBadge from './StatusBadge';
import ServiceHeader from './ServiceHeader';
import { metricDefinitions } from '@/data/metricDefinition';
import { useAppStore } from '@/store';
import type { MetricKey } from '@/types/node';

const NodeInspector = (): React.JSX.Element => {
  const nodes = useAppStore((state) => state.nodes);
  const selectedNodeId = useAppStore((state) => state.selectedNodeId);

  const selectedNode = nodes.find((node) => node.id === selectedNodeId);

  const updateNodeMetric = useAppStore((state) => state.updateNodeMetric);

  const handleMetricChange = (metricKey: MetricKey, value: number) => {
    if (!selectedNode) return;

    updateNodeMetric(selectedNode.id, metricKey, value);
  };

  return (
    <section className="flex-1 p-4">
      <h3 className="mb-4 font-medium">Service Node</h3>

      <div className="space-y-6 p-4 bg-sidebar border border-sidebar-border rounded-md">
        {selectedNode ? (
          <>
            <ServiceHeader label={selectedNode.data.label} logo={selectedNode.data.logoUrl} />
            <MetricTabs
              metricDefinitions={metricDefinitions}
              metrics={selectedNode.data.metrics}
              onMetricChange={handleMetricChange}
            />
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
