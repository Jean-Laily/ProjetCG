import {controlUser} from "../models/connectData.js"

$().ready(function(){
    var urlAdmin = "./view/dashboard.html";
    var urlUser = "./view/page.html";
    
    /**
     * M: On récupère le submit du formulaire , on contrôle ensuite le username et passUser si ils sont correspondant à l'array
     */
    $("#formLogin").submit(function(){
        let id = $("#username").val();
        let pw = $("#password").val();
        
        let resultCrtl = controlUser(id, pw);
        console.log(resultCrtl);
        // let role = verifRole();
        if(resultCrtl){
            $(this).add("action").attr("action", urlAdmin);
        }else{
            alert("erreur id or mdp");
            $(".msgE").append('<p class="alert alert-danger"><strong>Identifiant ou Mot de passe incorrect</strong></p>').css("color", "red");
            $("#username").css("border","2px solid red");
            $("#password").css("border","2px solid red");
        }

        // else if(resultCrtl){
        //     $(this).add("action").attr("action", urlUser);

    })

});


