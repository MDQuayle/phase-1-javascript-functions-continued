// Your code here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(word = "*"){
    return function (special = "special"){
        return `You are ${word}${special}${word}!`;

    }

}