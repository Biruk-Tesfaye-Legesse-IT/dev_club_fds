import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';



export default function ErrorMessage(props) {
  return (
    <Box sx={{mt: 2, minWidth: 400, height: 50 }}>
    <Alert severity="error">
    <AlertTitle>{props.error}</AlertTitle>
    {/* This is an error alert — <strong>check it out!</strong> */}
    </Alert>
    {/* <Card sx={{ minWidth: 400, height: 50 }}>
      <CardContent sx={{p: 2}}>
        <Typography variant="h6" sx={{ fontSize: 14 }} color="text.secondary" >
          {props.error}
        </Typography>    
      </CardContent>      
    </Card> */}
    </Box>
  );
}
