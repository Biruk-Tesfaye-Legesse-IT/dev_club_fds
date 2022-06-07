import http from "../../helpers/client/api.client";

const SKILL_ENDPOINT = "/api/skills/"

class SkillDataService {
    getAllSkills = () => http.get(`${SKILL_ENDPOINT}`);

    getSkill(id) {
        return http.get(`${SKILL_ENDPOINT}${id}/`);
    }

    createSkill(data) {
        return http.post(`${SKILL_ENDPOINT}`, data);
    }

    updateSkill(id, data) {
        return http.put(`${SKILL_ENDPOINT}${id}/`, data);
    }

    deleteSkill(id) {
        return http.delete(`${SKILL_ENDPOINT}${id}/`);
    }

    deleteAllSkills() {
        return http.delete(`${SKILL_ENDPOINT}/`);
    }
    
    findSkillByTitle(title) {
        return http.get(`${SKILL_ENDPOINT}?title=${title}/`);
    }
}
export default new SkillDataService();
