import React from 'react';
import { apps } from '@/data/apps';

const AppList = (): React.JSX.Element => {
  return (
    <section className="flex-1 p-4 space-y-4">
      <h3 className="font-medium">Applications</h3>

      <div className="space-y-1">
        {apps.map((app) => (
          <div key={app.id} className="flex items-center gap-2 rounded hover:bg-sidebar-accent cursor-pointer p-2 transition-colors duration-250 ease-in-out">
            <div className="w-5 h-5 rounded" style={{ backgroundColor: app.logoColor }} />
            <h4 className="text-sm">{app.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AppList;
