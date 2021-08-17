import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import EmailIcon from '@material-ui/icons/Email';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AssessmentIcon from '@material-ui/icons/Assessment';

export const icons = {
  HomeIcon,
  WorkIcon,
  EmailIcon,
  SettingsIcon,
  ExitToAppIcon,
  AssessmentIcon,
};

export interface IMenuItem {
  label: string;
  path?: string;
  icon: keyof typeof icons;
  alwaysVisible: Boolean;
}

export const DrawerMenuItems: IMenuItem[] = [
  { label: 'Home', path: './home', icon: 'HomeIcon', alwaysVisible: true },
  { label: 'Workbook', path: './workbook', icon: 'WorkIcon', alwaysVisible: true },
  { label: 'Records', path: '#', icon: 'AssessmentIcon', alwaysVisible: true },
  { label: 'Notifications', path: '#', icon: 'EmailIcon', alwaysVisible: false },
  { label: 'Settings', path: './account-settings', icon: 'SettingsIcon', alwaysVisible: false },
  { label: 'Logout', path: './', icon: 'ExitToAppIcon', alwaysVisible: false },
];
