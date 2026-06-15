import React from 'react';
import { SquarePen } from 'lucide-react';
import type { IconType } from 'react-icons';

type ServiceHeaderProps = {
  name: string;
  icon: IconType;
};

const ServiceHeader = ({ name, icon: Icon }: ServiceHeaderProps): React.JSX.Element => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Icon className="bg-[#4169E1] size-6 p-1 rounded-sm" />
        <h4 className="text-sm font-medium">{name}</h4>
      </div>

      <SquarePen className="size-3.5 text-muted-foreground hover:text-foreground transition duration-250 ease-in-out cursor-pointer" />
    </div>
  );
};

export default ServiceHeader;
