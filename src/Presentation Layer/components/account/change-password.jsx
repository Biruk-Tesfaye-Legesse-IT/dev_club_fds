import { useState } from 'react';
import { Box, Button, Card, CardContent, CardHeader, Divider, TextField } from '@mui/material';

export const ChangePassword = (props) => {
  const [values, setValues] = useState({
    password: '',
    confirm: ''
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
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
            Update
          </Button>
        </Box>
      </Card>
    </form>
  );
};
