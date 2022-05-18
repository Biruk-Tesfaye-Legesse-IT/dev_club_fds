import { useState } from 'react';
import { Box, Button, Card, CardContent, CardHeader, Divider, TextField } from '@mui/material';
import { getAccount, updateAccount } from "../../../Business Layer/thunks/account/account.thunk";
import {connect} from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

const ChangePassword = (props) => {
  const user = JSON.parse(sessionStorage.getItem('user'));
  const [values, setValues] = useState({
    password: '',
    confirm: ''
  });

  let navigate = useNavigate();

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit: ', values);
    props.updateaccount(user.id,values);
    navigate('/');
  };

  return (
    <form {...props}>
      <Card>
        <CardHeader
          subheader="Update password"
          title="Password"
        />
        <Divider />
        <CardContent>
          <TextField
            fullWidth
            label="Old Password"
            margin="normal"
            name="old"
            onChange={handleChange}
            type="password"
            value={values.old}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="New Password"
            margin="normal"
            name="new"
            onChange={handleChange}
            type="password"
            value={values.new}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Confirm Password"
            margin="normal"
            name="confirm"
            onChange={handleChange}
            type="password"
            value={values.confirm}
            variant="outlined"
          />
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
            Change Password
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
    updateaccount: (id,values) => dispatch(updateAccount(id,values)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);