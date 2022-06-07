import http from "../../helpers/client/api.client";

const PARAMETER_ENDPOINT = "/api/parameters/"
const SKILL_ENDPOINT = "/api/skills/"

class ParameterDataService {
    getAllParameters = () => http.get(`${PARAMETER_ENDPOINT}`);

    getParameter(id) {
        return http.get(`${PARAMETER_ENDPOINT}${id}/`);
    }

    async getSkillsForParam(parameterID) {
        let skills = [];
        let parameter = await ParameterDataService.getParameter(parameterID);
        let skillIDs = Array.from(parameter.data.skills);
        let response = await Promise.all(skillIDs.map(skillID => http.get(`${SKILL_ENDPOINT}${skillID}`)));
        skills = response.map(skill => skill.data);
        return skills;
    }

    createParameter(data) {
        return http.post(`${PARAMETER_ENDPOINT}`, data);
    }

    updateParameter(id, data) {
        return http.put(`${PARAMETER_ENDPOINT}${id}/`, data);
    }

    deleteParameter(id) {
        return http.delete(`${PARAMETER_ENDPOINT}${id}/`);
    }

    deleteAllParameters() {
        return http.delete(`${PARAMETER_ENDPOINT}/`);
    }
    
    findParameterByTitle(title) {
        return http.get(`${PARAMETER_ENDPOINT}?title=${title}/`);
    }
}
export default new ParameterDataService();
