import { useState, useEffect } from 'react';
// import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Navbar from '../../components/navbar';
import { Sidebar } from '../../components/sidebar';

import { Box, Container, Grid } from '@mui/material';
import { Budget } from '../../components/event/budget';
import SkillsTable from '../../components/skill/skills-table';
// import LatestProducts from '../../components/event/latest-products';
// import { Sales } from '../../components/event/sales';
import { TasksProgress } from '../../components/event/tasks-progress';
import { TotalCustomers } from '../../components/event/total-customers';
import { TotalProfit } from '../../components/event/total-profit';
// import { TrafficByDevice } from '../../components/event/traffic-by-device';
// import { DashboardLayout } from '../../components/event-layout';



const DashboardLayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 64,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 280
  }
}));

export const Skill= () => {
  // const { children } = props;
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  

  


  return (
    <>
      <DashboardLayoutRoot>
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            width: '100%'
          }}
        >
            <>
    {/* <header>
      <title>
        Dashboard | Material Kit
      </title>
    </header> */}
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            {/* <Budget /> */}
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            {/* <TotalCustomers /> */}
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            {/* <TasksProgress /> */}
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            {/* <TotalProfit sx={{ height: '100%' }} /> */}
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            {/* <Sales /> */}
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            {/* <TrafficByDevice sx={{ height: '100%' }} /> */}
          </Grid>
          {/* <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <LatestProducts sx={{ height: '100%' }} />
          </Grid> */}
          <Grid
            item
            lg={12}
            md={12}
            xl={9}
            xs={12}
          >
            <SkillsTable />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
        </Box>
      </DashboardLayoutRoot>
      <Navbar onSidebarOpen={() => setSidebarOpen(true)} />
      <Sidebar
        onClose={() => setSidebarOpen(false)}
        open={isSidebarOpen}
      />
    </>
  );
};


export default Skill;