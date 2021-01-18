import React, { useEffect, useMemo } from 'react';
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
  useRowSelect,
} from 'react-table';
// import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS } from './Columns';
import GlobalFilter from './GlobalFilter';
import Checkbox from './Checkbox';
import { useSelector, useDispatch } from 'react-redux';
import { userActions } from '../../redux/users';

import './Table.css';

const Table = () => {
  const userDispatch = useDispatch();
  const UserData = useSelector((state) => state);
  // console.log('***********************', UserData.users);
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => UserData.users, [UserData.users]);
  // const data = useMemo(() => MOCK_DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    // rows,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    state,
    setGlobalFilter,
    selectedFlatRows,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            Name: 'selection',
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <Checkbox {...getToggleAllRowsSelectedProps()} />
            ),
            Cell: ({ row }) => (
              <Checkbox {...row.getToggleRowSelectedProps()} />
            ),
          },
          ...columns,
        ];
      });
    }
  );

  useEffect(() => {
    selectedFlatRows.forEach((row, index) => {
      console.log(index);
      if (index + 1 === selectedFlatRows.length) {
        userDispatch(userActions.selectUser(row.original));
      }
    });

    // selectedFlatRows.map((row) =>
    //   userDispatch(userActions.selectUser(row.original))
    // );
  }, [selectedFlatRows]);

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  <div>
                    {column.render(`Header`)}
                    {[
                      'PLAYER NAME',
                      'LEVEL',
                      'BET',
                      'WIN',
                      'LOST',
                      'PRICE',
                    ].includes(column.render(`Header`)) && (
                      <span
                        style={{ padding: '3px', margin: '0px 2px 1px 2px' }}
                      >
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <span>&darr;</span>
                          ) : (
                            <span>&uarr;</span>
                          )
                        ) : (
                          <span>&darr;&uarr;</span>
                        )}
                      </span>
                    )}
                  </div>
                  {/* column Filter */}
                  {/* <div>{column.canFilter ? column.render(`Filter`) : null}</div> */}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <select
            name=''
            id=''
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {[10, 20, 30].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {'<<'}
          </button>
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            {'<'}
          </button>{' '}
          <span>
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{' '}
          </span>{' '}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            {'>'}
          </button>
          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {'>>'}
          </button>
        </div>
      </div>
      <pre>
        <code>
          {JSON.stringify(
            {
              selectedFlatRows: selectedFlatRows.map((row) => {
                // userDispatch.userActions(selectUser(row.original));
                return row.original;
              }),
              // selectedFlatRows: selectedFlatRows.map((row) => row.original),
            },
            null,
            2
          )}
        </code>
      </pre>
    </>
  );
};

export default Table;
