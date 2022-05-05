import { useState } from 'react';
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

const user = {
  avatar: 'https://upload.wikimedia.org/wikipedia/en/8/80/St_George_SC_%28logo%29.png',
  city: 'Addis Ababa,',
  country: 'Ethiopia',
  type: 'Club',
  name: 'St. George SC',  
  timezone: ''
};



export const AccountProfileDetails = (props) => {
  
  const [selectedImage, setSelectedImage] = useState({
    profileImage: 'https://upload.wikimedia.org/wikipedia/en/8/80/St_George_SC_%28logo%29.png',
});

  const [values, setValues] = useState({
    clubName: 'St. Gorge F.C.',
    lastName: 'Mola',
    email: 'stgeorgefc@gmail.com',
    phone: '+251-116-604-030',
    // phone: '0924913413',
    region: 'Addis Ababa',
    country: 'Ethiopia',
    
    // startDate: new Date(),
    // endDate: new Date(),
    // demoDate: new Date(),
    
  });

  

  const handleChange = (event) => {
    event.preventDefault();

    if (event.target.name === 'profilePicture') {
      setSelectedImage(event.target.files[0]);
      console.log(event.target.files[0])
    } else {
    setValues({
      ...values,
      [event.target.name]: event.target.value, 
    });
    console.log(values);
    }
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
                      // type="number"
                      value={values.phone}
                      variant="outlined"
                      error={values.phone.length > 10}
                      helperText={values.phone.length > 10 ? 'Invalid!' : ' '}
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
                >
                  Save details
                </Button>
              </Box>
            </Card>
           
          </form>
      
          
     
        
      </>
  );
};
