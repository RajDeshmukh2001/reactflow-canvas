import React from 'react';
import Topbar from './Topbar';
import Sidebar from './Sidebar';

const AppLayout = (): React.JSX.Element => {
  return (
    <div className="max-h-screen h-screen flex flex-col">
      <Topbar />

      <div className="grid flex-1 grid-cols-12 h-full">
        <Sidebar />
      </div>
    </div>
  );
};

export default AppLayout;
