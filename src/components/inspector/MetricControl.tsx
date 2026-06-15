import React from 'react';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';

type MetricControlProps = {
  value: number;
};

const MetricControl = ({ value }: MetricControlProps): React.JSX.Element => {
  return (
    <div className="flex items-center gap-4">
      <Slider defaultValue={[value]} max={100} step={1} className="w-full" />
      <Input type="number" defaultValue={value} className="w-20" />
    </div>
  );
};

export default MetricControl;
