import EventDataService from '../../../Data Layer/services/event/event.service';
import eventActions from '../../actions/event/event.actions'


const getEvents = () => (dispatch) => {

    dispatch(eventActions.eventsLoading());

    EventDataService.getAllEvents()
        .then((response) => {
            console.log('response', response.data);
            dispatch(eventActions.eventsLoaded(response.data))
        })
        .catch((error) => dispatch(eventActions.eventsLoadingError(error.message)));
};

const getEvent = (id) => (dispatch) => {

    dispatch(eventActions.eventLoading());

    EventDataService.getEvent(id)
        .then((response) => {
            console.log('response', response.data);
            dispatch(eventActions.eventLoaded(response.data))
        })
        .catch((error) => dispatch(eventActions.eventLoadingError(error.message)));    
};

const updateEvent = (id, data) => (dispatch) => {

    dispatch(eventActions.eventUpdating());

    EventDataService.updateEvent(id,data)
        .then((response) => {
            console.log('response', response.data);
            dispatch(eventActions.eventUpdated(response.data))
        })
        .catch((error) => dispatch(eventActions.eventUpdateError(error.message)));    
};

const createEvent = (data) => (dispatch) => {

    dispatch(eventActions.eventCreating());

    EventDataService.createEvent(data)
        .then((response) => {
            console.log('response', response.data);
            dispatch(eventActions.eventCreated(response.data))
        })
        .catch((error) => dispatch(eventActions.eventCreateError(error.message)));    
};

const deleteEvent = (data) => (dispatch) => {

    dispatch(eventActions.eventDeleting());

    EventDataService.deleteEvent(data)
        .then((response) => {
            console.log('response', response.data);
            dispatch(eventActions.eventDeleted(response.data))
        })
        .catch((error) => dispatch(eventActions.eventDeleteError(error.message)));    
};

const checkTeam = (eventID) => (dispatch) => {
    dispatch (eventActions.checkingTeam());
    EventDataService.checkTeam(eventID)
        .then((response) => {
            console.log('response', response.data);
            dispatch(eventActions.teamChecked(response.data))
        }
        )
        .catch((error) => dispatch(eventActions.teamCheckError(error.message)));
};

const buildTeam = (eventID) => (dispatch) => {
    dispatch(eventActions.teamBuilding());

    EventDataService.buildTeams(eventID)
        .then((response) => {   
            console.log('response', response.data);
            dispatch(eventActions.teamBuilt(response.data))
        
        })
        .catch((error) => dispatch(eventActions.teamBuildErrror(error.message)));
};



const assignScout = (eventID, scoutsArray) => (dispatch) => {
    dispatch(eventActions.assigningScout());
    

    // EventDataService.getScoutsArray(eventID)
    //     .then((response) => {
    //         let assignedScouts = response.data.scouts;
    //         scoutsArray.push(...assignedScouts);
    //         scoutsArray.push(scoutID);
    //         EventDataService.assignScout(eventID, scoutsArray).then((response) => {
    //             console.log('response', response.data);
    //             dispatch(eventActions.scoutAssigned(response.data))
    //         }, (error) => {
    //             dispatch(eventActions.scoutAssignError(error.message))
    //         })
    //     })

    EventDataService.assignScout(eventID, scoutsArray).then((response) => {
        console.log('response', response.data);
        dispatch(eventActions.scoutAssigned(response.data))
    }, (error) => {
        dispatch(eventActions.scoutAssignError(error.message))
    })

   

    // EventDataService.assignScout(eventID, scoutID)
    //     .then((response) => {
    //         console.log('response', response.data);
    //         dispatch(eventActions.scoutAssigned(response.data))
    //     })
    //     .catch((error) => dispatch(eventActions.scoutAssignError(error.message)));
}

// const getScoutsNames = (eventID) => (dispatch) => {
//     dispatch(eventActions.gettingScoutsNames());

//     Eve



const closeEvent = (eventID) => (dispatch) => {
    dispatch(eventActions.eventClosing());

    EventDataService.closeEvent(eventID)
        .then((response) => {  
            console.log('response', response.data);
            dispatch(eventActions.eventClosed(response.data))
        })
        .catch((error) => dispatch(eventActions.eventCloseError(error.message)));
}






export {
    getEvents,
    getEvent,
    updateEvent,
    createEvent,
    deleteEvent,
    assignScout,
    checkTeam,
    buildTeam,
    closeEvent
}