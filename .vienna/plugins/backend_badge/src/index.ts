import { definePlugin } from '@tryvienna/sdk';
import { ProfileMenuBarIcon } from './ui/MenuBarIcon';
import { ProfileMenuBarContent } from './ui/MenuBarContent';

export const profilePlugin = definePlugin({
  id: 'backend_badge',
  name: 'Backend Engineer',
  description: 'Tools for backend development workflows',
  icon: { text: '🔧' },

  integrations: [],
  entities: [],

  canvases: {
    'menu-bar': {
      icon: ProfileMenuBarIcon,
      component: ProfileMenuBarContent,
      label: 'Backend Engineer',
      priority: 50,
    },
  },
});
