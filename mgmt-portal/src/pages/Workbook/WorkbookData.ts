export interface IWorkbookData {
  partNumber: string;
  jobNumber: number;
  description: string;
  operator: string;
  recvDate: string;
  stockDate: string;
}

export const WorkbookData: IWorkbookData[] = [
  {
    partNumber: 'ABCD12345',
    jobNumber: 12345,
    description: 'Part One',
    operator: 'Joe',
    recvDate: '01/01/2021',
    stockDate: '01/01/2021',
  },
  {
    partNumber: 'EFGH67890',
    jobNumber: 67890,
    description: 'Part Two',
    operator: 'Jane',
    recvDate: '02/02/2021',
    stockDate: '02/02/2021',
  },
];
