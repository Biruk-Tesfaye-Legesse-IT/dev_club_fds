import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,

} from '@mui/material';
// import BasicModal from '../modal';
import Modal from '@mui/material/Modal';
import {useState, useEffect} from 'react';
import DatePicker from '../date-time-picker';
import http from '../../../Data Layer/helpers/client/api.client';
import CameraAltTwoToneIcon from '@mui/icons-material/CameraAltTwoTone';
import Badge from '@mui/material/Badge';
import styled from '@emotion/styled';
import { getAccount, updateAccount } from "../../../Business Layer/thunks/account/account.thunk";
import {connect} from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';


function AccountProfile(props) {

  const user = JSON.parse(sessionStorage.getItem('user'));

  let navigate = useNavigate();

  
  // login("don", "pass")

  let defaultImage = {
    profileImage: user.profile_picture
    
  }

  useEffect (() => {
    
  }, [])

  const imageHandler = (e) => {
    
    const file = e.target.files[0];
   
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(reader.result);
      setSelectedImage(selectedImage => ({
        selectedImage: reader.result}),
        )
    };



     
  };

  const [selectedImage, setSelectedImage] = useState({
    profileImage: defaultImage.profileImage,
    selectedImage: null
});

const handleSubmit = () => {
    const file = document.getElementById('file').files[0];
    var formData = new FormData();
    formData.append('profile_picture', file);
    // var xhr = new XMLHttpRequest();
    // xhr.open('PATCH', `http://localhost:8000/api/clubs/${user.id}/`);
    // xhr.send(formData);

    console.log(formData.get('profile_picture'));
    props.updateaccount(user.id, formData);
  // const file = e.target.files[0];
  // const reader = new FileReader();
  // reader.readAsDataURL(file);
  // reader.onload = () => {
  //   setSelectedImage(reader.result);
  // }

};



  
  const [isModalOpen, setModalOpen] = useState(false);
  // const handleOpen = () => setModalOpen(true);

  return (
    <Card {...props}>
      <CardContent>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <form>
          <input type="file" id="file"  hidden onChange={(e) => {
            
            imageHandler(e);
            setSelectedImage({
              selectedImage: e.target.files[0],
              // profileImage: e.target.files[0]
            })
            
          }} />
            
          <Button

            onClick={() => {
              document.getElementById('file').click();
            }}  >

          <Badge
            overlap="circular"

            sx={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '1rem',
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              backgroundColor: '#fff',
              
              border: '1px solid #e0e0e0',
              position: 'relative',
              
            }}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={
              <CameraAltTwoToneIcon 
                color='secondary'
                sx={{
                  fontSize: '2rem',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
                onClick={() => console.log('clicked')}
                />  
            }
          >

          <Avatar
            {...console.log(selectedImage)}
            src={ selectedImage.selectedImage ? selectedImage.selectedImage : selectedImage.profileImage }
            // src={selectedImage ? selectedImage :  }
            {...console.log('First', selectedImage)}
            {...console.log('Secon',  defaultImage)}
            sx={{
              height: 64,
              mb: 1,
              width: 64
            
            }} />
          </Badge>
           
            </Button>
         
          </form>
          
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h5"
          >
            {user.more.club_name}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body2"
          >
            {`${user.more.website}`}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body2"
          >
            {user.timezone}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>

     

        {/* <Button
              onClick={() => {console.log('Change Picture');}}
              color="primary"
              fullWidth
              variant="text"
            >
              Upload picture
            </Button> */}


        {/* <Button
            onClick={() => setModalOpen(true)}
            color="primary"
            fullWidth
            variant="text"
          >
            Open Details
          </Button>

        <Modal isOpen={isModalOpen} setIsOpen={setModalOpen} /> */}

        <Button
          color="primary"
          fullWidth
          variant="text"
          onClick={() => {
            handleSubmit();
          }}
        >
          Change Profile Picture
        </Button>
      </CardActions>
    </Card>
  );
}

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

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

export default connect(mapStateToProps, mapDispatchToProps)(AccountProfile);