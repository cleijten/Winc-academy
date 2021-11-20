// Utility functions
const functions = {

    isNotNull: (str) => str,

    hasRightLength: (str) => str,

    hasUpperCaseCharacter: (str) => str,

    hasLowerCaseCharacter: (str) => str,

    hasDigit: (str) => str,

    minimumConditionsReached: (conditions) => {
        //conditions is an array of booleans [true, true, true]
        //trueConditions = conditions.filter(bool => bool);
        console.log("conditions", conditions);
        console.log("trueconditions ", trueConditions, trueConditions.length);
        return trueConditions.length >= 3;
    },

    // "Outer" function
    verifyPassword: password => {
        console.log("password is", password);
        constconditions = [
            isNotNull(password),
            hasRightLength(password),
            hasUpperCaseCharacter(password),
            hasLowerCaseCharacter(password),
            hasDigit(password)
        ];
        console.log("constconditons is ", constconditions);

        const result =
            minimumConditionsReached(constconditions) && hasLowerCaseCharacter(password);
        console.log("resultaat is", result);
        return result;
    }
    
}

module.exports = functions;