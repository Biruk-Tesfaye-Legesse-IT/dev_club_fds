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
  Grid
} from '@mui/material';

import { useParams  } from 'react-router-dom';
import { SeverityPill } from '../severity-pill';
import { connect, useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import {useNavigate } from 'react-router-dom';
import { getEvent } from '../../../Business Layer/thunks/event/events.thunk';
import { getCandidates, acceptCandidate } from '../../../Business Layer/thunks/candidate/candidate.thunk';

const CandidatesTable = function (props) {
  const [open, setOpen] = React.useState(false);
  let navigate = useNavigate()
  let { id } = useParams();

  useEffect(() => {
    props.getevent(id);
    props.getcandidates(id)
    console.log('Woooo', props.candidates.candidates);  
  }, []);

  const { event } = useSelector(state => state.events || {})

  const accepteds = event.accepted_applicants;

  const checkIfAccepted = (candidateID) => {
    console.log('candidateIDerrr', candidateID);
    if (!accepteds.includes(candidateID)) {
      return true;
    }
    return false;
  }

  useEffect(() => {
    console.log('Component Will Change');
    
  }, [props.candidates.candidates
   , event]);
  

  function loadedShow(){
    console.log('lolololololololololo', accepteds)
    if (props.candidates.error === 'Network Error') {
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
    else if (props.candidates.error) {
      return <div style={{textAlign: 'center'}}>
      
      <Typography
        color="textSecondary"
        gutterBottom
        variant="overline"
      >
        {props.candidates.error}
      </Typography>
        
    </div>
        
      }
    else if (props.candidates.candidatesLoading) {
      return <div style={{textAlign: 'center'}}>
      
        <CircularProgress color="inherit" size={25} />

    </div>
      // <React.Fragment justifyContent="flex-end"><CircularProgress color="inherit" size={30} /></React.Fragment>
    }
  else if (props.candidates.candidates) {
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
            ACCEPT
          </TableCell>
        </TableRow>
      </TableHead>
   
    <TableBody>
    {props.candidates && Array.from(props.candidates.candidates).map((candidate) => (
      <TableRow
     
        hover
        {...console.log('CandidateTable.jsx: candidate', candidate)}
        key={candidate.id}
      >
        <TableCell

          onClick={() => {
            navigate(`/candidateResults/${candidate.id}`)
          }}
        
        >
          <Avatar alt="Remy Sharp" src={candidate.profile_picture} />
        </TableCell>
        {/* ========================= */}

        <TableCell

          onClick={() => {
            navigate(`/candidateResults/${candidate.id}`)
          }}

          >
          {candidate.first_name} {candidate.last_name}
        </TableCell>

        <TableCell

          onClick={() => {
            navigate(`/candidateResults/${candidate.id}`)
          }}

          >
          {(candidate.more.foot).toLowerCase()}
        </TableCell>

        <TableCell

          onClick={() => {
            navigate(`/candidateResults/${candidate.id}`)
          }}

          >
            
          {candidate.more.dob ? format(new Date(candidate.more.dob), 'MM/dd/yyyy') : 'N/A'}
        </TableCell>

        {/* ================================== */}

        <TableCell align='center'>
          <SeverityPill
            color={(candidate.required_positions === 'delivered' && 'success')
            || (candidate.required_positions === 'refunded' && 'error')
            || 'warning'}
          >
            {candidate.more.playing_possition1}
          </SeverityPill>
        </TableCell>

        {/* {
            if (!(candidate.id in candidates)) {
              return 
           
          </TableCell> 
          } */}


        {/* ============================= */}
         <TableCell align='center'>
           {
              checkIfAccepted(candidate.id) ? <Button onClick={() => props.acceptcandidate(id, candidate.id)}> Accept </Button> : <div>Accepted</div>
           }

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
   candidates: state.candidates,
   events: state.events
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getcandidates: (id) => dispatch(getCandidates(id)),
    getevent: (id) => dispatch(getEvent(id)),
    acceptcandidate: (eventID, candidateID) => dispatch(acceptCandidate(eventID, candidateID)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CandidatesTable);



  
 
