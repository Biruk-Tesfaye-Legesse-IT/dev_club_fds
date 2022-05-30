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
import { useParams  } from 'react-router-dom';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { SeverityPill } from '../severity-pill';
import { connect, useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import AddIcon from '@mui/icons-material/Add';
import { Link, useNavigate } from 'react-router-dom';

import DeleteRounded from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';



import { getApplicants } from '../../../Business Layer/thunks/applicant/applicant.thunk';

const ApplicantsTable = function (props) {
  const [open, setOpen] = React.useState(false);
  let navigate = useNavigate()
  let { id } = useParams();

  useEffect(() => {

    props.getapplicants(id)
    console.log('Woooo', props.applicants.applicants);
    
  }, []);

  

  useEffect(() => {

    console.log('Component Will Change');
    
    
  }, [props.applicants]);
  

  function loadedShow(){
    if (props.applicants === 'Network Error') {
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
    {props.applicants && Array.from(props.applicants.applicants).map((applicant) => (
      <TableRow
     
        hover
        {...console.log('ApplicanTable.jsx: applicant', applicant)}
        key={applicant[0].id}
      >
        <TableCell

          onClick={() => {
            navigate(`/applicantDetails/${applicant.id}`)
          }}
        
        >
          {applicant.id}
        </TableCell>
        {/* ========================= */}

        <TableCell

          onClick={() => {
            navigate(`/applicantDetails/${applicant.id}`)
          }}

          >
          {applicant.starting_date}
        </TableCell>

        <TableCell

          onClick={() => {
            navigate(`/applicantDetails/${applicant.id}`)
          }}

          >
          {applicant.starting_date}
        </TableCell>

        <TableCell

          onClick={() => {
            navigate(`/applicantDetails/${applicant.id}`)
          }}

          >
            
          {applicant.description}
        </TableCell>

        {/* ================================== */}

        <TableCell align='center'>
          <SeverityPill
            color={(applicant.required_positions === 'delivered' && 'success')
            || (applicant.required_positions === 'refunded' && 'error')
            || 'warning'}
          >
            {applicant.required_positions}
          </SeverityPill>
        </TableCell>

        {/* ============================= */}
         <TableCell align='center'>
          <Button onClick={() => navigate(`/editApplicant/${applicant.id}`)}>
        
         
            <EditRoundedIcon color='secondary'/>
          </Button>
          <Button>
            <DeleteRounded color='secondary'/>
          </Button>
        </TableCell> 

        {/* <TableCell>
          {format(applicant.deadline, 'dd/MM/yyyy')}
        </TableCell> */}
        
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
   applicants: state.applicants,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getapplicants: (eventId) => dispatch(getApplicants(eventId))

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplicantsTable);



  
 
