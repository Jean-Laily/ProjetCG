import {setCookie} from './cookieModels.js'

// collection d'objet Array
export var listUser = new Array;
listUser[0] = new Array("admin","Admin@123",1)
listUser[1] = new Array("user","User@123",2)

export function controlUser(user, pw){
    let userValid = false;
   for(let i= 0 ; i < listUser.length; i++){
      if(user == listUser[i][0] && pw == listUser[i][1]){
        setCookie("username", listUser[i][0],2) // set(name => value => timeLife)
        setCookie("role", listUser[i][2],2)  
        userValid = true;
      }
   }
   console.log("contrôle user effectué voici sont résultat : " + userValid);
   return userValid;
}

function viewList(){
    listUser.forEach(value, index => {
        console.log(value);
    });
}