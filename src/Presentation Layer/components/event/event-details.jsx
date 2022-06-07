import {useEffect, useLayoutEffect} from 'react';
import React from 'react';
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
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Checkbox,
} from '@mui/material';

import PhoneTwoToneIcon from '@mui/icons-material/PhoneTwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import MessageTwoToneIcon from '@mui/icons-material/MessageTwoTone';
import { SeverityPill } from '../severity-pill';
import DeleteRounded from '@mui/icons-material/DeleteRounded';

import { getEvent, assignScout } from "../../../Business Layer/thunks/event/events.thunk";
import { getScouts } from "../../../Business Layer/thunks/scout/scouts.thunk";


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

  let { event, scouts } = props;

  // let usableEvent = event.event;

  

  let selectedScouts = [];

  

  console.log('brazaaa', selectedScouts);  

  const [checked, setChecked] = React.useState(true);

  useEffect(() => {
    props.getscouts();
    props.getevent(id); 
  }, []); 

  function loadedShow(){
    if (props.event.eventLoading) {
      return <>
        <Box display="flex" justifyContent="center" alignItems="center" m={2}>
          <CircularProgress />
        </Box>
      </>
    }

    else if (props.event.event) {
      let event = props.event.event;
      var OGScoutsID = event.scouts;
      OGScoutsID.forEach(function(scoutID) {
        selectedScouts.push(scoutID);
      });
      return(
        <div>
         {/* <Card className={classes.root}> */}
         
     
         
   
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
        <CardHeader 
          title = 'Select Scouts to Assign' 
          action={

            <Button
    // startIcon={<AddIcon />}
    color="primary"
    fullWidth
    variant="contained"
    onClick={() => {
      props.assignscouts(id, selectedScouts);}}
  >
    Assign Scouts
  </Button>
          }
          />
         
       
     <CardContent>
     <>
      <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            ID
          </TableCell>
          <TableCell>
            Full Name
          </TableCell>
          {/* <TableCell>
            Gender
          </TableCell> */}
          <TableCell>
           
            Phone Number
             
          </TableCell>
          <TableCell>
            Assigned
          </TableCell>
          <TableCell>
            
          </TableCell>
        </TableRow>
      </TableHead>
      
    
   
    <TableBody>
    {props.scouts && Array.from(props.scouts.scouts).map((scout) => (
      <TableRow
        // onClick={() => {
        //   console.log(scout.name);
        // }}
        // hover
        // {...console.log('ScouTable.jsx: scout', scout)}
        // key={scout.id}
      >
        <TableCell
          // onClick={() => navigate(`/scoutDetails/${scout.id}`)}
        >
          <Checkbox
            defaultChecked = {selectedScouts.includes(scout.id)}
            // disabled = {selectedScouts.includes(scout.id)}
            onChange={() => {
              
              
              if (selectedScouts.indexOf(scout.id) !== -1) {
                  selectedScouts.splice(selectedScouts.indexOf(scout.id), 1);
                  console.log('You unselected',scout.id, 'so', selectedScouts);
                  // setChecked(false);
              } else {
                selectedScouts.push(scout.id);
                console.log('You selected',scout.id, 'so', selectedScouts);
                // setChecked(true);
              } 
             
            }}
            
          />
        </TableCell>
        {/* ========================= */}

        <TableCell
          // onClick={() => navigate(`/scoutDetails/${scout.id}`)}
        >
          {`${scout.first_name} ${scout.last_name}`}
          
        </TableCell>

        {/* <TableCell
          // onClick={() => navigate(`/scoutDetails/${scout.id}`)}
        >
          {scout.more.gender ? 'M' : 'F'}
        </TableCell> */}

        <TableCell
          // onClick={() => navigate(`/scoutDetails/${scout.id}`)}
        >
          {scout.phone_number}
        </TableCell>

        <TableCell
          // onClick={() => navigate(`/scoutDetails/${scout.id}`)}
        >
          <SeverityPill
            color={(scout.more.is_assigned === true && 'success')
            || (scout.more.is_assigned === false && 'error')
            || 'warning'}
          >
            {scout.more.is_assigned ? 'Yes' : 'No'}
          </SeverityPill>
        </TableCell>

        {/* ============================= */}
         {/* <TableCell>
          
            <Button onClick={() => { props.assignscout(id, scout.id) }}>
              Assign 
          </Button>
        </TableCell>  */}


      </TableRow>
    ))}
  </TableBody>
  </Table>
   
  </>
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
        <CardHeader title = 'Unlikely' />
        
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
    event: state.events,
    scouts: state.scouts
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getevent: (id) => dispatch(getEvent(id)),
    getscouts: () => dispatch(getScouts()),
    assignscouts: (eventID, scoutID) => dispatch(assignScout(eventID, scoutID)),
    // getParameters: () => dispatch(getParameters()),

    // getevents: () => dispatch(getEvent()),

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetailComponent);


