import React from 'react';
import MetricControl from './MetricControl';
import type { NodeMetric } from '@/types/node';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type MetricTabsProps = {
  nodeMetrics: NodeMetric[];
};

const MetricTabs = ({ nodeMetrics }: MetricTabsProps): React.JSX.Element => {
  return (
    <Tabs defaultValue="cpu">
      <TabsList className="w-full border dark:border-0 mb-4">
        {nodeMetrics.map((metric) => {
          const Icon = metric.icon;

          return (
            <TabsTrigger key={metric.id} value={metric.key}>
              <Icon />
              {metric.label}
            </TabsTrigger>
          );
        })}
      </TabsList>

      {nodeMetrics.map((metric) => (
        <TabsContent key={metric.id} value={metric.key}>
          <MetricControl value={metric.value} />
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default MetricTabs;
