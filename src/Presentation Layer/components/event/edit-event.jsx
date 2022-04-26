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
    value: 'GK',
    label: 'GK'
  },
  {
    value: 'DMF',
    label: 'DMF'
  }
];

const gender_options = [
  {
    value: 'Male',
    label: 'Male'
  },
  {
    value: 'Female',
    label: 'Female'
  },
];

// const useStyles = makeStyles({
//   root: {
//     background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
//     border: 0,
//     borderRadius: 3,
//     boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
//     color: "white",
//     height: 48,
//     padding: "0 30px"
//   }
// });


const EditEventComponent = function (props) {

  
  let { id } = useParams();

 
  useEffect(() => {
    props.getevent(id); 
  }, []);

  const navigate = useNavigate();

  // ========================================

  const [values, setValues] = useState({
    description: '',
    starting_date: new Date(),
    application_deadline: new Date(),
    ending_date: new Date(),
    location: '',
    education_level: '',
    required_position: '',
    demo_date: new Date(),
    age_limit: 21,
    gender: '',
    session_time_for_each: 20,
   
  }
  );

  // ============================================

  useEffect(() => {
    if (props.events.event) {
      setValues(props.events.event);
    }
  }, [props.events.event]);

  // ==============================================

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Values', values);
    props.updateevent(id, values);
    props.getevent(id);
    props.getevents();
    navigate('/');
  };

  const handleStartDateChange = (newDate) => {
    
    setValues({
      ...values,
      startDate: newDate,
    });
    // const getFormattedDate = ({ month, day, year }) => `${month}/${day}/${year}`
    // console.log(values.date.getDate);
    console.log('Start Date: ', values.startDate);
  };

  const handleEndDateChange = (newDate) => {
    setValues({
      ...values,
      endDate: newDate,
    });
    console.log('End Date: ', values.endDate);
  };

  const handleDemoDateChange = (newDate) => {
    setValues({
      ...values,
      demoDate: newDate,
    });
    console.log('Demo Date: ', values.demoDate);
    console.log(values);
  };


  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value, 
    });
    console.log(values);
  };

  const handleDateChange = (newDate) => {
    setValues({
      ...values,
      date: newDate,
    });
    // const getFormattedDate = ({ month, day, year }) => `${month}/${day}/${year}`
    // console.log(values.date.getDate);
    console.log(values.date);
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
                    defaultValue={props.events.event.description}
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
                    label="Email Address"
                    name="email"
                    onChange={handleChange}
                    required
                    value={values.email}
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
                    
                    <DateTimePicker
                      renderInput={(params) => <TextField 
                      
                        {...params} />}
                      label="Start Date"
                      name='startDate'
                      value={values.startDate}
                      onChange={handleStartDateChange}
                      // minDate={new Date('2020-02-14')}
                      // minTime={new Date(0, 0, 0, 8)}
                      // maxTime={new Date(0, 0, 0, 18, 45)}
                    />
                  
                </LocalizationProvider>

                </Grid>


                <Grid
                  item
                  md={6}
                  xs={12}
                >

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    
                    <DateTimePicker
                      renderInput={(params) => <TextField 
                      
                        {...params} />}
                      label="End Date"
                      name='endDate'
                      value={values.endDate}
                      onChange={handleEndDateChange}
                      // minDate={new Date('2020-02-14')}
                      // minTime={new Date(0, 0, 0, 8)}
                      // maxTime={new Date(0, 0, 0, 18, 45)}
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
                  label="Demo Date"
                  name='demoDate'
                  value={values.demoDate}
                  minDate={new Date('2017-01-01')}
                  onChange={handleDemoDateChange}
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
                Update Event
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