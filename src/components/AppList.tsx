import React, { useEffect } from 'react';
import { useAppStore } from '@/store';
import useApps from '@/hooks/useApps';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

const AppList = (): React.JSX.Element => {
  const { data: apps, isPending, isError, refetch } = useApps();
  const selectedAppId = useAppStore((state) => state.selectedAppId);
  const setSelectedAppId = useAppStore((state) => state.setSelectedAppId);

  useEffect(() => {
    if (!selectedAppId && apps?.length) {
      setSelectedAppId(apps[0].id);
    }
  }, [apps, selectedAppId, setSelectedAppId]);

  return (
    <section className="flex flex-1 flex-col min-h-0 p-4">
      <h3 className="mb-4 font-medium">Applications</h3>

      <div className="flex-1 overflow-y-auto no-scrollbar">
        {isPending && (
          <div className="flex flex-col gap-2">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-8 w-full rounded" />
            ))}
          </div>
        )}

        {isError && (
          <div className="text-sm text-destructive space-y-2">
            <p className="text-center">Failed to load apps</p>
            <Button onClick={() => refetch()} className="w-full rounded-sm">
              Retry
            </Button>
          </div>
        )}

        {apps?.map((app) => (
          <div
            key={app.id}
            className={`flex items-center gap-2 rounded hover:bg-sidebar-accent cursor-pointer p-2 transition-colors duration-250 ease-in-out ${selectedAppId === app.id ? 'bg-sidebar-accent border' : 'bg-transparent'}`}
            onClick={() => setSelectedAppId(app.id)}
          >
            <div className="w-5 h-5 rounded" style={{ backgroundColor: app.logoColor }} />
            <h4 className="text-sm font-medium">{app.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AppList;
