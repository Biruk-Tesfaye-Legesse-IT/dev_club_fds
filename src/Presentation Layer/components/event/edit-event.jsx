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
import { useNavigate } from 'react-router-dom';

import { useParams } from 'react-router-dom';

import { getEvent, updateEvent, getEvents } from "../../../Business Layer/thunks/event/events.thunk";
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import { format } from 'date-fns'



const education_level_options = [
  {
    value: 'highschool',
    label: 'High School'
  },
  {
    value: 'degree',
    label: 'Degree'
  },
  {
    value: 'middleschool',
    label: 'Middle School'
  },
  {
    value: 'vocational',
    label: 'Vocational'
  }
];

const location_options = [
  {
    value: 'aa',
    label: 'Addis Ababa'
  },
  {
    value: 'dd',
    label: 'Dire Dawa'
  },
  {
    value: 'bd',
    label: 'Bahir Dar'
  }
];

const required_position_options = [
  {
    value: 'any',
    label: 'Any'
  },
  {
    value: 'goalkeepers',
    label: 'GK'
  },
  {
    value: 'defenders',
    label: 'DEF'
  },
  {
    value: 'midfielders',
    label: 'MID'
  },
  // {
  //   value: 'Att',
  //   label: 'ATT'
  // },
  {
    value: 'strikers',
    label: 'STR'
  },

];

const gender_options = [
  {
    value: 'MALE',
    label: 'Male'
  },
  {
    value: 'FEMALE',
    label: 'Female'
  },
];

const EditEventComponent = function (props) {

  
  let { id } = useParams();

 
  useEffect(() => {
    props.getevent(id); 
  }, []);

  const navigate = useNavigate();

  // ========================================

  const [values, setValues] = useState({
    description: props.events.event.description,
    starting_date: props.events.event.starting_date,
    application_deadline: props.events.event.application_deadline,
    ending_date: props.events.event.ending_date,
    location: props.events.event.location,
    education_level: props.events.event.education_level,
    required_positions: props.events.event.required_positions,
    age_limit: props.events.event.age_limit,
    gender: props.events.event.gender,
    session_time_for_each: props.events.event.session_time_for_each
  }
  );

  // ============================================

  useEffect(() => {
    if (props.events.event) {
      setValues(
        {
          description: props.events.event.description,
          starting_date: props.events.event.starting_date,
          application_deadline: props.events.event.application_deadline,
          ending_date: props.events.event.ending_date,
          location: props.events.event.location,
          education_level: props.events.event.education_level,
          required_positions: props.events.event.required_positions,
          age_limit: props.events.event.age_limit,
          gender: props.events.event.gender,
          session_time_for_each: props.events.event.session_time_for_each
        },
      )
    }
    console.log(props.events.event);
  }, [props.events.event]);

  // ==============================================

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Values', values);
    props.updateevent(id, values);
    // props.getevent(id);
    props.getevents();
    navigate('/');
  };

  const handleStartingDateChange = (newDate) => {
    
    setValues({
      ...values,
      starting_date: format(newDate, 'yyyy-MM-dd'),
    });
    console.log('Start Date: ', values.startDate);
  };

  const handleDeadlineDateChange = (newDate) => {
    setValues({
      ...values,
      application_deadline: format(newDate, 'yyyy-MM-dd'),
    });
    console.log('End Date: ', values.endDate);
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value, 
    });
    console.log(values);
  };

  // =========================================================
 
  function loadedShow(){
    if (props.events.eventLoading) {
      return <div>Loading...</div>
    }
    else if (props.events.event) {
      return (

        <form
        autoComplete="off"
        noValidate
        {...props}
      >
        <Card>
          {/* <CardHeader
            subheader="The information can be edited"
            title="Profile"
          /> */}
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
                  helperText="Please give brief description of the event"
                  label="Event Description"
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
                  error={values.age_limit < 18}
                  label="Age Limit"
                  name="age_limit"
                  onChange={handleChange}
                  required
                  value={values.age_limit}
                  validationError="Please enter a valid age limit"
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
                  label="Required Position"
                  name="required_positions"
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={values.required_positions}
                  variant="outlined"
                >
                  {required_position_options.map((option) => (
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
                  label="Location"
                  name="location"
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={values.location}
                  variant="outlined"
                >
                  {location_options.map((option) => (
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
                  label="Required Gender"
                  name="gender"
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={values.gender}
                  variant="outlined"
                >
                  {gender_options.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
  
              {/* <Grid
                item
                md={6}
                xs={12}
              >
  
              <TextField
                  fullWidth
                  label="Scouts"
                  name="scouts"
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={values.location}
                  variant="outlined"
                >
                  {location_options.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid> */}
  
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Education Level"
                  name="education_level"
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={values.education_level}
                  variant="outlined"
                >
                  {education_level_options.map((option) => (
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
                
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                  
                <DatePicker
                  label="Starting Date"
                  name='starting_date'
                  value={values.starting_date}
                  minDate={new Date()}
                  onChange={handleStartingDateChange}
                  renderInput={(params) => <TextField {...params} />}
                />
                
              </LocalizationProvider>
  
              </Grid>
  
  
              <Grid
                item
                md={6}
                xs={12}
              >
  
              <LocalizationProvider dateAdapter={AdapterDateFns}>
              
                <DatePicker
                  label="Application Deadline Date"
                  name='application_deadline'
                  value={values.application_deadline}
                  minDate={new Date()}
                  onChange={handleDeadlineDateChange}
                  renderInput={(params) => <TextField {...params} />}
                />
                
              </LocalizationProvider>
  
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
              onClick={handleSubmit}
            >
              Edit Event
            </Button>
          </Box>
        </Card>
      </form>

      )
  }


}

  // ======================================================

   
  
    return (
      <>{loadedShow()}</>
    );
  };




const mapStateToProps = state => {
  return {
    events: state.events
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getevent: (id) => dispatch(getEvent(id)),
    updateevent: (id,values) => dispatch(updateEvent(id,values)),
   
    getevents: () => dispatch(getEvents()),

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditEventComponent);