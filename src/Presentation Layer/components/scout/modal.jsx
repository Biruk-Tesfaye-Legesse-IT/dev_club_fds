import {useEffect, useLayoutEffect} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DialogTitle from '@mui/material/DialogTitle';
// import CloseIcon from '@mui/icons/CloseIcon';
import { makeStyles, propsToClassKey } from '@mui/styles';
import { connect} from 'react-redux';
import store from '../../../Business Layer/store/store';

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
  useTheme,
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

  const { children, onClose, ...other } = props;
  
  useEffect(() => {
    props.setOpenModal(true);
    // props.getscout(props.id);
   

  }, [props.setOpenModal]);

 

  useEffect(() => {
    console.log('Woooo', props.scout.scout);
    console.log('Ahhhhoy:',props.scout.scoutLoading);
  }, [props.scout.scout]);

  const classes = useStyles();
  
  const theme = useTheme();

 

  function loadedShow(){
    if (props.scout.scoutLoading) {
     
      return (
        <div>
          <Typography variant="h6" gutterBottom>
            Loading...
          </Typography>
        </div>
      );
    }

    else if (props.scout.scout) {
      return(
        <div>
        <Typography variant="h6" gutterBottom>
          LOADED
        </Typography>
      </div>
    )}
          
    }
  

  return (
    
      // <Modal
        
      //   open={props.openModal}
      //   // {...console.log(props.openModal)}
      //   // {...console.log('Ahooy',props.scout.scoutLoaded)}
      //   onClose={props.setOpenModal(false)}
      //   aria-labelledby="modal-modal-title"
      //   aria-describedby="modal-modal-description"
      // >


      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          {/* <CloseIcon /> */}
        </IconButton>
      ) : null}
    </DialogTitle>
      
     
      // </Modal>
  );
}

const mapStateToProps = state => {
  return {
    scout: state.scouts
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getscout: (id) => dispatch(getScout(id)),

    // getevents: () => dispatch(getEvent()),

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsModal);


