import React from 'react';
import MetricControl from './MetricControl';
import type { MetricDefinition } from '@/types/node';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type MetricTabsProps = {
  metricDefinitions: MetricDefinition[];
};

const MetricTabs = ({ metricDefinitions }: MetricTabsProps): React.JSX.Element => {
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

      {metricDefinitions.map((metric) => (
        <TabsContent key={metric.id} value={metric.key}>
          <MetricControl value={75} />
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default MetricTabs;
