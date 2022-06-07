import { useState, useEffect} from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Alert
} from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import DateTimePicker from '@mui/lab/DateTimePicker';
import Stack from '@mui/material/Stack';

import { useParams, useNavigate } from 'react-router-dom';

import { getSkill, getSkills, updateSkill } from '../../../Business Layer/thunks/skill/skills.thunk';
import { connect } from 'react-redux';
import { format } from 'date-fns'
import { useSelector } from 'react-redux';



const weight_options = [
  {
    value: '0',
    label: 'None'
  },
  {
    value: '1',
    label: 'Very Low'
  },
  {
    value: '2',
    label: 'Low'
  },
  {
    value: '3',
    label: 'Moderate'
  },
  {
    value: '4',
    label: 'High'
  },
  {
    value: '5',
    label: 'Very High'
  },
];


const EditSkillComponent = function (props) {

  const user = JSON.parse(sessionStorage.getItem('user'));

    let { id } = useParams();

    let navigate = useNavigate();

 
    useEffect(() => {    
      props.getskill(id);     
    }, []);

    
  
    const [values, setValues] = useState({
      name: '',
      description: '',
      weight_for_GK: 1,
      weight_for_DEF: 2,
      weight_for_MID: 5,
      weight_for_STR: 3,
      club: user.id
    });
   
 

  console.log('ValuesBefore', values);

  useEffect(() => {
        
    if (props.skills.skill) {
      setValues(props.skills.skill);
    }
   
  }, [props.skills.skill]);


  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value, 
    });
    console.log(values);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submit: ', values);
    props.updateskill(id, values);
    props.getskills();
    navigate('/skills');
  };


  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card>
        <Divider />
        <CardContent>


          <Grid
            container
            spacing={3}
          >

            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify the name of the skill"
                label="Name"
                name="name"
                onChange={handleChange}
                required
               
                value={values.name}
                variant="outlined"
              />
            </Grid>
         

            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Describe the skill briefly"
                label="Description"
                name="description"
                onChange={handleChange}
                required
                
                value={values.description}
                variant="outlined"
              />
            </Grid>

      
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Weight for Goalkeeper"
                name="weight_for_GK"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.weight_for_GK}
                variant="outlined"
              >
                {weight_options.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>

            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Weight for Defender"
                name="weight_for_DEF"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.weight_for_DEF}
                variant="outlined"
              >
                {weight_options.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>



            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Weight for Midfielder"
                name="weight_for_MID"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.weight_for_MID}
                variant="outlined"
              >
                {weight_options.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>

            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Weight for Striker"
                name="weight_for_STR"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.weight_for_STR}
                variant="outlined"
              >
                {weight_options.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>

           

           
            

            
           

          </Grid>
        </CardContent>
        <Divider />
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
            onClick= {handleSubmit}
          >
            Edit Skill
          </Button>
        </Box>
      </Card>
    </form>
  );
};


const mapStateToProps = state => {
  return {
    skills: state.skills
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getskill: (id) => dispatch(getSkill(id)),
    updateskill: (id, data) => dispatch(updateSkill(id, data)),
    getskills: () => dispatch(getSkills()),
   

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditSkillComponent);