import {controlUser} from "../models/connectData.js";
import {getCookie} from '../models/cookieModels.js';


$().ready(function(){
    // var urlAdmin = "./view/dashboard.html";
    // var urlUser = "./view/page19.html";
    var userCookie = getCookie("username");
    
    /**
     * M: On récupère le submit du formulaire , on contrôle ensuite le username et passUser si ils sont correspondant à l'array
     */
    $("#formLogin").submit(function(event){
        event.preventDefault();
        console.log(userCookie);
        let id = $("#username").val();
        let pw = $("#password").val();
        let resultCrtl = controlUser(id, pw);
        if(resultCrtl && userCookie === "Admin"){
            // $(this).add("action").attr("action", urlAdmin);
            window.location = "http://localhost/ProjetCG/view/dashboard.html";
        }else if(resultCrtl){
            // $(this).add("action").attr("action", urlUser);
            window.location = "http://localhost/ProjetCG/view/page19.html";
        }else{
            $(".msgE").removeClass('d-none');
            $("input").css("border","2px solid red");
            $("input").css("border","2px solid red");
        }

    })

});


