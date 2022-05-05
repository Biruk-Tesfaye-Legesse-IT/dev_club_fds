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

import { getScout, getScouts, updateScout } from "../../../Business Layer/thunks/scout/scouts.thunk";
import { connect } from 'react-redux';
import { format } from 'date-fns'
import { useSelector } from 'react-redux';



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



const EditScoutComponent = function (props) {

    let { id } = useParams();

    let navigate = useNavigate();

 
    useEffect(() => {    
      props.getscout(id);     
    }, []);

    
  
  const [values, setValues] = useState({
    username: 'asawhite',
    password: '1234',
    first_name: 'asd',
    last_name: 'asd',
    phone_number: 'dsa',
    address: 'sad',
    // type: "SCOUT",
    email: 'biruk@gmail.com', // This is a must
    more: {
      dob: format(new Date(), 'yyyy-MM-dd'),
      gender: 'MALE',
      is_assigned: false
    }
  });
 

  console.log('ValuesBefore', values);

  useEffect(() => {
        
    if (props.scouts.scout) {
      setValues(props.scouts.scout);
    }
   
  }, [props.scouts.scout]);


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
    props.updatescout(values);
    props.getscouts();
    navigate('/scouts');
  };

  const handleBirthDateChange = (newDate) => {
    setValues({
      ...values,
      more: {
        ...values.more,
        dob: format(newDate, 'yyyy-MM-dd'),
      }
    });
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
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
               
                label="User name"
                name="username"
                disabled
                required
                value={values.username}
                variant="outlined"
              />
            </Grid>

            {/* <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
              
                label="Password"
                name="password"
                type="password"
                onChange={handleChange}
                required
                value={values.password}
                variant="outlined"
              /> */}

              {/* <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                  name='password'
                  id="outlined-adornment-password"
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChange('password')}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                    />
              </FormControl> */}
              
            {/* </Grid> */}

            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                // helperText="Please specify the first name"
                label="First name"
                name="first_name"
                disabled
                onChange={handleChange}
                required
                value={values.first_name}
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
                name="last_name"
                disabled
                required
                value={values.last_name}
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
                name="phone_number"
                onChange={handleChange}
                type="tel"
                value={values.phone_number}
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
                label="Address"
                name="address"
                disabled
                required
                value={values.address}
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
                label="Gender"
                name="gender"
                disabled
                required
                select
                SelectProps={{ native: true }}
                value={values.more.gender}
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

           
            

            <Grid
              item
              md={6}
              xs={12}
            >
              
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                
              <DatePicker
                label="Birth Date"
                name='dob'
                value={values.more.dob}
                minDate={new Date()}
                disabled
                onChange={handleBirthDateChange}
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
            onClick= {handleSubmit}
          >
            Hire Scout
          </Button>
        </Box>
      </Card>
    </form>
  );
};


const mapStateToProps = state => {
  return {
    scouts: state.scouts
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getscout: (id) => dispatch(getScout(id)),
    updatescout: (id, data) => dispatch(updateScout(id, data)),
    getscouts: () => dispatch(getScouts()),

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditScoutComponent);