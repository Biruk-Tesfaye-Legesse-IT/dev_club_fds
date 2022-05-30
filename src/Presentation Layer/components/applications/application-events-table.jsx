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


import { getEvents } from "../../../Business Layer/thunks/event/events.thunk";
import { getApplicants } from '../../../Business Layer/thunks/applicant/applicant.thunk';


const ApplicationEventsTable = function (props) {
  const [open, setOpen] = React.useState(false);
  let navigate = useNavigate()

  useEffect(() => {

    props.getApplicants(1)
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
            Description
          </TableCell>
          <TableCell>
            Applicants
          </TableCell>
          <TableCell>
            Candidates  
          </TableCell>
          <TableCell>
            Accepted Applicants
          </TableCell>
          <TableCell>
            Close Event
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
        <TableCell>
          {event.id}
        </TableCell>
        {/* ========================= */}

        <TableCell
          >
          {event.description}
        </TableCell>

        <TableCell

         

          >
        <Button
             onClick={() => {
                navigate(`/applicants/${event.id}`)
              }}
        >
            <h4> 
                Manage {event.applicants.length} Applicant(s)
                </h4>
            
            </Button>
         
        </TableCell>

        <TableCell>
            
        <Button
             onClick={() => {
                navigate(`/candidates/${event.id}`)
              }}
        >
            <h4> 
                Manage {event.candidates.length} Candidates(s)
                </h4>
            
            </Button>
        </TableCell>

        {/* ================================== */}

        <TableCell>
        <Button
             onClick={() => {
                navigate(`/applicants/${event.id}`)
              }}
        >
            <h4> 
                View {event.accepted_applicants.length} Accepted Applicant(s)
                </h4>
            
            </Button>
        </TableCell>

        {/* ============================= */}
        
        <TableCell>
          <SeverityPill
            color='secondary'
            onClick={() => {
                navigate(`/applicants/${event.id}`)
              }}
          >
            Close Event
          </SeverityPill>
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
          {/* <CardHeader title="Events" action={<AddNewButton/>}/> */}
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
    getApplicants: (eventId) => dispatch(getApplicants(eventId))

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationEventsTable);



  
 
