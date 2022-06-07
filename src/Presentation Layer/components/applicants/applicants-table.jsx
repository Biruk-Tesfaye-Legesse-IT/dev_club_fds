import React, { useEffect } from 'react';
import { format } from 'date-fns';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Button,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Grid,
  Divider
} from '@mui/material';

import { useParams  } from 'react-router-dom';
import { SeverityPill } from '../severity-pill';
import { connect, useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import {useNavigate } from 'react-router-dom';
import { getEvent, buildTeam  } from '../../../Business Layer/thunks/event/events.thunk';
import { approveApplicant, getApplicants} from '../../../Business Layer/thunks/applicant/applicant.thunk';

const ApplicantsTable = function (props) {
  const [open, setOpen] = React.useState(false);
  let navigate = useNavigate()
  let { id } = useParams();

  useEffect(() => {
    props.getevent(id);
    props.getapplicants(id)
    console.log('Woooo', props.applicants.applicants);  
  }, []);

  const { event } = useSelector(state => state.events || {})

  const candidates = event.candidates;

  const checkIfApproved = (applicantID) => {
    console.log('applicantIDerrr', applicantID);
    if (!candidates.includes(applicantID)) {
      return true;
    }
    return false;
  }

  useEffect(() => {
    console.log('Component Will Change');
    
  }, [props.applicants.applicants
   , event]);
  

  function loadedShow(){
    console.log('lolololololololololo', candidates)
    if (props.applicants.error === 'Network Error') {
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
    else if (props.applicants.error) {
      return <div style={{textAlign: 'center'}}>
      
      <Typography
        color="textSecondary"
        gutterBottom
        variant="overline"
      >
        {props.applicants.error}
      </Typography>
        
    </div>
        
      }
    else if (props.applicants.applicantsLoading) {
      return <div style={{textAlign: 'center'}}>
      
        <CircularProgress color="inherit" size={25} />

    </div>
      // <React.Fragment justifyContent="flex-end"><CircularProgress color="inherit" size={30} /></React.Fragment>
    }
  else if (props.applicants.applicants) {
    return (
      <>
      <Table>
      <TableHead>
        <TableRow>
          <TableCell>
           DIP
          </TableCell>
          <TableCell>
            Name
          </TableCell>
          <TableCell>
            Preferred Foot
          </TableCell>
          <TableCell >
            DOB
          </TableCell>
          <TableCell align='center'>
            Playing Position
          </TableCell>
          <TableCell align='center'>
            Approve
          </TableCell>
        </TableRow>
      </TableHead>
   
    <TableBody>
    {props.applicants && Array.from(props.applicants.applicants).map((applicant) => (
      <TableRow
     
        hover
        {...console.log('ApplicanTable.jsx: applicant', applicant)}
        key={applicant.id}
      >
        <TableCell

          onClick={() => {
            navigate(`/applicantDetails/${applicant.id}`)
          }}
        
        >
          <Avatar alt="Remy Sharp" src={applicant.profile_picture} />
        </TableCell>
        {/* ========================= */}

        <TableCell

          onClick={() => {
            navigate(`/applicantDetails/${applicant.id}`)
          }}

          >
          {applicant.first_name} {applicant.last_name}
        </TableCell>

        <TableCell

          onClick={() => {
            navigate(`/applicantDetails/${applicant.id}`)
          }}

          >
          {(applicant.more.foot).toLowerCase()}
        </TableCell>

        <TableCell

          onClick={() => {
            navigate(`/applicantDetails/${applicant.id}`)
          }}

          >
            
          {applicant.more.dob ? format(new Date(applicant.more.dob), 'MM/dd/yyyy') : 'N/A'}
        </TableCell>

        {/* ================================== */}

        <TableCell align='center'>
          <SeverityPill
            color={(applicant.required_positions === 'delivered' && 'success')
            || (applicant.required_positions === 'refunded' && 'error')
            || 'warning'}
          >
            {applicant.more.playing_possition1}
          </SeverityPill>
        </TableCell>

        {/* {
            if (!(applicant.id in candidates)) {
              return 
           
          </TableCell> 
          } */}


        {/* ============================= */}
         <TableCell align='center'>
           {console.log('HOWEEE', applicant.id)}

           {
              checkIfApproved(applicant.id) ? <Button onClick={() => props.approveapplicant(id, applicant.id)}> Approve </Button> : <div>Approved</div>
             
             
           }

           {console.log(`checked that ${applicant.id} is in ${candidates}`)}
          
          </TableCell>

          
        
      </TableRow>
      
    ))}
    
  </TableBody>
  
  </Table>
 
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  p: 2
                }}
              >
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    props.buildteam(id)
                  }}
                >
                  Build Team
                </Button>
              </Box>
  
  

  </>
  
  
  )
  } 
 
 
  }     

  

      return(
  
        <Card>
          
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
   applicants: state.applicants,
   events: state.events
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getapplicants: (eventId) => dispatch(getApplicants(eventId)),
    getevent: (id) => dispatch(getEvent(id)),
    approveapplicant: (eventId, applicantId) => dispatch(approveApplicant(eventId, applicantId)),
    buildteam: (eventId) => dispatch(buildTeam(eventId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplicantsTable);



  
 
