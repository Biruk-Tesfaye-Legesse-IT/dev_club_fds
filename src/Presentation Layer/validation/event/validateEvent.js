function validateDescription(description) {
    var descriptionRegex = /[\pL\pN_\-]+/;  
    if (descriptionRegex.test(description)) {
        return true;
    } else {
        return false;
    }
}

function validateAgeLimit(age) {
    return isNumber(age) && age>0 && age<=100 && age%1===0;
}


function validateSessionTime(sessionTime) {
    return isNumber(sessionTime) && sessionTime>0 && sessionTime<=100 && sessionTime%1===0;
}

export{
    validateDescription,
    validateAgeLimit,
    validateSessionTime
}