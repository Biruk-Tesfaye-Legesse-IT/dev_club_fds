import {useEffect, useLayoutEffect} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import { makeStyles, propsToClassKey } from '@mui/styles';
import { connect} from 'react-redux';
import store from '../../../Business Layer/store/store';
import { useParams  } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';


import {
  Card,
  CardContent,
  Tooltip,
  Rating,
  IconButton,
  Divider,
  ListItem,
  ListItemText,
  List,
  Avatar,
  useTheme,
  CardHeader
} from '@mui/material';

import PhoneTwoToneIcon from '@mui/icons-material/PhoneTwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import MessageTwoToneIcon from '@mui/icons-material/MessageTwoTone';

import { getEvent } from "../../../Business Layer/thunks/event/events.thunk";


// const useStyles = makeStyles({
//   root: {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     boxShadow: 24,
//   },
// });


// const DetailsModal = function({ openModal, setOpenModal, id}, props) {
const EventDetailComponent = function(props) {

  // const classes = useStyles();
  
  const theme = useTheme();

  let { id } = useParams();

  useEffect(() => {
    props.getevent(id); 
  }, []); 

  function loadedShow(){
    if (props.event.eventLoading) {
      return <CircularProgress />
    }

    else if (props.event.event) {
      let event = props.event.event;
      return(
        <div>
         {/* <Card className={classes.root}> */}
         
     
         
     {/* <Avatar
       sx={{
         mx: 'auto',
         mb: 1,
         mt: 3,
         width: theme.spacing(12),
         height: theme.spacing(12)
       }}
       variant="rounded"
       alt="Craig Donin"
       src="https://avatars.githubusercontent.com/u/60609723?v=4"
     />
     <Typography align="center" variant="h4" gutterBottom>
        {`${event.first_name} ${event.last_name}`}
     </Typography>
     <Typography align="center" variant="subtitle1" gutterBottom>
       Senior Scout
     </Typography> */}
     
     {/* <Box display="flex" alignItems="center" justifyContent="center">
       <Rating value={4} defaultValue={5} precision={1} readOnly />
       <Typography variant="h5" sx={{ pl: 0.5 }}>
         4.1
       </Typography>
     </Box> */}
     
     {/* <Box py={2} display="flex" alignItems="center" justifyContent="center"> */}
       {/* <Tooltip arrow placement="top" title="Call">
         <IconButton color="primary" sx={{ mx: 0.5 }}>
           <PhoneTwoToneIcon />
         </IconButton>
       </Tooltip> */}
       {/* <Tooltip arrow placement="top" title="Send email"> */}
         {/* <IconButton color="primary" sx={{ mx: 0.5 }}>
           <EmailTwoToneIcon /> 
         </IconButton> */}
         {/* <Button onClick={() => props.setOpenModal(false)}><EmailTwoToneIcon /> {'\u00A0'} Contact the scout</Button> */}
       
       {/* </Tooltip> */}
       {/* <Tooltip arrow placement="top" title="Send message">
         <IconButton color="primary" sx={{ mx: 0.5 }}>
           <MessageTwoToneIcon />
         </IconButton>
       </Tooltip> */}
     {/* </Box> */}
       <Typography variant='h3'>
      <Grid
        container
        spacing={3}
        direction="row"
        >

     <Grid
                  item
                  lg={12}
                  md={12}
                  xs={12}
              >
     <Card>
     <CardContent>
       <List sx={{ px: 2 }}>

     

         <ListItem sx={{ py: 1.5 }}>
           <ListItemText
             primary="Starting Date"
             primaryTypographyProps={{ variant: 'subtitle1' }}
           />
           <Typography variant="subtitle1" color="text.primary">
              {event.starting_date}        
           </Typography>
         </ListItem>


         <Divider component="li" />

         <ListItem sx={{ py: 1.5 }}>
           <ListItemText
             primary="Application Deadline"
             primaryTypographyProps={{ variant: 'subtitle1' }}
           />
           <Typography variant="subtitle1" color="text.primary">
              {event.application_deadline}         
           </Typography>
         </ListItem>


         <Divider component="li" />

         <ListItem sx={{ py: 1.5 }}>
           <ListItemText
             primary="Description"
             primaryTypographyProps={{ variant: 'subtitle1' }}
           />
           <Typography variant="subtitle1" color="text.primary">
              {event.description}       
           </Typography>
         </ListItem>


         <Divider component="li" />

          <ListItem sx={{ py: 1.5 }}>
            <ListItemText
              primary="Required Positions"
              primaryTypographyProps={{ variant: 'subtitle1' }}
            />
            <Typography variant="subtitle1" color="text.primary">
              {event.required_positions.toUpperCase()}       
            </Typography>
          </ListItem>


          <Divider component="li" />

            <ListItem sx={{ py: 1.5 }}>
              <ListItemText
                primary="Age Limit"
                primaryTypographyProps={{ variant: 'subtitle1' }}
              />
              <Typography variant="subtitle1" color="text.primary">
                {event.age_limit}              
              </Typography>
            </ListItem>

            
              <Divider component="li" />

                <ListItem sx={{ py: 1.5 }}>
                  <ListItemText
                    primary="Education Level"
                    primaryTypographyProps={{ variant: 'subtitle1' }}
                  />
                  <Typography variant="subtitle1" color="text.primary">
                    {event.education_level.toUpperCase()}
                  </Typography>
                </ListItem>

              
                <Divider component="li" />

                  <ListItem sx={{ py: 1.5 }}>
                    <ListItemText
                      primary="Location"
                      primaryTypographyProps={{ variant: 'subtitle1' }}
                    />
                    <Typography variant="subtitle1" color="text.primary">
                      {event.location}
                    </Typography>
                  </ListItem>


                  <Divider component="li" />

                    <ListItem sx={{ py: 1.5 }}>
                      <ListItemText
                        primary="Gender"
                        primaryTypographyProps={{ variant: 'subtitle1' }}
                      />
                      <Typography variant="subtitle1" color="text.primary">
                        {event.gender}
                      </Typography>
                    </ListItem>

                  
                    <Divider component="li" />

                      <ListItem sx={{ py: 1.5 }}>
                        <ListItemText
                          primary="Session time for each"
                          primaryTypographyProps={{ variant: 'subtitle1' }}
                        />
                        <Typography variant="subtitle1" color="text.primary">
                          {event.session_time_for_each}
                        </Typography>
                      </ListItem>
       </List>
     </CardContent>
     </Card>
      </Grid>


      {/* ======================================================================== */}

      <Grid
        item
        lg={12}
        md={12}
        xs={12}
    >
      <Card>
        <CardHeader>
          <Typography variant="h6" gutterBottom>
            Title
          </Typography>
        </CardHeader>
     <CardContent>
       <List sx={{ px: 2 }}>
        
         <ListItem sx={{ py: 1.5 }}>
           <ListItemText
             primary="Hired On"
             primaryTypographyProps={{ variant: 'subtitle1' }}
           />
           <Typography variant="subtitle1" color="text.primary">
             22 January 2021
           </Typography>
         </ListItem>
         <Divider component="li" />
         <ListItem sx={{ py: 1.5 }}>
           <ListItemText
             primary="Status"
             primaryTypographyProps={{ variant: 'subtitle1' }}
           />
           <Typography variant="subtitle1" color="text.primary">
             Assigned.
           </Typography>
         </ListItem>
         <Divider component="li" />
         <ListItem sx={{ py: 1.5 }}>
           <ListItemText
             primary="Tasks"
             primaryTypographyProps={{ variant: 'subtitle1' }}
           />
           <Typography
             variant="subtitle1"
             color="text.primary"
             fontWeight="bold"
           >
             67 active
           </Typography>
         </ListItem>
       </List>
     </CardContent>
     </Card>

      </Grid>

      {/* ======================================================================= */}

      <Grid
        item
        lg={12}
        md={12}
        xs={12}
    >
      <Card>
        <CardHeader>
          <Typography variant="h6" gutterBottom>
            Title
          </Typography>
        </CardHeader>
     <CardContent>
       <List sx={{ px: 2 }}>
        
         <ListItem sx={{ py: 1.5 }}>
           <ListItemText
             primary="Hired On"
             primaryTypographyProps={{ variant: 'subtitle1' }}
           />
           <Typography variant="subtitle1" color="text.primary">
             22 January 2021
           </Typography>
         </ListItem>
         <Divider component="li" />
         <ListItem sx={{ py: 1.5 }}>
           <ListItemText
             primary="Status"
             primaryTypographyProps={{ variant: 'subtitle1' }}
           />
           <Typography variant="subtitle1" color="text.primary">
             Assigned.
           </Typography>
         </ListItem>
         <Divider component="li" />
         <ListItem sx={{ py: 1.5 }}>
           <ListItemText
             primary="Tasks"
             primaryTypographyProps={{ variant: 'subtitle1' }}
           />
           <Typography
             variant="subtitle1"
             color="text.primary"
             fontWeight="bold"
           >
             67 active
           </Typography>
         </ListItem>
       </List>
     </CardContent>
     </Card>

      </Grid>

       {/* ======================================================================= */}

      </Grid>



      </Typography>
        
      </div>
    )}       
    }
  
  return (
    <>{loadedShow()}</>
  )
    
      
}

const mapStateToProps = state => {
  return {
    event: state.events
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getevent: (id) => dispatch(getEvent(id)),

    // getevents: () => dispatch(getEvent()),

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetailComponent);


