import React from 'react';
import { Grid } from '@material-ui/core';
import MUIDataTable from "mui-datatables";

import PageTitle from '../../../../../components/DashboardPage/PageTitle';
import Widget from '../../../../../components/DashboardPage/Widget';
import Table from '.';
import mock from '../mock'; 

const datatableData = [
 ["Joe James", "OrderId", "Yonkers", "NY"],
 ["John Walsh", "OrderId", "Hartford", "CT"],
 ["Bob Herm", "OrderId", "Tampa", "FL"],
 ["James Houston", "OrderId", "Dallas", "TX"],
 ["Prabhakar Linwood", "OrderId", "Hartford", "CT"],
 ["Kaui Ignace", "OrderId", "Yonkers", "NY"],
 ["Esperanza Susanne", "OrderId", "Hartford", "CT"],
 ["Christian Birgitte", "OrderId", "Tampa", "FL"],
 ["Meral Elias", "OrderId", "Hartford", "CT"],
 ["Deep Pau", "OrderId", "Yonkers", "NY"],
 ["Sebastiana Hani", "OrderId", "Dallas", "TX"],
 ["Marciano Oihana", "OrderId", "Yonkers", "NY"],
 ["Brigid Ankur", "OrderId", "Dallas", "TX"],
 ["Anna Siranush", "OrderId", "Yonkers", "NY"],
 ["Avram Sylva", "OrderId", "Hartford", "CT"],
 ["Serafima Babatunde", "OrderId", "Tampa", "FL"],
 ["Gaston Festus", "OrderId", "Tampa", "FL"],
];

const Tables = props => (
  <React.Fragment>
    <PageTitle title="Enkeep Orders" />
    <Grid container spacing={32}>
      <Grid item xs={12}>
        <MUIDataTable
          title="New Orders"
          data={datatableData}
          columns={["Name", "OrderId", "City", "State"]}
          options={{
            filterType: 'checkbox',
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Widget title="Shipped" upperTitle noBodyPadding>
          <Table data={mock.table} />
        </Widget>
      </Grid>
    </Grid>
  </React.Fragment>
);

export default Tables;