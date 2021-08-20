import React, { useMemo } from 'react';
import { Column } from 'react-table';

import { WorkbookData } from './WorkbookData';
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
      { Header: 'Part #', accessor: 'partNumber' },
      { Header: 'Job #', accessor: 'jobNumber' },
      { Header: 'Description', accessor: 'description' },
      { Header: 'Operator', accessor: 'operator' },
      { Header: 'Recv. Date', accessor: 'recvDate' },
      { Header: 'Stk. Date', accessor: 'stockDate' },
    ],
    [],
  );

  const [data, setData] = React.useState(React.useMemo(() => WorkbookData, []));

  const updateData = (rowIndex: any, columnId: any, value: any) => {
    setData((old) =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          };
        }
        return row;
      }),
    );
  };

  return <EditableTable columns={columns} data={data} setData={setData} updateData={updateData} />;
};
