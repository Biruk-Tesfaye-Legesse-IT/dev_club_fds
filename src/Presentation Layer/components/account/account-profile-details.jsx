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
    username: user.username,
    phone_number: user.phone_number,
    address: user.address,
    
    more: {
      // dob: format(new Date(), 'yyyy-MM-dd'),
      club_name: user.more.club_name,
      acronym: user.more.acronym,
      organization_type: user.more.organization_type,
      website: user.more.website,
      establishment_year: user.more.establishment_year,
    }
  });

  const handleSubmit = (event) => {
  
    // event.preventDefault();
    console.log('Submit: ', values);
    props.updateaccount(user.id,values);
    navigate('/');
  };

  const handleMoreChange = (event) => {
    setValues({
      ...values,
      more: {
        ...values.more,
        [event.target.name]: event.target.value, 

      }
    });
    console.log(values);
  };

  

  const handleChange = (event) => {
    event.preventDefault();

    setValues({
      ...values,
      [event.target.name]: event.target.value, 
    });
   
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

              {/* ================= 1 ====================== */}
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
                     
                      label="Club Name"
                      name="clubName"
                      onChange={handleMoreChange}
                      // required
                      disabled
                      value={values.more.club_name}
                      variant="outlined"
                    />
                  </Grid>

                 {/* ================= 2 ====================== */}

                  <Grid
                    item
                    md={6}
                    xs={12}
                  >
                    <TextField
                      fullWidth
                      label="Username"
                      name="username"
                      onChange={handleChange}
                      required
                      value={values.username}
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
                      label="Organization Acronym"
                      name="acronym"
                      onChange={handleMoreChange}
                      required
                      // select
                      SelectProps={{ native: true }}
                      value={values.more.acronym}
                      variant="outlined"
                    >
                      {/* {states.map((option) => (
                        <option
                          key={option.value}
                          value={option.value}
                        >
                          {option.label}
                        </option>
                      ))} */}
                    </TextField>
                  </Grid>
                  
                
                  {/* ================= 3 ====================== */}
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
                      label="Address"
                      name="address"
                      onChange={handleChange}
                      required
                      value={values.address}
                      variant="outlined"
                    />
                  </Grid>

                

                  {/* ================= 4 ====================== */}

                  <Grid
                    item
                    md={6}
                    xs={12}
                  >
                    <TextField
                      fullWidth
                      label="Website"
                      name="website"
                      onChange={handleMoreChange}
                      // type="number"
                      value={values.more.website}
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
                      label="Establishment Year"
                      name="establishment_year"
                      onChange={handleMoreChange}
                      required
                      value={values.more.establishment_year}
                      variant="outlined"
                    />
                  </Grid>

                  {/* ================= 5 ====================== */}

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
