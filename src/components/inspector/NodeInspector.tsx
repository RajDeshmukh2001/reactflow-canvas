import React from 'react';
import ServiceHeader from './ServiceHeader';
import { SiPostgresql } from 'react-icons/si';

const NodeInspector = (): React.JSX.Element => {
  return (
    <section className="flex-1 p-4">
      <h3 className="mb-4 font-medium">Service Node</h3>

      <div className="space-y-6 p-4 bg-sidebar border border-sidebar-border rounded-md">
        <ServiceHeader name="PostgreSQL" icon={SiPostgresql} />
      </div>
    </section>
  );
};

export default NodeInspector;
