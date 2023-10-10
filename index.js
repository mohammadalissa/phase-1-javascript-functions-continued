// code your solution here
const saturdayFun =  function (st ='roller-skate'){
        return `This Saturday, I want to ${st}!`
}
let mondayWork = function(st='go to the office'){
    return `This Monday, I will ${st}.`
}

function wrapAdjective(stri='*'){
    function inner(para = 'special'){
        return `You are ${stri}${para}${stri}!`
    }
    return inner
}
console.log(wrapAdjective("%")("a dedicated programmer"))