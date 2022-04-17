import {useEffect} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { makeStyles } from '@mui/styles';
import { connect} from 'react-redux';

import {
  Card,
  CardContent,
  Tooltip,
  Rating,
  IconButton,
  Divider,
  ListItem,
  ListItemText,
  List,
  Avatar,
  useTheme
} from '@mui/material';

import PhoneTwoToneIcon from '@mui/icons-material/PhoneTwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import MessageTwoToneIcon from '@mui/icons-material/MessageTwoTone';

import { getScout } from "../../../Business Layer/thunks/scout/scouts.thunk";


const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
  },
});


// const DetailsModal = function({ openModal, setOpenModal, id}, props) {
const DetailsModal = function(props) {
  console.log('Modal Opened');
  useEffect(() => {
    props.setOpenModal(true);
  }, []);

  const classes = useStyles();
  
  const theme = useTheme();

  useEffect(() => {

    // props.getscout(props.id);
  

    console.log('Woooo', props.scouts.scout);
    
  }, []);

  return (
    
      <Modal
        
        open={props.openModal}
        {...console.log(props.openModal)}
        onClose={props.setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      
      <Card className={classes.root}>
      <Button onClick={() => props.setOpenModal(false)}>X</Button>
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
        src="/static/images/avatars/4.jpg"
      />
      <Typography align="center" variant="h4" gutterBottom>
        Craig Donin
      </Typography>
      <Typography align="center" variant="subtitle2" gutterBottom>
        Senior Web Developer
      </Typography>

      <Box display="flex" alignItems="center" justifyContent="center">
        <Rating value={4} defaultValue={5} precision={1} readOnly />
        <Typography variant="h5" sx={{ pl: 0.5 }}>
          4.1
        </Typography>
      </Box>

      <Box py={2} display="flex" alignItems="center" justifyContent="center">
        <Tooltip arrow placement="top" title="Call">
          <IconButton color="primary" sx={{ mx: 0.5 }}>
            <PhoneTwoToneIcon />
          </IconButton>
        </Tooltip>
        <Tooltip arrow placement="top" title="Send email">
          <IconButton color="primary" sx={{ mx: 0.5 }}>
            <EmailTwoToneIcon />
          </IconButton>
        </Tooltip>
        <Tooltip arrow placement="top" title="Send message">
          <IconButton color="primary" sx={{ mx: 0.5 }}>
            <MessageTwoToneIcon />
          </IconButton>
        </Tooltip>
      </Box>

      <CardContent>
        <List sx={{ px: 2 }}>
          <Divider component="li" />
          <ListItem sx={{ py: 1.5 }}>
            <ListItemText
              primary="Join Date"
              primaryTypographyProps={{ variant: 'subtitle2' }}
            />
            <Typography variant="subtitle2" color="text.primary">
              22 January 2021
            </Typography>
          </ListItem>
          <Divider component="li" />
          <ListItem sx={{ py: 1.5 }}>
            <ListItemText
              primary="Company"
              primaryTypographyProps={{ variant: 'subtitle2' }}
            />
            <Typography variant="subtitle2" color="text.primary">
              Google Inc.
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
      </Modal>
  );
}

const mapStateToProps = state => {
  return {
    scouts: state.scouts
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getscout: (id) => dispatch(getScout(id)),

    // getevents: () => dispatch(getEvent()),

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsModal);