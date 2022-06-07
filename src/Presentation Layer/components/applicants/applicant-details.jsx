import {useEffect, useLayoutEffect} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { connect} from 'react-redux';
import { useParams  } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

import {
  Card,
  CardContent,
  Tooltip,
  Divider,
  ListItem,
  ListItemText,
  List,
  Avatar,
  useTheme
} from '@mui/material';

import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import { getApplicant } from '../../../Business Layer/thunks/applicant/applicant.thunk';


const ApplicantDetailComponent = function(props) {

  
  const theme = useTheme();

  let { id } = useParams();

  useEffect(() => {
    props.getapplicant(id); 
  }, []); 

  function loadedShow(){
    if (props.applicants.error === 'Network Error') {
     
      return (
        <div style={{textAlign: 'center'}}>
      
        <CircularProgress color="inherit" size={25} />

    </div>
      );
    }

    else if (props.applicants.applicant) {
      let applicant = props.applicants.applicant;
      return(
        <div>
         {/* <Card className={classes.root}> */}
         <Card>
     
         
     <Avatar
       sx={{
         mx: 'auto',
         mb: 1,
         mt: 3,
         width: theme.spacing(12),
         height: theme.spacing(12)
       }}
       variant="rounded"
       alt="Craig Donin"
       src="https://avatars.githubusercontent.com/u/60609723?v=4"
     />
     <Typography align="center" variant="h4" gutterBottom>
        {`${applicant.first_name} ${applicant.last_name}`}
     </Typography>
     <Typography align="center" variant="subtitle2" gutterBottom>
       Senior Scout
     </Typography>
     
     {/* <Box display="flex" alignItems="center" justifyContent="center">
       <Rating value={4} defaultValue={5} precision={1} readOnly />
       <Typography variant="h5" sx={{ pl: 0.5 }}>
         4.1
       </Typography>
     </Box> */}
     
     <Box py={2} display="flex" alignItems="center" justifyContent="center">
       {/* <Tooltip arrow placement="top" title="Call">
         <IconButton color="primary" sx={{ mx: 0.5 }}>
           <PhoneTwoToneIcon />
         </IconButton>
       </Tooltip> */}
       <Tooltip arrow placement="top" title="Send email">
         {/* <IconButton color="primary" sx={{ mx: 0.5 }}>
           <EmailTwoToneIcon /> 
         </IconButton> */}
         <Button onClick={() => props.setOpenModal(false)}><EmailTwoToneIcon /> {'\u00A0'} Contact the scout</Button>
       
       </Tooltip>
       {/* <Tooltip arrow placement="top" title="Send message">
         <IconButton color="primary" sx={{ mx: 0.5 }}>
           <MessageTwoToneIcon />
         </IconButton>
       </Tooltip> */}
     </Box>
     
     <CardContent>
       <List sx={{ px: 2 }}>
         <Divider component="li" />
         <ListItem sx={{ py: 1.5 }}>
           <ListItemText
             primary="Hired On"
             primaryTypographyProps={{ variant: 'subtitle2' }}
           />
           <Typography variant="subtitle2" color="text.primary">
             22 January 2021
           </Typography>
         </ListItem>
         <Divider component="li" />
         <ListItem sx={{ py: 1.5 }}>
           <ListItemText
             primary="Status"
             primaryTypographyProps={{ variant: 'subtitle2' }}
           />
           <Typography variant="subtitle2" color="text.primary">
             Assigned.
           </Typography>
         </ListItem>
         <Divider component="li" />
         <ListItem sx={{ py: 1.5 }}>
           <ListItemText
             primary="Tasks"
             primaryTypographyProps={{ variant: 'subtitle2' }}
           />
           <Typography
             variant="subtitle2"
             color="text.primary"
             fontWeight="bold"
           >
             67 active
           </Typography>
         </ListItem>
       </List>
     </CardContent>
     </Card>
        
      </div>
    )}       
    }
  
  return (
    <>{loadedShow()}</>
  )
    
      
}

const mapStateToProps = state => {
  return {
    applicants: state.applicants,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getapplicant: (id) => dispatch(getApplicant(id)),

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplicantDetailComponent);


