import React, { useMemo } from 'react';
import { useTable, Column } from 'react-table';
import { useStyles } from './EditableTable.style';

import { EditableCell } from '../../components/EditableCell/EditableCell';

// Material UI components.
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableContainer from '@material-ui/core/TableContainer';

// Reference: https://codesandbox.io/s/cranky-gauss-806fd?file=/src/App.js:1526-1573
// Reference: https://react-table.tanstack.com/

const defaultColumn = {
  Cell: EditableCell,
};

export const EditableTable = ({ columns, data }: any) => {
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
                <TableCell {...column.getHeaderProps()}>{column.render('Header')}</TableCell>
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
