import React from 'react';
import MetricControl from './MetricControl';
import type { MetricDefinition, NodeMetrics } from '@/types/node';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type MetricTabsProps = {
  metricDefinitions: MetricDefinition[];
  metrics: NodeMetrics;
};

const MetricTabs = ({ metricDefinitions, metrics }: MetricTabsProps): React.JSX.Element => {
  return (
    <Tabs defaultValue="cpu">
      <TabsList className="w-full border dark:border-0 mb-4">
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

      {metricDefinitions.map((metric) => {
        const m = metrics[metric.key];
        return (
          <TabsContent key={metric.id} value={metric.key}>
            <MetricControl value={m} />
          </TabsContent>
        );
      })}
    </Tabs>
  );
};

export default MetricTabs;
