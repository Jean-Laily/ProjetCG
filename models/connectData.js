import {setCookie,getCookie,eraseCookie} from './cookieModels.js'

// collection d'objet Array
export var listUser = new Array;
listUser[0] = new Array("Admin","Admin@123",1)
listUser[1] = new Array("Jean","User1@123",2)
listUser[2] = new Array("Jennifer","User2@123",2)
listUser[3] = new Array("Pascal","User3@123",2)

/**
 * M: Sert à contrôler les identifiants et les mots de passe entrer au login
 * @param {*} user 
 * @param {*} pw 
 * @returns boolean selon le résultat du contrôle
 */
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


/**
 * M: Permet d'afficher sur un tableau tous les utilisateurs existant (simulé)
 * O: @return null
 * I: @Param null
 */
export function viewList(){
    // Récupération de l'élement
    const elApp = $(".tableUser")[0];
    elApp.innerHTML = "";

    let data = "";
    for(let i= 1 ; i < listUser.length; i++){
        data += 
            `<tr>
                <th scope="col">`+i+`</th>
                <td>`+listUser[i][0]+`</td>
                <td> ************ </td>
                <td>
                    <a href="#" class="pr-2 btn" type="button"><i class="fas fa-edit fa-2x" style="color:orange"></i></a>
                    <a href="#" class="pl-2 btn" type="button"><i class="far fa-window-close fa-2x" style="color:Tomato"></i></a>
                </td>
            </tr>`;
    }

    if(data.length > 0){
        elApp.innerHTML += data;
    }else{
        elApp.innerHTML = '<td class="font-weight-bolder text-center" colspan="3">Aucun utilisateur a été créer</td>';
    }

}