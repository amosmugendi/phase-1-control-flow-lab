function scuberGreetingForFeet(feet){
let result

  if(feet <= 400){
    result="This one is on me!"
    }else if(feet > 400 && feet<=2000){
    result="That will be twenty bucks."
  }else if(feet > 2000 && feet <= 2500){
    result='I will gladly take your thirty bucks.'
  }else if(feet > 2500){
    result='No can do.'
  }
return result;

 // Write your code here!
}
console.log(scuberGreetingForFeet(199))
console.log(scuberGreetingForFeet(1500))
console.log(scuberGreetingForFeet(2001))
console.log(scuberGreetingForFeet(2501))


function ternaryCheckCity(city){

let checkCity= city === 'NYC'? "Ok, sounds good." : "No go.";

return checkCity;
 // Write your code here!
}
console.log(ternaryCheckCity("NYC"))
console.log(ternaryCheckCity("Pittsburgh"))


function switchOnCharmFromTip(charm){
  let message
  switch(charm){
    case 'generous':
      message= "Thank you so much."
      break;
    case 'not as generous':
      message= "Thank you."
      break;
    case 'thanks for everything':
      message= "Bye."
    default:
}
return message;
    // Write your code here!
}
console.log(switchOnCharmFromTip('generous'));
    console.log(switchOnCharmFromTip('not as generous'));
    console.log(switchOnCharmFromTip('thanks for everything'));
