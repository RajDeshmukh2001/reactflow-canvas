import React from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { SiGithub, SiPostgresql, SiRedis, SiMongodb, SiDocker } from 'react-icons/si';

const sidebarItems = [
  {
    name: 'Github',
    icon: SiGithub,
    color: '#181717',
  },
  {
    name: 'PostgreSQL',
    icon: SiPostgresql,
    color: '#336791',
  },
  {
    name: 'Redis',
    icon: SiRedis,
    color: '#DC382D',
  },
  {
    name: 'MongoDB',
    icon: SiMongodb,
    color: '#47A248',
  },
  {
    name: 'Docker',
    icon: SiDocker,
    color: '#2496ED',
  },
];

const Sidebar = (): React.JSX.Element => {
  return (
    <aside className="flex flex-col gap-6 p-4 w-fit h-full bg-sidebar text-sidebar-foreground border-r border-sidebar-border">
      {sidebarItems.map((item) => {
        const Icon = item.icon;

        return (
          <Tooltip key={item.name}>
            <TooltipTrigger>
              <Icon className="size-5" />
            </TooltipTrigger>
            <TooltipContent side="right">{item.name}</TooltipContent>
          </Tooltip>
        );
      })}
    </aside>
  );
};

export default Sidebar;
