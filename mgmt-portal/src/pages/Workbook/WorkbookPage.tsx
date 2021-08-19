import React, { useMemo } from 'react';
import { useTable, Column } from 'react-table';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// Reference: https://codesandbox.io/s/cranky-gauss-806fd?file=/src/App.js:1526-1573

interface IData {
  partNumber: string;
  jobNumber: number;
  description: string;
  operator: string;
  recvDate: string;
  stockDate: string;
}

const EditableCell = ({ value: initialValue, row: { index }, column: { id } }: any) => {
  const [value, setValue] = React.useState(initialValue);

  const onChange = (e: any) => {
    setValue(e.target.value);
  };

  const onBlur = () => {
    console.log(value);
    // updateMyData(index, id, value);
  };

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return <input value={value} onChange={onChange} onBlur={onBlur} />;
};

const defaultColumn = {
  Cell: EditableCell,
};

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

  // Random date for sample.
  let randDate = new Date(+new Date() - Math.floor(Math.random() * 10000000000)).toLocaleDateString('en-US');

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

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
    defaultColumn,
  });

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple-table" {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableCell style={{ fontWeight: 'bold' }} {...column.getHeaderProps()}>
                  {column.render('Header')}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>

        <TableBody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);

            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>;
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
