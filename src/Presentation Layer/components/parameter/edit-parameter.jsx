import React, { useEffect } from 'react';
import { format } from 'date-fns';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
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
import { getParameter, updateParameter } from '../../../Business Layer/thunks/parameter/parameters.thunk';

const EditParameterComponent = function (props) {
  const [open, setOpen] = React.useState(false);
  let navigate = useNavigate()
  let { id } = useParams();

  useEffect(() => {
    props.getparameter(id);

    console.log('Woooo', props.parameters.parameter);  
  }, []);

  let selectedSkills = [];

 

  useEffect(() => {
    console.log('Component Will Change');
    console.log('Wooooiiii', props.parameters.parameter);
    
  }, [props.parameters.parameter]);
  

  function loadedShow(){
    if (props.parameters.error === 'Network Error') {
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
    else if (props.parameters.error) {
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
    else if (props.parameters.parameterLoading) {
      return <div style={{textAlign: 'center'}}>
      
        <CircularProgress color="inherit" size={25} />

    </div>
      // <React.Fragment justifyContent="flex-end"><CircularProgress color="inherit" size={30} /></React.Fragment>
    }
  else if (props.parameters.parameter) {
    let parameter = props.parameters.parameter;
    var OGSkillsID = parameter.skills;
    OGSkillsID.forEach(function(skillID) {
      selectedSkills.push(skillID);
    });
    return (
      <>
          <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            
          </TableCell>
          <TableCell>
            Skill Name
          </TableCell>
          {/* <TableCell>
            Gender
          </TableCell> */}
          <TableCell>
           
            Skill Description
             
          </TableCell>
          <TableCell>
            Default
          </TableCell>
          <TableCell>
            
          </TableCell>
        </TableRow>
      </TableHead>
      
    
   
    <TableBody>
    {props.parameters && Array.from(props.parameters.parameter).map((skill) => (
      <TableRow
        // onClick={() => {
        //   console.log(skill.name);
        // }}
        // hover
        // {...console.log('ScouTable.jsx: skill', skill)}
        // key={skill.id}
      >
        <TableCell
          // onClick={() => navigate(`/skillDetails/${skill.id}`)}
        >
          <Checkbox
            defaultChecked = {selectedSkills.includes(skill.id)}
            // disabled = {selectedSkills.includes(skill.id)}
            onChange={() => {
              
              
              if (selectedSkills.indexOf(skill.id) !== -1) {
                  selectedSkills.splice(selectedSkills.indexOf(skill.id), 1);
                  console.log('You unselected',skill.id, 'so', selectedSkills);
                  // setChecked(false);
              } else {
                selectedSkills.push(skill.id);
                console.log('You selected',skill.id, 'so', selectedSkills);
                // setChecked(true);
              } 
             
            }}
            
          />
        </TableCell>
        {/* ========================= */}

        <TableCell
          // onClick={() => navigate(`/skillDetails/${skill.id}`)}
        >
          {`${skill.name}`}
          
        </TableCell>

        {/* <TableCell
          // onClick={() => navigate(`/skillDetails/${skill.id}`)}
        >
          {skill.more.gender ? 'M' : 'F'}
        </TableCell> */}

        <TableCell
          // onClick={() => navigate(`/skillDetails/${skill.id}`)}
        >
          {skill.description}
        </TableCell>

        <TableCell
          // onClick={() => navigate(`/skillDetails/${skill.id}`)}
        >
          <SeverityPill
            color={(skill.is_default === true && 'success')
            || (skill.is_default === false && 'error')
            || 'warning'}
          >
            {skill.is_default ? 'Yes' : 'No'}
          </SeverityPill>
        </TableCell>

        {/* ============================= */}
         {/* <TableCell>
          
            <Button onClick={() => { props.assignskill(id, skill.id) }}>
              Assign 
          </Button>
        </TableCell>  */}


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
                    props.updateParameter(id, selectedSkills);
                  }}
                >
                  Update Parameter
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
   parameters: state.parameters,
   
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getparameter: (parameterId) => dispatch(getParameter(parameterId)),
    updateparameter: (parameterId, parameter) => dispatch(updateParameter(parameterId, parameter)),
    
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditParameterComponent);



  
 
