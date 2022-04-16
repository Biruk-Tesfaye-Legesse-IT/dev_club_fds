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

import { getEvents } from "../../../Business Layer/thunks/event/events.thunk";
import { NavigateBefore } from '@material-ui/icons';

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
    
    
    </Link>)
}

const ScoutsTable = function (props) {
  let navigate = useNavigate()

  useEffect(() => {
    
    props.getevents();
    console.log('Woooo', props.events.events);
    
  }, []);

  // const {loading, events, error} = useSelector(state => state.events || {})

  function loadedShow(){
  if (props.events.error) {
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

      <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            Order Ref
          </TableCell>
          <TableCell>
            Customer
          </TableCell>
          <TableCell sortDirection="desc">
            <Tooltip
              enterDelay={300}
              title="Sort"
            >
              <TableSortLabel
                active
                direction="desc"
              >
                Date
              </TableSortLabel>
            </Tooltip>
          </TableCell>
          <TableCell>
            Status
          </TableCell>
        </TableRow>
      </TableHead>
      
    
   
    <TableBody>
    {props.events && Array.from(props.events.events).map((event) => (
      <TableRow
        onClick={() => {
          console.log(event.name);
        }}
        hover
        {...console.log('LatestOrders.jsx: event', event)}
        key={event.name}
      >
        <TableCell>
          {event.name}
        </TableCell>
        {/* ========================= */}

        <TableCell>
          {event.place}
        </TableCell>

        <TableCell>
          {event.age_limit}
        </TableCell>

        {/* ============================= */}
         <TableCell>
          <Button onClick={() => navigate(`/editEvent/${event.id}`)}>
            <DeleteRounded color='secondary'/>
          </Button>
          <Button>
            <DeleteRounded color='secondary'/>
          </Button>
        </TableCell> 

        {/* <TableCell>
          {format(event.deadline, 'dd/MM/yyyy')}
        </TableCell> */}
        {/* <TableCell>
          <SeverityPill
            color={(order.status === 'delivered' && 'success')
            || (order.status === 'refunded' && 'error')
            || 'warning'}
          >
            {order.status}
          </SeverityPill>
        </TableCell> */}
      </TableRow>
    ))}
  </TableBody>
  </Table>

  )
  }
  // else if (props.events.error) {
  //   return <React.Fragment>{props.events.error}</React.Fragment>
  // }
 
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoutsTable);



  
 
