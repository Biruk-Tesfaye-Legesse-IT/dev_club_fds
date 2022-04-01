import EventDataService from '../../../Data Layer/services/event/event.service';
import eventActions from '../../actions/event/event.actions'


export const getEvents = () => (dispatch) => {

    dispatch(eventActions.eventsLoading());

    EventDataService.getAllEvents()
        .then((response) => {
            console.log('response', response.data);
            dispatch(eventActions.eventsLoaded(response.data))
        })
        .catch((error) => dispatch(eventActions.eventsLoadingError(error.message)));
};

export const getEvent = () => (dispatch) => {

    dispatch(eventActions.eventLoading());

    EventDataService.getEvent()
        .then((response) => {
            console.log('response', response.data);
            dispatch(eventActions.eventLoaded(response.data))
        })
        .catch((error) => dispatch(eventActions.eventLoadingError(error.message)));    
};

export const updateEvent = (id, data) => (dispatch) => {

    dispatch(eventActions.eventUpdating());

    EventDataService.updateEvent(id,data)
        .then((response) => {
            console.log('response', response.data);
            dispatch(eventActions.eventUpdated(response.data))
        })
        .catch((error) => dispatch(eventActions.eventUpdateError(error.message)));    
};

