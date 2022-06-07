import React, { useEffect } from 'react';
import { format } from 'date-fns';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  CardHeader,
  CardContent,
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

import { getParameters, getParameter, deleteParameter } from "../../../Business Layer/thunks/parameter/parameters.thunk";





const ParametersTable = function (props) {
  let navigate = useNavigate()

  const [openModal, setOpenModal] = React.useState(false);

  useEffect(() => {
    console.log('Woooo', props.parameters.parameters);
    props.getparameters();
  }, []);

  // const {loading, parameters, error} = useSelector(state => state.parameters || {})

  let searchTerm = "";
  // let filteredParameters = props.parameters.parameters.filter(parameter => parameter.firstName.toLowerCase().includes(searchTerm.toLowerCase()));
  let parametersName = props.parameters.parameters.first_name;
  
  function loadedShow(){
  if (props.parameters.error) {
    return <div style={{textAlign: 'center'}}>
    
    <Typography
      color="textSecondary"
      gutterBottom
      variant="overline"
    >
      {props.parameters.error}
    </Typography>
      
  </div>
      
    }
  else if (props.parameters.parametersLoading) {
    return <div style={{textAlign: 'center'}}>
    
      <CircularProgress color="inherit" size={25} />

  </div>
    // <React.Fragment justifyContent="flex-end"><CircularProgress color="inherit" size={30} /></React.Fragment>
  }
  else if (props.parameters.parameters) {
    const NumOfSkills = (parameter) => {
      return (parameter.skills).length}
    return (
      <>
      <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            ID
          </TableCell>
          <TableCell>
            Parameter Name
          </TableCell>
          <TableCell>
            No Of Skills 
          </TableCell>
          {/* <TableCell>
           
            Phone Number
             
          </TableCell> */}
          <TableCell>
            Delete Parameter
          </TableCell>
          
        </TableRow>
      </TableHead>
      
    
   
    <TableBody>
    {props.parameters && Array.from(props.parameters.parameters).map(parameter => (

      


      <TableRow
        onClick={() => {
          // console.log(parameter.name);
        }}
        hover
        {...console.log('ParameterTable.jsx: parameter', parameter)}
        key={parameter.id}
      >
        <TableCell
          onClick={() => navigate(`/editParameter/${parameter.id}`)}
        >
          {parameter.id}
        </TableCell>
        {/* ========================= */}

        <TableCell
          onClick={() => navigate(`/editParameter/${parameter.id}`)}
        >
          {/* {`${parameter.first_name} ${parameter.last_name}`} */}
          
        </TableCell>

        {/* <TableCell
          onClick={() => navigate(`/parameterDetails/${parameter.id}`)}
        >
          {parameter.more.gender ? 'M' : 'F'}
        </TableCell> */}

        {/* <TableCell
          onClick={() => navigate(`/parameterDetails/${parameter.id}`)}
        >
          {parameter.phone_number}
        </TableCell> */}

        <TableCell
          onClick={() => navigate(`/editParameter/${parameter.id}`)}
        >
          <SeverityPill
            color='secondary'
          >
            {NumOfSkills(parameter)}
          </SeverityPill>
        </TableCell>

        {/* ============================= */}
         <TableCell>
          
            <Button onClick={() => { props.deleteparameter(parameter.id) }}>
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
      
        <Card>
          <CardHeader 
          title={<h1>Parameters</h1>} 
          
          action={

            <Button
              // startIcon={<AddIcon />}
              color="primary"
              fullWidth
              variant="contained"
              onClick={() => {
                navigate('/addParameter')}}
            >
              Add Parameter
            </Button>
          }
        />

          {/* <CardContent> */}
          <PerfectScrollbar>
            <Box sx={{ 
              mt: -4,
              minWidth: 800 }}>
            {loadedShow()}
            </Box>
          </PerfectScrollbar>
         
          {/* </CardContent> */}
        </Card>
        )
      
    }
   
const mapStateToProps = state => {
  return {
    parameters: state.parameters
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getparameters: () => dispatch(getParameters()),
    getparameter: (id) => dispatch(getParameter(id)),
    deleteparameter: (id) => dispatch(deleteParameter(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ParametersTable);



  
 
