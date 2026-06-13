import React from 'react';
import './App.css';
import AppLayout from '@/components/layout/AppLayout';
import { ThemeProvider } from '@/components/theme-provider';

const App = (): React.JSX.Element => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AppLayout />
    </ThemeProvider>
  );
};

export default App;
