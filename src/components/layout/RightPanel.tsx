import React from 'react';
import AppList from '../AppList';
import NodeInspector from '../inspector/NodeInspector';

const RightPanel = (): React.JSX.Element => {
  return (
    <aside className="h-full flex flex-col min-h-0 md:border-l">
      <AppList />
      <hr />
      <NodeInspector />
    </aside>
  );
};

export default RightPanel;
