import skillActionTypes from '../../actions/skill/skill.action.types';

const initialState = {
    skills: [],
    skill: {},
    skillsLoading: true,
    skillLoading: true,
    error: null,

}


export default function skillsReducer(state = initialState, action) {
    // console.log('skillReducer', action);
    switch (action.type) {
        case skillActionTypes.SKILLS_LOADING:
            return {
                ...state,
                skillsLoading: true,
                error: null
            }
        case skillActionTypes.SKILLS_LOADED:
            return {
                ...state,
                skills: action.payload,
                skillsLoading: false,
            };

        case skillActionTypes.SKILLS_LOADING_ERROR:
            return {
                ...state,
                skillsLoading: false,
                error: action.payload,
            };

    // =======================================================

    case skillActionTypes.SKILL_LOADING:
        return {
            ...state,
            skillLoading: true,
            error: null
        }
    case skillActionTypes.SKILL_LOADED:
        return {
            ...state,
            skill: action.payload,
            skillLoading: false,
        };

    case skillActionTypes.SKILL_LOADING_ERROR:
        return {
            ...state,
            skillLoading: false,
            error: action.payload,
        };
    
    default:
        return state;
    }
};



