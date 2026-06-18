import type { AppGraph } from '@/types/node';
import { getGraphByAppId } from '@/api/graph.api';
import { useQuery, type UseQueryResult } from '@tanstack/react-query';

const useGraph = (appId: string | null): UseQueryResult<AppGraph, Error> => {
  return useQuery({
    queryKey: ['graph', appId],
    queryFn: () => getGraphByAppId(appId!),
    enabled: !!appId,
  });
};

export default useGraph;
