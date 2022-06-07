// Validate the skill

const validateSkill = (skill) => {
    const errors = {};
    if (skill.name) {
        if (skill.description){
            return true;
        }
        else{
            errors.description = 'Skill Description is required!';
        }
        
    }
    else {
        errors.name = 'Skill Name is required!';
    }
     
    return errors;
}

export default validateSkill;