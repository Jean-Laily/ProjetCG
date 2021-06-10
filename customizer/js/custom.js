$().ready(function(){
    import {controlUser} from "../../controller/loginControl.js"
    /**
     * M: On récupère le submit du formulaire , on contrôle ensuite le username et passUser si ils sont correspondant à l'array
     */

    $("#formLogin").submit(function(){
        var id = $("#username").val();
        var pw = $("#password").val();
        controlUser(id,pw);
        

    })

});