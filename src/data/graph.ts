import type { AppGraph } from '@/types/node';

export const appGraphs: AppGraph[] = [
  {
    appId: '7aee1c95-544d-45cc-a008-7e8c9b0123bf',

    nodes: [
      {
        id: 'c2bad50a-7f30-4d94-8bca-bd3f7f349c36',
        position: { x: 250, y: 50 },
        data: {
          label: 'Backend',
          serviceType: 'backend',
          logoUrl: 'https://cdn.simpleicons.org/go/00ADD8',
          status: 'Healthy',
          metrics: { cpu: 70, memory: 55, disk: 40, region: 1 },
        },
      },

      {
        id: '2a5932ea-1b75-4bb8-8a27-cd233b627e8a',
        position: { x: 100, y: 250 },
        data: {
          label: 'PostgreSQL',
          serviceType: 'postgres',
          logoUrl: 'https://cdn.simpleicons.org/postgresql/4169E1',
          status: 'Healthy',
          metrics: { cpu: 75, memory: 62, disk: 48, region: 1 },
        },
      },
      {
        id: '52d915bf-1b39-4f1b-a9cc-d98b8a2c565c',
        position: { x: 400, y: 250 },
        data: {
          label: 'Redis',
          serviceType: 'redis',
          logoUrl: 'https://cdn.simpleicons.org/redis/DC382D',
          status: 'Degraded',
          metrics: { cpu: 85, memory: 90, disk: 20, region: 60 },
        },
      },
    ],

    edges: [
      {
        id: 'ff64f18d-ad72-4837-9c73-186993de5978',
        source: 'c2bad50a-7f30-4d94-8bca-bd3f7f349c36',
        target: '2a5932ea-1b75-4bb8-8a27-cd233b627e8a',
      },
      {
        id: '290fb4d5-7fb1-4109-af37-45d86f134d20',
        source: 'c2bad50a-7f30-4d94-8bca-bd3f7f349c36',
        target: '52d915bf-1b39-4f1b-a9cc-d98b8a2c565c',
      },
    ],
  },
  {
    appId: '18d61ecb-195a-4441-92a1-7bb922e07061',

    nodes: [
      {
        id: '36e43c95-7c59-423f-a08e-bbcef452a250',
        position: { x: 250, y: 50 },
        data: {
          label: 'Backend',
          serviceType: 'backend',
          logoUrl: 'https://cdn.simpleicons.org/ruby/CC342D',
          status: 'Healthy',
          metrics: { cpu: 55, memory: 40, disk: 30, region: 2 },
        },
      },
      {
        id: '1a120717-4db8-4e3b-ac32-2391728afea8',
        position: { x: 100, y: 250 },
        data: {
          label: 'MySQL',
          serviceType: 'mysql',
          logoUrl: 'https://cdn.simpleicons.org/mysql/4479A1',
          status: 'Down',
          metrics: { cpu: 95, memory: 88, disk: 92, region: 5 },
        },
      },
      {
        id: '11177c6a-d50e-4ab5-98b5-79342d4c7e54',
        position: { x: 400, y: 250 },
        data: {
          label: 'Redis',
          serviceType: 'redis',
          logoUrl: 'https://cdn.simpleicons.org/redis/DC382D',
          status: 'Healthy',
          metrics: { cpu: 30, memory: 35, disk: 15, region: 4 },
        },
      },
    ],

    edges: [
      {
        id: '4341e309-7470-408b-9183-185f981c897d',
        source: '36e43c95-7c59-423f-a08e-bbcef452a250',
        target: '1a120717-4db8-4e3b-ac32-2391728afea8',
      },
      {
        id: '551d9352-9112-4285-986c-a798c2040904',
        source: '36e43c95-7c59-423f-a08e-bbcef452a250',
        target: '11177c6a-d50e-4ab5-98b5-79342d4c7e54',
      },
    ],
  },
  {
    appId: '49d0b9b5-cebc-4e04-9f7d-8f0698d87f09',

    nodes: [
      {
        id: 'b8a66b41-1e90-4433-9d2e-7ba11f19ce84',
        position: { x: 250, y: 50 },
        data: {
          label: 'Backend',
          serviceType: 'backend',
          logoUrl: 'https://cdn.simpleicons.org/python/3776AB',
          status: 'Healthy',
          metrics: { cpu: 60, memory: 50, disk: 40, region: 25 },
        },
      },
      {
        id: 'aa668ad0-be3a-4e1d-8988-e0cceaf36df9',
        position: { x: 100, y: 250 },
        data: {
          label: 'PostgreSQL',
          serviceType: 'postgres',
          logoUrl: 'https://cdn.simpleicons.org/postgresql/4169E1',
          status: 'Healthy',
          metrics: { cpu: 35, memory: 45, disk: 60, region: 10 },
        },
      },
      {
        id: 'ae4e2562-07fa-4884-9091-af9cf552bf99',
        position: { x: 400, y: 250 },
        data: {
          label: 'MongoDB',
          serviceType: 'mongo',
          logoUrl: 'https://cdn.simpleicons.org/mongodb/47A248',
          status: 'Down',
          metrics: { cpu: 45, memory: 50, disk: 55, region: 18 },
        },
      },
    ],

    edges: [
      {
        id: 'a208e83f-5a82-4a0f-bf59-ae92b8a1e76d',
        source: 'b8a66b41-1e90-4433-9d2e-7ba11f19ce84',
        target: 'aa668ad0-be3a-4e1d-8988-e0cceaf36df9',
      },
      {
        id: '7bd345fa-bd15-4b5c-929d-2446f847b2f8',
        source: 'b8a66b41-1e90-4433-9d2e-7ba11f19ce84',
        target: 'ae4e2562-07fa-4884-9091-af9cf552bf99',
      },
    ],
  },
];
