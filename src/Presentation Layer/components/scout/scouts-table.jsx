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
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';

import { getScouts, getScout } from "../../../Business Layer/thunks/scout/scouts.thunk";

import DetailsModal from './modal';



const AddNewButton = () => {
  
  return (
 
 
    <Link to='/addScout' style={{ textDecoration: 'none' }}>
    <Button
    startIcon={<AddIcon />}
    color="primary"
    fullWidth
    variant="contained"
  >
    Hire New Scout 
  </Button>
    
    
    </Link>)
}

const ScoutsTable = function (props) {
  let navigate = useNavigate()

  const [openModal, setOpenModal] = React.useState(false);

  useEffect(() => {
    console.log('Woooo', props.scouts.scouts);
    props.getscouts();
   
    
  }, []);

  // const {loading, scouts, error} = useSelector(state => state.scouts || {})

  let searchTerm = "";
  // let filteredScouts = props.scouts.scouts.filter(scout => scout.firstName.toLowerCase().includes(searchTerm.toLowerCase()));
  let scoutsName = props.scouts.scouts.first_name;
  
  function loadedShow(){
  if (props.scouts.error) {
    return <div style={{textAlign: 'center'}}>
    
    <Typography
      color="textSecondary"
      gutterBottom
      variant="overline"
    >
      {props.scouts.error}
    </Typography>
      
  </div>
      
    }
  else if (props.scouts.scoutsLoading) {
    return <div style={{textAlign: 'center'}}>
    
      <CircularProgress color="inherit" size={25} />

  </div>
    // <React.Fragment justifyContent="flex-end"><CircularProgress color="inherit" size={30} /></React.Fragment>
  }
  else if (props.scouts.scouts) {
    return (
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
          <TableCell>
            Gender
          </TableCell>
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
    {props.scouts && Array.from(props.scouts.scouts).filter((val) => {

      if (searchTerm == ""){
        return val
      } else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())){ 
        return val
      }

    }).map((scout) => (
      <TableRow
        onClick={() => {
          console.log(scout.name);
        }}
        hover
        {...console.log('ScouTable.jsx: scout', scout)}
        key={scout.id}
      >
        <TableCell
          onClick={() => navigate(`/scoutDetails/${scout.id}`)}
        >
          {scout.id}
        </TableCell>
        {/* ========================= */}

        <TableCell
          onClick={() => navigate(`/scoutDetails/${scout.id}`)}
        >
          {`${scout.first_name} ${scout.last_name}`}
          
        </TableCell>

        <TableCell
          onClick={() => navigate(`/scoutDetails/${scout.id}`)}
        >
          {scout.more.gender ? 'M' : 'F'}
        </TableCell>

        <TableCell
          onClick={() => navigate(`/scoutDetails/${scout.id}`)}
        >
          {scout.phone_number}
        </TableCell>

        <TableCell
          onClick={() => navigate(`/scoutDetails/${scout.id}`)}
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
         <TableCell>
          {/* <Button onClick={() => navigate(`/editScout/${scout.id}`)}>
            <EditRoundedIcon color='secondary'/>
          </Button> */}
          {/* <Button  onClick={() => {
            props.getscout(scout.id);
            setOpenModal(true);
            }}
            data-toggle="modal"
            > */}
            <Button onClick={() => {}}>
              <DeleteRounded color='secondary'/>
          </Button>
        </TableCell> 

        {/* <TableCell>
          {format(scout.deadline, 'dd/MM/yyyy')}
        </TableCell> */}

      </TableRow>
    ))}
  </TableBody>
  </Table>
    {openModal && <DetailsModal openModal={openModal} setOpenModal={setOpenModal} id={3}/>}
  </>
  )
  }
  // else if (props.scouts.error) {
  //   return <React.Fragment>{props.scouts.error}</React.Fragment>
  // }
 
  }    

  

      return(
        // <Card {...props}>
        <Card>
          <CardHeader title="Scouts" action={<AddNewButton/>}/>
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
    scouts: state.scouts
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getscouts: () => dispatch(getScouts()),
    getscout: (id) => dispatch(getScout(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoutsTable);



  
 
