import { useState } from 'react';
import { Box, Container, Grid, Typography, Card } from '@mui/material';
import { AccountProfile } from '../components/account/account-profile';
import { AccountProfileDetails } from '../components/account/account-profile-details';
import { styled } from '@mui/system';
import Navbar from '../components/navbar';
import { Sidebar } from '../components/sidebar';
import {ChangePassword} from '../components/account/change-password';
import { connect } from 'react-redux';


const DashboardLayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 64,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 280
  }
}));

export const Account= (props) => {
  const { children } = props;
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
 
     <title>
        Account 
      </title>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{ mb: 3 }}
          variant="h4"
        >
          Manage Account
        </Typography>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <AccountProfile />
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <AccountProfileDetails />
          </Grid>

          <Grid
          item
          md={12}
          xs={12}
        >
        <Card elevation={5}>
        <ChangePassword/>
        </Card>
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

// const mapStateToProps = state => {
//   return {
//     user: state.user
//   };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getaccount: (id) => dispatch(getUserAccount()),

    

//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Account);

export default Account;
