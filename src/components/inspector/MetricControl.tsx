import React from 'react';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';

type MetricControlProps = {
  value: number;
  onChange: (value: number) => void;
};

const MetricControl = ({ value, onChange }: MetricControlProps): React.JSX.Element => {
  return (
    <div className="flex items-center gap-4">
      <Slider
        value={[value]}
        onValueChange={(value) => onChange(value[0])}
        max={100}
        step={1}
        className="w-full"
      />

      <Input
        type="number"
        onChange={(e) => onChange(Number(e.target.value))}
        value={value}
        className="w-20"
      />
    </div>
  );
};

export default MetricControl;
