import { useState, useEffect } from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Typography,
  Badge,
} from '@mui/material';

import { getAccount, updateAccount } from "../../../Business Layer/thunks/account/account.thunk";
import {connect} from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Icon from '@mui/material/Icon';
import CameraAltTwoToneIcon from '@mui/icons-material/CameraAltTwoTone';
import {ChangePassword} from './change-password';



const states = [
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



const AccountProfileDetails = (props) => {

  let { id } = useParams();

  let navigate = useNavigate();

  const user = JSON.parse(sessionStorage.getItem('user'));

  useEffect(() => {    
    props.getaccount(user.id);     
  }, []);
  
  

  const [values, setValues] = useState({
    // clubName: JSON.parse(sessionStorage.getItem('user').toString).id,
    clubName: user.username,
    website: JSON.parse(sessionStorage.getItem('user')).more.website,
    phone_number: JSON.parse(sessionStorage.getItem('user')).phone_number,
   
    region: 'Addis Ababa',
    country: 'Ethiopia',
    more: {
      // dob: format(new Date(), 'yyyy-MM-dd'),
      gender: 'MALE',
      is_assigned: false
    }
  });

  const handleSubmit = (event) => {
  
    event.preventDefault();
    console.log('Submit: ', values);
    props.updateaccount(user.id,values);
    props.getscouts();
    navigate('/scouts');
  };

  const handleMoreChange = (newDate) => {
    setValues({
      ...values,
      more: {
        ...values.more,
        // dob: format(newDate, 'yyyy-MM-dd'),
      }
    });
  };

  

  const handleChange = (event) => {
    event.preventDefault();

    // if (event.target.name === 'profilePicture') {
    //   setSelectedImage(event.target.files[0]);
    //   console.log(event.target.files[0])
    // } else {

    // }

    setValues({
      ...values,
      [event.target.name]: event.target.value, 
    });
    console.log(values);
  };

  return (
    
    <>
          <form
            autoComplete="off"
            noValidate
            {...props}
          >
            <Card elevation={5}>
              <CardHeader
                subheader="Some of this information cannot  be edited. Please contact admin if you need to change it."
                title="Club Profile"
              />
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
                      // helperText="Please specify the first name"
                      label="Club Name"
                      name="clubName"
                      onChange={handleChange}
                      // required
                      disabled
                      value={values.clubName}
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
                      label="Website"
                      name="website"
                      onChange={handleChange}
                      required
                      value={values.website}
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
                      // type="number"
                      value={values.phone_number}
                      variant="outlined"
                      error={values.phone_number.length > 10}
                      helperText={values.phone_number.length > 10 ? 'Invalid!' : ' '}
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
                      label="Select Region"
                      name="region"
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
                    handleSubmit();
                  }}
                >
                  Update Profile
                </Button>
              </Box>
            </Card>
           
          </form>
      </>
  );
};

const mapStateToProps = state => {
  return {
    events: state.events
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getaccount: (id) => dispatch(getAccount(id)),
    updateaccount: (id,values) => dispatch(updateAccount(id,values)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountProfileDetails);
