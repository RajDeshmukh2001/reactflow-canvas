import React from 'react';
import { SquarePen } from 'lucide-react';

type ServiceHeaderProps = {
  label: string;
  logo: string;
};

const ServiceHeader = ({ label, logo }: ServiceHeaderProps): React.JSX.Element => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img
          src={logo}
          alt={label}
          className="bg-background dark:bg-foreground border border-sidebar-border size-6 p-1 rounded-sm"
        />
        <h4 className="text-sm font-medium">{label}</h4>
      </div>

      <SquarePen className="size-3.5 text-muted-foreground hover:text-foreground transition duration-250 ease-in-out cursor-pointer" />
    </div>
  );
};

export default ServiceHeader;
