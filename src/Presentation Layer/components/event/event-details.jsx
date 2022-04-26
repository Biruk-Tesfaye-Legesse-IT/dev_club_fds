import { useState, useEffect} from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Alert
} from '@mui/material';
import Stack from '@mui/material/Stack';
import { useNavigate, useParams  } from 'react-router-dom';
import { getEvent, updateEvent, getEvents } from "../../../Business Layer/thunks/event/events.thunk";
import { connect, useSelector } from 'react-redux';




const EventDetailComponent = function (props) {
  
  let { id } = useParams();

  useEffect(() => {
    props.getevent(id); 
  }, []);

  const navigate = useNavigate();

  // ========================================
 
  function loadedShow(){
    if (props.events.eventLoading) {
      return <div>Loading...</div>
    }
    else if (props.events.event) {
      let event = props.events.event;
      return (

        <div>{event.age_limit}</div>
      )
  }
}
  // ======================================================
    return (
      <>{loadedShow()}</>
    );
  };

  // ======================================================

const mapStateToProps = state => {
  return {
    events: state.events
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getevent: (id) => dispatch(getEvent(id)),
    updateevent: (id,values) => dispatch(updateEvent(id,values)),
   
    getevents: () => dispatch(getEvents()),

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetailComponent);