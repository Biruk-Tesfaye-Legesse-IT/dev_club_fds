import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@mui/material';

const user = {
  avatar: 'https://upload.wikimedia.org/wikipedia/en/8/80/St_George_SC_%28logo%29.png',
  city: 'Addis Ababa',
  country: 'Ethiopia',
  type: 'Club',
  name: 'St. George SC',
  timezone: 'GMT+3'
};

export const AccountProfile = (props) => (
  <Card {...props}>
    <CardContent>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Avatar
          src={user.avatar}
          sx={{
            height: 64,
            mb: 2,
            width: 64
          }}
        />
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h5"
        >
          {user.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {`${user.city} ${user.country}`}
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
      <Button
        onClick={() => {console.log('Change Picture');}}
        color="primary"
        fullWidth
        variant="text"
      >
        Change Profile
      </Button>
    </CardActions>
  </Card>
);
