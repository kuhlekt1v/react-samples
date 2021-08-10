import { ExitToApp, Settings } from '@material-ui/icons';

export const icons = {
  ExitToApp,
  Settings,
};

export interface IMenuItem {
  id: number;
  label: string;
  path: string;
  icon: keyof typeof icons;
}

export const AccountMenuItems: IMenuItem[] = [
  { id: 1, label: 'Account Settings', path: './account-settings', icon: 'Settings' },
  { id: 2, label: 'Logout', path: './', icon: 'ExitToApp' },
];
