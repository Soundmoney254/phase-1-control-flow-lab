function scuberGreetingForFeet(feet){
  let charges = 20
  if(feet < 401){
    return 'This one is on me!';
  }
  else if (feet > 2000 && feet <2501 ){
    return 'I will gladly take your thirty bucks.';
  }
  else if (feet >= 2501){
    return 'No can do.'
  }
  else{
    return `${charges}`
  }
  
}

function ternaryCheckCity(city){
  let canGo = city ==='NYC'? "Ok, sounds good." : "No go.";
  return canGo
}

function switchOnCharmFromTip(charm){
  switch(charm) {
    case "generous" : return "Thank you so much."
    break;
    case "not as generous" : return "Thank you."
    break;
    default : return "Bye."
    break;
  }
  
}