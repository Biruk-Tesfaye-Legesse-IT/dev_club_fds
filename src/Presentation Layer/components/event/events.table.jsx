import React, { useEffect } from 'react';
import { format } from 'date-fns';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip, 
  Typography,
  Grid
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { SeverityPill } from '../severity-pill';
import { connect, useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import AddIcon from '@mui/icons-material/Add';
import { Link, useNavigate } from 'react-router-dom';

import DeleteRounded from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';


import { getEvents, deleteEvent, getEvent } from "../../../Business Layer/thunks/event/events.thunk";
import { NestCamWiredStandTwoTone } from '@mui/icons-material';

const AddNewButton = () => {
  
  return (
    
 
    <Link to='/addEvent' style={{ textDecoration: 'none' }}>
    <Button
    startIcon={<AddIcon />}
    color="primary"
    fullWidth
    variant="contained"
  >
    Add New Event
  </Button>
    
    </Link>

    
    
   )
}



const EventsTable = function (props) {
  const [open, setOpen] = React.useState(false);
  let navigate = useNavigate()

  useEffect(() => {

    
    props.getevents();  
  
    console.log('Woooo', props.events.events);
    
  }, []);

  // const {loading, events, error} = useSelector(state => state.events || {})

  useEffect(() => {

    console.log('Component Will Change');
    
    
  }, [props.events.event]);
  

  // const {loading, events, error} = useSelector(state => state.events || {})

  function loadedShow(){
    if (props.events.error === 'Network Error') {
      return <div style={{textAlign: 'center'}}>
      
      <Typography
        color="textSecondary"
        gutterBottom
        variant="overline"
      >
        Ooops... Something went wrong.
      </Typography>
        
    </div>
        
      }
    else if (props.events.error) {
      return <div style={{textAlign: 'center'}}>
      
      <Typography
        color="textSecondary"
        gutterBottom
        variant="overline"
      >
        {props.events.error}
      </Typography>
        
    </div>
        
      }
    else if (props.events.eventsLoading) {
      return <div style={{textAlign: 'center'}}>
      
        <CircularProgress color="inherit" size={25} />

    </div>
      // <React.Fragment justifyContent="flex-end"><CircularProgress color="inherit" size={30} /></React.Fragment>
    }
  else if (props.events.events) {
    return (
      <>
      <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            ID
          </TableCell>
          <TableCell>
            Starting Date
          </TableCell>
          <TableCell>
            Application Deadline
          </TableCell>
          <TableCell >
            Description
          </TableCell>
          <TableCell align='center'>
            Required Position
          </TableCell>
          <TableCell align='center'>
            Actions
          </TableCell>
        </TableRow>
      </TableHead>
      
    
   
    <TableBody>
    {props.events && Array.from(props.events.events).map((event) => (
      <TableRow
     
        hover
        {...console.log('EvenTable.jsx: event', event)}
        key={event.id}
      >
        <TableCell

          onClick={() => {
            navigate(`/eventDetails/${event.id}`)
          }}
        
        >
          {event.id}
        </TableCell>
        {/* ========================= */}

        <TableCell

          onClick={() => {
            navigate(`/eventDetails/${event.id}`)
          }}

          >
          {event.starting_date}
        </TableCell>

        <TableCell

          onClick={() => {
            navigate(`/eventDetails/${event.id}`)
          }}

          >
          {event.application_deadline}
        </TableCell>

        <TableCell

          onClick={() => {
            navigate(`/eventDetails/${event.id}`)
          }}

          >
            
          {event.description}
        </TableCell>

        {/* ================================== */}

        <TableCell align='center'>
          <SeverityPill
            color={(event.required_positions === 'delivered' && 'success')
            || (event.required_positions === 'refunded' && 'error')
            || 'warning'}
          >
            {event.required_positions}
          </SeverityPill>
        </TableCell>

        {/* ============================= */}
         <TableCell align='center'>
          <Button onClick={() => {
            navigate(`/editEvent/${event.id}`)
            props.getevent(event.id)
            }}>
        
         
            <EditRoundedIcon color='secondary'/>
          </Button>
          <Button onClick={() => {
            props.deleteevent(event.id)
            window.location.reload()
          }}>
            <DeleteRounded color='secondary'/>
          </Button>
        </TableCell> 
        
      </TableRow>
    ))}
  </TableBody>
  </Table>
  </>
  )
  }

 
  }    

  

      return(
        // <Card {...props}>
        <Card>
          <CardHeader title="Events" action={<AddNewButton/>}/>
          <PerfectScrollbar>
            <Box sx={{ minWidth: 800 }}>
            {loadedShow()}
            </Box>
          </PerfectScrollbar>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              p: 2
            }}
          >
            {/* <Button
              color="primary"
              endIcon={<ArrowRightIcon fontSize="small" />}
              size="small"
              variant="text"
            >
              View all
            </Button> */}
          </Box>
        </Card>
        )
      
    }
   
const mapStateToProps = state => {
  return {
    events: state.events
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getevents: () => dispatch(getEvents()),
    getevent: (id) => dispatch(getEvent(id)),
    deleteevent: (id) => dispatch(deleteEvent(id))
    

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsTable);



  
 
