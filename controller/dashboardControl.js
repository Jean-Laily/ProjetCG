import {viewList} from "../models/connectData.js";
import {getCookie,eraseCookie} from '../models/cookieModels.js';

$().ready(function(){
    var userConnecter = getCookie("username");
    viewList();
    $('.msgConnect').append('Vous êtes connecté '+userConnecter);

    // effacer les cookie en cliquant sur deconnexion
    $('#deconnexion').addEventListener("click", function() {
        eraseCookie("username");
        eraseCookie("role");
     });

});