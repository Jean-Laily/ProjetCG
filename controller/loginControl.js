// simulation d'une BDD user et admin
import {listUser} from '../models/connectData.js';

export function controlUser(user, pw){
    userValid = false;
   for(let i= 0 ; i < listUser.length; i++){
      if(user == listUser[i][0] && pw == listUser[i][1]){
         userValid = true;
      }
   }
   if(userValid == false){
      $("#username").style.border = "2px solid red";
      $("#password").style.border = "2px solid red";
   }

   return userValid;

}