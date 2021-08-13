import { MailboxOpenUpOutline, AlertRhombusOutline, CheckUnderlineCircleOutline } from 'mdi-material-ui';

export const icons = {
  MailboxOpenUpOutline,
  AlertRhombusOutline,
  CheckUnderlineCircleOutline,
};

export interface INotificationItem {
  id: number;
  category: string;
  subject: string;
  description?: string;
  link?: string;
  icon: keyof typeof icons;
  created: Date;
}

export const NotificationCardItems: INotificationItem[] = [
  {
    id: 1,
    category: 'message',
    subject: 'Message Subject',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in malesuada nisi, sit amet facilisis libero. Curabitur sodales pellentesque finibus. Fusce arcu quam, gravida quis.',
    icon: 'MailboxOpenUpOutline',
    created: new Date('08/13/2021 03:24:00'),
  },
  {
    id: 2,
    category: 'start',
    subject: 'Job Started',
    icon: 'AlertRhombusOutline',
    created: new Date('08/13/2021 10:56:03'),
  },
  {
    id: 3,
    category: 'attention',
    subject: 'Action Required',
    icon: 'AlertRhombusOutline',
    created: new Date('08/11/2021 10:56:03'),
  },
  {
    id: 4,
    category: 'stop',
    subject: 'Job Stopped',
    description:
      'Donec feugiat bibendum justo quis imperdiet. Nullam euismod pulvinar dolor a fermentum. Fusce vestibulum felis at ex mattis faucibus ut eu quam. Sed euismod, dolor non aliquam convallis, eros nunc sodales lectus',
    icon: 'AlertRhombusOutline',
    created: new Date('08/10/2021 10:56:03'),
  },
  {
    id: 5,
    category: 'complete',
    subject: 'Job Complete',
    description: 'Donec feugiat bibendum justo quis imperdiet.',
    icon: 'CheckUnderlineCircleOutline',
    created: new Date('08/10/2021 10:56:03'),
  },
];
