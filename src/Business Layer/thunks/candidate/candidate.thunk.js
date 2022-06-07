import CandidateDataService from '../../../Data Layer/services/candidate/candidate.service';
import candidateActions from '../../../Business Layer/actions/candidate/candidate.actions';

const getCandidates = (eventID) => (dispatch) => {
    dispatch(candidateActions.candidatesLoading());
    CandidateDataService.getAllCandidates(eventID)
        .then((candidates) => {
            dispatch(candidateActions.candidatesLoaded(candidates))
        })
        .catch((error) => dispatch(candidateActions.candidatesLoadingError(error.message)));
};

const getCandidate = (id, eventID) => (dispatch) => {

    dispatch(candidateActions.candidateLoading());

    CandidateDataService.getCandidate(id)
        .then((response) => {
            console.log('response', response.data);
            dispatch(candidateActions.candidateLoaded(response.data))
        })
        .catch((error) => dispatch(candidateActions.candidateLoadingError(error.message)));    
};

const acceptCandidate = (eventID, candidateID) => (dispatch) => {

    dispatch(candidateActions.candidatesLoading());

    CandidateDataService.acceptCandidate(eventID, candidateID)
        .then((response) => {
            console.log('response', response.data);
            dispatch(candidateActions.candidateAccepted(response.data))
        })
        .catch((error) => dispatch(candidateActions.candidateAcceptError(error.message)));    
};

export{
    getCandidates,
    getCandidate,
    acceptCandidate,
}