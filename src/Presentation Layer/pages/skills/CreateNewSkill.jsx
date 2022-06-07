import { useState } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Navbar from '../../components/navbar';
import { Sidebar } from '../../components/sidebar';
import AddSkill from '../../components/skill/add-skill';

const DashboardLayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 64,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 280
  }
}));

export const CreateNewSkill= (props) => {
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
                Add New Skill
                </Typography>
                <Grid
                container
                spacing={3}
                >
                
                <Grid
                    item
                    lg={12}
                    md={12}
                    xs={12}
                >
                    <AddSkill />
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


export default CreateNewSkill;