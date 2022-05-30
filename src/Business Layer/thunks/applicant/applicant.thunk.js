import ApplicantDataService from '../../../Data Layer/services/applicant/applicant.service';
import EventDataService from '../../../Data Layer/services/event/event.service';
import applicantActions from '../../actions/applicant/applicant.actions';




// const getApplicants = (eventID) => (dispatch) => {

//     dispatch(applicantActions.applicantsLoading());
  
//     EventDataService.getEvent(eventID)
//         .then((event) => {
//             console.log('responseOnThunk', Array.from(event.data.applicants));
//             let applicants = [];
//             let modifiedEvent = event.data;
//             let applicantIDs = Array.from(event.data.applicants);
//             applicantIDs.forEach(applicantID => {
//                 console.log('AAAPPPPIIIDDD',applicantID)
//                 ApplicantDataService.getPlayer(applicantID)
//                     .then((applicant) => {
                        
//                         console.log('player', applicant.data);
//                         applicants.push(applicant.data);
                        
//                     })
//                     .catch((error) => dispatch(applicantActions.applicantsLoadingError(error.message)));
//             });
//             modifiedEvent.applicants = applicants;
//             console.log('element');
//             console.log('applicants', applicants);
//             console.log('event', modifiedEvent);
//             dispatch(applicantActions.applicantsLoaded(applicants))

            
//         })
//         .catch((error) => dispatch(applicantActions.applicantsLoadingError(error.message)));
// };


const getApplicants = (eventID) => (dispatch) => {

    dispatch(applicantActions.applicantsLoading());
  
    EventDataService.getEvent(eventID)
        .then((event) => {
            console.log('responseOnThunk', Array.from(event.data.applicants));
            let applicants = [];
            let applicantIDs = Array.from(event.data.applicants);
            applicantIDs.forEach(applicantID => {
                
                console.log('AAAPPPPIIIDDD',applicantID)
                ApplicantDataService.getPlayer(applicantID)
                
                    .then((player) => {
                        
                        console.log('player', player.data);
                        applicants.push(player.data);
                        
                    })
                    .catch((error) => dispatch(applicantActions.applicantsLoadingError(error.message)));
            });
            console.log('element');
            console.log('applicants', applicants);
            dispatch(applicantActions.applicantsLoaded(Array.from(applicants)))
        })
        .catch((error) => dispatch(applicantActions.applicantsLoadingError(error.message)));
};



// dispatch(applicantActions.applicantsLoaded(response.data))

const getApplicant = (id, eventID) => (dispatch) => {

    dispatch(applicantActions.applicantLoading());

    ApplicantDataService.getApplicant(id, eventID)
        .then((response) => {
            console.log('response', response.data);
            dispatch(applicantActions.applicantLoaded(response.data))
        })
        .catch((error) => dispatch(applicantActions.applicantLoadingError(error.message)));    
};

const approveApplicant = (data) => (dispatch) => {

    dispatch(applicantActions.applicantAdding());

    ApplicantDataService.createApplicant(data)
        .then((response) => {
            console.log('response', response.data);
            dispatch(applicantActions.applicantAdded(response.data))
        })
        .catch((error) => dispatch(applicantActions.applicantAddError(error.message)));    
};

const disapproveApplicant = (id) => (dispatch) => {

    dispatch(applicantActions.applicantDeleting());

    ApplicantDataService.deleteApplicant(id)
        .then((response) => {
            console.log('response', response.data);
            dispatch(applicantActions.applicantDeleted(response.data))
        })
        .catch((error) => dispatch(applicantActions.applicantDeleteError(error.message)));    
};


export{
    getApplicants,
    getApplicant,
    approveApplicant,
    disapproveApplicant,
}