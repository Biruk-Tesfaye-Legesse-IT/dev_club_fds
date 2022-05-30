import React, { useEffect } from 'react';
import { format } from 'date-fns';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Dialog,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip, 
  Typography,
  Grid, 
  Collapse,
  IconButton,
  
  TableContainer,
  Paper,
  
} from '@mui/material';
import Alert from '@mui/material/Alert';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { SeverityPill } from '../severity-pill';
import { connect, useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import AddIcon from '@mui/icons-material/Add';
import { Link, useNavigate } from 'react-router-dom';

import DeleteRounded from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getSkills, getSkill } from "../../../Business Layer/thunks/skill/skills.thunk";





const AddNewButton = () => {
  
  return (
 
 
    <Link to='/addSkill' style={{ textDecoration: 'none' }}>
    <Button
    startIcon={<AddIcon />}
    color="primary"
    fullWidth
    variant="contained"
  >
    Add New Skill
  </Button>
    
    
    </Link>)
}


const SkillsTable = function (props) {
  let navigate = useNavigate()

  useEffect(() => {
    console.log('Woooo', props.skills.skills);
    props.getskills();
   
    
  }, []);


  function Row (props) {
    const [open, setOpen] = React.useState(false);
    const {skill} = props;
    function handleDefault(){
      // console.log('joji', is_default)
      if (skill.is_default == false){
        return (<TableCell align='left'>
        <Button>
      
       
          <EditRoundedIcon color='secondary'/>
        </Button>
        <Button>
          <DeleteRounded color='secondary'/>
        </Button>
      </TableCell> )
    }
    else{
      const alertError = () => toast.error('Default Skill cannot be edited or deleted', {
        position: toast.POSITION.BOTTOM_LEFT
      });

    
      
      return (<TableCell align='left'>
        <Button onClick={alertError}>
      
      
          <EditRoundedIcon color='secondary'/>
        </Button>
        <Button onClick={alertError}>
          <DeleteRounded color='secondary'/>
        </Button>
    </TableCell> )
    }
  }
    return (
      <>
        
        {/* // <Row key={'row.name'} row={row} /> */}
        <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          
          {/* <TableCell component="th" scope="row">
            {skill.id}
          </TableCell> */}
          <TableCell align="center">{skill.name}</TableCell>
          <TableCell align="left">{skill.description}</TableCell>
          {handleDefault()}
         
          <TableCell align='left'>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                {/* <Typography variant="h6" gutterBottom component="div">
                  History
                </Typography> */}
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Position</TableCell>
                      <TableCell>Weight</TableCell>
                     
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    
                      <>
                      <TableRow key={''}>
                        <TableCell component="th" scope="row">
                          Goalkeeper
                        </TableCell>
                        <TableCell>{skill.weight_for_GK}</TableCell>
                        
                      </TableRow>
                      <TableRow key={''}>
                        <TableCell component="th" scope="row">
                          Defender
                        </TableCell>
                        <TableCell>{skill.weight_for_DEF}</TableCell>
                        
                      </TableRow>
                      <TableRow key={''}>
                        <TableCell component="th" scope="row">
                          Midfielder
                        </TableCell>
                        <TableCell>{skill.weight_for_MID}</TableCell>
                        
                      </TableRow>
                      <TableRow key={''}>
                        <TableCell component="th" scope="row">
                          Striker
                        </TableCell>
                        <TableCell>{skill.weight_for_STR}</TableCell>
                        
                      </TableRow> 
                      </>
                
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
      {/* ))} */}
      </>
    )
  }
  

 

  

 
  

  // const {loading, scouts, error} = useSelector(state => state.scouts || {})

  let searchTerm = "";
  // let filteredScouts = props.scouts.scouts.filter(scout => scout.firstName.toLowerCase().includes(searchTerm.toLowerCase()));
  // let scoutsName = props.scouts.scouts.first_name;
  
  function loadedShow(){
  if (props.skills.error) {
    return <div style={{textAlign: 'center'}}>
    
    <Typography
      color="textSecondary"
      gutterBottom
      variant="overline"
    >
      {props.skills.error}
    </Typography>
      
  </div>
      
    }
  else if (props.skills.skillsLoading) {
    return <div style={{textAlign: 'center'}}>
    
      <CircularProgress color="inherit" size={25} />

  </div>
    // <React.Fragment justifyContent="flex-end"><CircularProgress color="inherit" size={30} /></React.Fragment>
  }
  else if (props.skills.skills) {
    return (
      <>
      <Table>

        <ToastContainer />
     
   
      <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
          
            {/* <TableCell>ID</TableCell> */}
            <TableCell align="center">Name</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Actions</TableCell>
            
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {props.skills && Array.from(props.skills.skills).map((skill) => (
            <Row key={skill.id} skill={skill} />
          ))}
          
        </TableBody>
      </Table>
    </TableContainer>
  </Table>
   
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
          <CardHeader title="Skills" action={<AddNewButton/>}/>
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
    skills: state.skills
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getskills: () => dispatch(getSkills()),
    getskill: (id) => dispatch(getSkill(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillsTable);



  
 
