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

import { useParams } from 'react-router-dom';

import { getEvent, updateEvent } from "../../../Business Layer/thunks/event/events.thunk";
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';



const states = [
  {
    value: 'alabama',
    label: 'Alabama'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'san-francisco',
    label: 'San Francisco'
  }
];



const EditEventComponent = function (props) {

    let { id } = useParams();

 
    useEffect(() => {
  
      // props.getevent(props.match.params.id);
      
      props.getevent(id);
      
    }, []);

    
  
  const [values, setValues] = useState({
    description: '',
    starting_date: new Date(),
  });

  console.log('ValuesBefore', values);

  useEffect(() => {
        
    if (props.events.event) {
      setValues(props.events.event);
    }
   
  }, []);

    console.log('Premium', props.events.event.description);
    console.log('Values', values);

   



  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value, 
    });
    console.log(values);
  };


  const handleStartingDateChange = (newDate) => {
    setValues({
      ...values,
      starting_date: newDate,
    });
    console.log('Demo Date: ', values.demoDate);
    console.log(values);
  };



  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card>
        {/* <Alert severity="error">This is an error alert — check it out!</Alert> */}
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
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify the first name"
                label="First name"
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
                label="Last name"
                name="lastName"
                onChange={handleChange}
                required
                value={values.lastName}
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
                label="Phone Number"
                name="phone"
                onChange={handleChange}
                type="tel"
                value={values.phone}
                placeholder="+251-912-345-678"
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
                label="Country"
                name="country"
                onChange={handleChange}
                required
                value={values.country}
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
                label="Select State"
                name="state"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.state}
                variant="outlined"
              >
                {states.map((option) => (
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
            minDate={new Date('2017-01-01')}
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
              <TextField
                fullWidth
                label="Beech"
                name="beech"
                onChange={handleChange}
                required
                value={values.beech}
                variant="outlined"
              />
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
            onClick={() => {
                props.updateevent(id, values);
            } }
          >
            Update Event
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
    getevent: (id) => dispatch(getEvent(id)),
    updateevent: (id, data) => dispatch(updateEvent(id, data))
    // getevents: () => dispatch(getEvent()),

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditEventComponent);