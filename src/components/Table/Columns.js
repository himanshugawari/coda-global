export const COLUMNS = [
  {
    Header: 'PLAYER NAME',
    accessor: 'Name',
    // Filter: ColumnFilter,
  },
  {
    Header: 'LEVEL',
    // accessor:'Name'
    // Filter: ColumnFilter,
    // disableFilters: true,
  },
  {
    Header: 'AVATAR',
    accessor: 'Profile Image',
    Cell: ({ cell: { value } }) => <img src={value} width={30} alt='avatar' />,
    // Filter: ColumnFilter,
    // disableFilters: true,
  },
  {
    Header: 'BET',
    accessor: 'Bet',
    // Filter: ColumnFilter,
    // disableFilters: true,
  },
  {
    Header: 'WIN',
    // accessor:'Name'
    // Filter: ColumnFilter,
    // disableFilters: true,
  },
  {
    Header: 'LOST',
    // accessor:'Name'
    // Filter: ColumnFilter,
    // disableFilters: true,
  },
  {
    Header: 'PRICE',
    accessor: 'Price',
    // Filter: ColumnFilter,
    // disableFilters: true,
  },
];
