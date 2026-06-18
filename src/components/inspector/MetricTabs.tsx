import React from 'react';
import MetricControl from './MetricControl';
import type { MetricDefinition, MetricKey, NodeMetrics } from '@/types/node';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type MetricTabsProps = {
  metricDefinitions: MetricDefinition[];
  metrics: NodeMetrics;
  onMetricChange: (metricKey: MetricKey, value: number) => void;
};

const MetricTabs = ({
  metricDefinitions,
  metrics,
  onMetricChange,
}: MetricTabsProps): React.JSX.Element => {
  return (
    <Tabs defaultValue="cpu">
      <TabsList className="w-full border dark:border-0 mb-4 overflow-x-auto no-scrollbar">
        {metricDefinitions.map((metric) => {
          const Icon = metric.icon;

          return (
            <TabsTrigger key={metric.id} value={metric.key}>
              <Icon />
              {metric.label}
            </TabsTrigger>
          );
        })}
      </TabsList>

      {metricDefinitions.map((metric) => (
        <TabsContent key={metric.id} value={metric.key}>
          <MetricControl
            value={metrics[metric.key]}
            onChange={(value) => onMetricChange(metric.key, value)}
          />
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default MetricTabs;
