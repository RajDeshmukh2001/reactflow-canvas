import React from 'react';
import './App.css';
import AppLayout from '@/components/layout/AppLayout';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ThemeProvider } from '@/components/theme-provider';

const App = (): React.JSX.Element => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TooltipProvider>
        <AppLayout />
      </TooltipProvider>
    </ThemeProvider>
  );
};

export default App;
