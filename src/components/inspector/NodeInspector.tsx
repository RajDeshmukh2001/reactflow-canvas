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

      <div
        className={`space-y-6 p-4 bg-sidebar rounded-md ${
          selectedNode?.data.type === 'database'
            ? 'border-2 border-emerald-500'
            : selectedNode?.data.type === 'service'
              ? 'border-2 border-blue-500'
              : 'border border-sidebar-border'
        }`}
      >
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

      {selectedNode && (
        <div className="flex items-center justify-end gap-6 text-[11px] mt-2">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded bg-blue-500" />
            <span>Service</span>
          </div>

          <div className="flex items-center gap-2 mt-1">
            <span className="h-3 w-3 rounded bg-emerald-500" />
            <span>Database</span>
          </div>
        </div>
      )}
    </section>
  );
};

export default NodeInspector;
