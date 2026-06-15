import React from 'react';
import { Menu } from 'lucide-react';
import RightPanel from './RightPanel';
import { useAppStore } from '@/store';
import { ModeToggle } from '../mode-toggle';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Topbar = (): React.JSX.Element => {
  const isMobilePanelOpen = useAppStore((state) => state.isMobilePanelOpen);
  const setMobilePanelOpen = useAppStore((state) => state.setMobilePanelOpen);

  return (
    <nav className="flex h-16 items-center justify-between border-b px-4">
      <h1 className="text-lg sm:text-xl font-semibold">ReactFlow Canvas</h1>

      <div className="flex items-center gap-4">
        <ModeToggle />

        <Sheet open={isMobilePanelOpen} onOpenChange={setMobilePanelOpen}>
          <SheetTrigger className="md:hidden">
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <RightPanel />
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Topbar;
