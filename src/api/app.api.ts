import { apps } from '@/data/apps';
import type { App } from '@/types/app';

export const getApps = async (): Promise<App[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return apps;
};
