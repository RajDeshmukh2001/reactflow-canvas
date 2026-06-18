import { appGraphs } from '@/data/graph';
import type { AppGraph } from '@/types/node';

export const getGraphByAppId = async (appId: string): Promise<AppGraph> => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const graph = appGraphs.find((graph) => graph.appId === appId);

  if (!graph) {
    throw new Error(`Graph not found`);
  }

  return graph;
};
