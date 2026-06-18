import { getApps } from '@/api/app.api';
import type { App } from '@/types/app';
import { useQuery, type UseQueryResult } from '@tanstack/react-query';

const useApps = (): UseQueryResult<App[], Error> => {
  return useQuery({ queryKey: ['apps'], queryFn: getApps });
};

export default useApps;
