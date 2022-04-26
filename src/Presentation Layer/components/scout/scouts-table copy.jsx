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

  let searchTerm = "Kev";
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
          {props.scouts && Array.from(props.scouts.scouts).filter((val) => {

            if (searchTerm == ""){
              return val
            } else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())){ 
              return val
            }

          }).map((scout) => (
            <div className="clearfix">
            <div className="row">
             
                <div className="col-md-4 animated fadeIn" key={data.id.value}>
                  <div className="card">
                    <div className="card-body">
                      <div className="avatar">
                        <img
                          src={scout.propfile_picture}
                          className="card-img-top"
                          alt=""
                        />
                      </div>
                      <h5 className="card-title">
                        {this.uppercase(`${scout.first_name} ${scout.last_name}`) +
                          " " +
                          this.uppercase(scout.name.last)}
                      </h5>
                      <p className="card-text">
                        {scout.location +
                          ", " +
                          this.uppercase(scout.location)}
                        <br />
                        <span className="phone">{scout.phone_number}</span>
                      </p>
                    </div>
                  </div>
                </div>
             
            </div>
            <button
              className="btn btn-light btn-block w-50 mx-auto"
              onClick={e => {
                this.loadMore();
              }}
            >
              Load More Users
            </button>
          </div>
          ))}
      
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



  
 
