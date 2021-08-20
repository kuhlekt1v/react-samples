import React, { useMemo } from 'react';
import { Column } from 'react-table';

import { EditableTable } from '../../components/EditableTable/EditableTable';

// Reference: https://codesandbox.io/s/cranky-gauss-806fd?file=/src/App.js:1526-1573
// Reference: https://react-table.tanstack.com/

interface IData {
  partNumber: string;
  jobNumber: number;
  description: string;
  operator: string;
  recvDate: string;
  stockDate: string;
}

export const WorkbookPage = () => {
  const columns: Column<IData>[] = useMemo(
    () => [
      {
        Header: 'Sample Machine Name',
        columns: [
          { Header: 'Part #', accessor: 'partNumber' },
          { Header: 'Job #', accessor: 'jobNumber' },
          { Header: 'Description', accessor: 'description' },
          { Header: 'Operator', accessor: 'operator' },
          { Header: 'Recv. Date', accessor: 'recvDate' },
          { Header: 'Stk. Date', accessor: 'stockDate' },
        ],
      },
    ],
    [],
  );

  const data: IData[] = useMemo(
    () => [
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
    ],
    [],
  );

  return <EditableTable columns={columns} data={data} />;
};
