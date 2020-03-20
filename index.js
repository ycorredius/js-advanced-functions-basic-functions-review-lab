// Your code here
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity= "go to the office"){
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(special_character='*'){
  return function(adjective="special"){
    return `You are ${special_character}${adjective}${special_character}!`;
  };
}

const Calculator = {
  add: function(a,b){
    return a+b;
  },
  subtract: function(a,b){
    return a-b;
  },
  multiply: function(a,b){
    return a * b;
  },
  divide: function(a,b){
    return a/b;
  }
};

function actionApplyer(starter,aray) {
  let a = starter;

  for (let i = 0; i < aray.length; i++ ){
    a = aray[i](a);
  }
  return a  ;
}