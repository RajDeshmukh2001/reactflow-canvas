import React, { useState } from 'react';
import { Check, SquarePen } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useAppStore } from '@/store';

type ServiceHeaderProps = {
  label: string;
  logo: string;
};

const ServiceHeader = ({ label, logo }: ServiceHeaderProps): React.JSX.Element => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(label);

  const selectedNodeId = useAppStore((state) => state.selectedNodeId);
  const updateNodeLabel = useAppStore((state) => state.updateNodeLabel);

  const handleSave = () => {
    setIsEditing(false);

    updateNodeLabel(selectedNodeId!, value);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img
          src={logo}
          alt={label}
          className="bg-background dark:bg-foreground border border-sidebar-border size-6 p-1 rounded-sm"
        />

        {isEditing ? (
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSave();
              }
            }}
            autoFocus
          />
        ) : (
          <h4 className="text-sm font-medium">{value}</h4>
        )}
      </div>

      {isEditing ? (
        <Check onClick={handleSave} className="size-4 cursor-pointer text-green-500" />
      ) : (
        <SquarePen
          onClick={() => setIsEditing(true)}
          className="size-3.5 text-muted-foreground hover:text-foreground transition duration-250 ease-in-out cursor-pointer"
        />
      )}
    </div>
  );
};

export default ServiceHeader;
