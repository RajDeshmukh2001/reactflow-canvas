import React from 'react';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import GraphCanvas from '../GraphCanvas';
import RightPanel from './RightPanel';

const AppLayout = (): React.JSX.Element => {
  return (
    <div className="sm:max-h-screen h-screen flex flex-col">
      <Topbar />

      <div className="flex flex-1 justify-between h-full">
        <Sidebar />
        <GraphCanvas />

        <div className="hidden md:block flex-3 h-full">
          <RightPanel />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
