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
    starting_date: "2022-04-14",
    application_deadline: "2022-04-14",
    description: "This is a test event",
    required_positions: "any",
    age_limit: 21,
    education_level: "dskjf",
    location: "kjdf",
    session_time_for_each: 20,
  });

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
    createevent: () => dispatch(createEvent()),

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);

