// Material UI components.
import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
//import TableToolbar from './TableToolbar';
import { useGlobalFilter, useRowSelect, useSortBy, useTable } from 'react-table';

import { useStyles } from './EditableTable.style';

import { EditableCell } from '../../components/EditableCell/EditableCell';
import { TableToolbar } from './TableToolbar';
import { IndeterminateCheckbox } from '../IndeterminateCheckbox';
import { Paper } from '@material-ui/core';

// Reference: https://codesandbox.io/s/cranky-gauss-806fd?file=/src/App.js:1526-1573
// Reference: https://react-table.tanstack.com/

const defaultColumn = {
  Cell: EditableCell,
};

export const EditableTable = ({ columns, data, setData }: any) => {
  const classes = useStyles();

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    preGlobalFilteredRows,
    setGlobalFilter,
    state: { selectedRowIds, globalFilter },
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
    },
    useGlobalFilter,
    useSortBy,
    useRowSelect,
    (hooks) => {
      hooks.allColumns.push((columns) => [
        {
          id: 'selection',
          // Select all.
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          // Select individual cell.
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ]);
    },
  );

  const removeByIndexs = (array: any, indexs: any) => array.filter((_: any, i: any) => !indexs.includes(i));

  const deleteItemHandler = () => {
    const newData = removeByIndexs(
      data,
      Object.keys(selectedRowIds).map((x) => parseInt(x, 10)),
    );

    setData(newData);
  };

  const addJobHandler = (job: any) => {
    const newData = data.concat([job]);
    setData(newData);
  };

  return (
    <TableContainer component={Paper}>
      <TableToolbar
        numSelected={Object.keys(selectedRowIds).length}
        deleteItemHandler={deleteItemHandler}
        addJobHandler={addJobHandler}
        preGlobalFilteredRows={preGlobalFilteredRows}
        setGlobalFilter={setGlobalFilter}
        globalFilter={globalFilter}
      />
      <Table {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableCell
                  {...(column.id === 'selection'
                    ? column.getHeaderProps()
                    : column.getHeaderProps(column.getSortByToggleProps()))}
                >
                  {column.render('Header')}
                  {column.id !== 'selection' ? (
                    <TableSortLabel
                      active={column.isSorted}
                      // react-table has a unsorted state which is not treated here
                      direction={column.isSortedDesc ? 'desc' : 'asc'}
                    />
                  ) : null}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>

        <TableBody {...getTableBodyProps()}>
          {rows.map((row, i) => {
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
