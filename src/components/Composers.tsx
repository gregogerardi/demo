import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MUIDataTable, { MUIDataTableBody, MUIDataTableOptions } from 'mui-datatables';
import { SERVER_URL } from '../properties';
import { DataTableWithLoading } from './DataTableWithLoading';

const columns = [
  {
    name: 'name',
    label: 'Name',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'nsongs',
    label: 'amount of songs',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'nrecognitions',
    label: 'amount of recognitions',
    options: {
      filter: true,
      sort: true,
    },
  },
];

export const Composers: React.FC = () => {
  return (
    <div>
      <DataTableWithLoading endpoint="composers" title={'Composers'} columns={columns}/>
    </div>
  );
};
