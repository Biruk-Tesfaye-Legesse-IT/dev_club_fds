import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

import DateTimePicker from '@mui/lab/DateTimePicker';
import Stack from '@mui/material/Stack';
import { format } from 'date-fns'


import { createEvent } from "../../../Business Layer/thunks/event/events.thunk";
import { connect } from 'react-redux';


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




const CreateEvent = function (props) {


  
  const [values, setValues] = useState({
    starting_date: format(new Date(), 'yyyy-MM-dd'),
    application_deadline: format(new Date(), 'yyyy-MM-dd'),
    description: "This is a test event",
    required_positions: 'any',
    age_limit: 21, 
    education_level: 'highschool',
    location: 'aa',  //optioned
    session_time_for_each: 20, //
    gender: 'M',
  });

  const handleStartingDateChange = (newDate) => {
    
    setValues({
      ...values,
      starting_date: newDate,
    });
    // const getFormattedDate = ({ month, day, year }) => `${month}/${day}/${year}`
    // console.log(values.date.getDate);
    console.log('Start Date: ', values.startDate);
  };

  const handleDeadlineDateChange = (newDate) => {
    setValues({
      ...values,
      application_deadline: newDate,
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

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log('Debug', values);
    console.log('Date', );
    props.createevent(values);
  };


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
                label="Gender"
                name="gender"
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
            Create Event
          </Button>
        </Box>
      </Card>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    events: state.events
  };
}

const mapDispatchToProps = dispatch => {
  return {
    createevent: (data) => dispatch(createEvent(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);

