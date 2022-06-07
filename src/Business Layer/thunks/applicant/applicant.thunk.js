import ApplicantDataService from '../../../Data Layer/services/applicant/applicant.service';
import applicantActions from '../../actions/applicant/applicant.actions';


const getApplicants = (eventID) => (dispatch) => {
    dispatch(applicantActions.applicantsLoading());
    ApplicantDataService.getAllApplicants(eventID)
        .then((applicants) => {
            dispatch(applicantActions.applicantsLoaded(applicants))
        })
        .catch((error) => dispatch(applicantActions.applicantsLoadingError(error.message)));
};

const getApplicant = (id, eventID) => (dispatch) => {

    dispatch(applicantActions.applicantLoading());

    ApplicantDataService.getApplicant(id)
        .then((response) => {
            console.log('response', response.data);
            dispatch(applicantActions.applicantLoaded(response.data))
        })
        .catch((error) => dispatch(applicantActions.applicantLoadingError(error.message)));    
};

const approveApplicant = (eventID, applicantID) => (dispatch) => {

    dispatch(applicantActions.applicantApproving());

    ApplicantDataService.approveApplicant(eventID, applicantID)
        .then((response) => {
            console.log('response', response.data);
            dispatch(applicantActions.applicantApproved(response.data))
        })
        .catch((error) => dispatch(applicantActions.applicantApproveError(error.message)));    
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

// dispatch(applicantActions.applicantsLoaded(response.data))

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


// const getApplicants = (eventID) => async (dispatch) =>  {

//     dispatch(applicantActions.applicantsLoading());
  
//     EventDataService.getEvent(eventID)
//         .then((event) => {
//             console.log('responseOnThunk', Array.from(event.data.applicants));
//             let applicants = [];
            
//             let applicantIDs = Array.from(event.data.applicants);
//             applicantIDs.forEach(applicantID => {
//                 console.log('AAAPPPPIIIDDD',applicantID)
//                 ApplicantDataService.getPlayer(applicantID).then((player) => {
//                         console.log('player', player.data);
//                         applicants.push(player.data);
                        
//                     })
//                     .catch((error) => dispatch(applicantActions.applicantsLoadingError(error.message)));
//             });
//             console.log('element');
//             console.log('applicants', applicants);
//             setTimeout(() => {
//                 dispatch(applicantActions.applicantsLoaded(applicants))
//             }, 1000);
            
           
//         })
//         .catch((error) => dispatch(applicantActions.applicantsLoadingError(error.message)));
// };