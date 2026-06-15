import React from 'react';
import AppList from '../AppList';

const RightPanel = (): React.JSX.Element => {
  return (
    <aside className="flex-3 h-full border-l">
      <AppList />
    </aside>
  );
};

export default RightPanel;
