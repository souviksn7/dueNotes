

$(document). ready(function(){
    $("#add_people").click(function(){
        document.getElementById("myForm").style.display = "block";
    });

    $(".cancel_people").click(function(){
        document.getElementById("myForm").style.display = "none";
    });

    $(".add_due").click(function(){
        document.getElementById("popup_form_to_me_due").style.display = "block";
    });

    $(".add_payment").click(function(){
        document.getElementById("popup_form_to_me_paid").style.display = "block";
    });

    $("#ok_due").click(function(){
        document.getElementById("popup_form_to_me").style.display = "none";
        var id = document.getElementById("id_name");
    });

    $("#cancel_due").click(function(){
        document.getElementById("popup_form_to_me").style.display = "none";
    });
    var id = document.getElementById("id_name");
    id = id.innerText;
    var idpro = document.getElementById("id_due_toMe");
    idpro.innerText = id;

    idpro = document.getElementById("id_paid_toMe");
    idpro.innerText = id;

    id = document.getElementById("id_name_2");
    id = id.innerText;

    idpro = document.getElementById("id_due_toPeople");
    idpro.innerText = id;

    idpro = document.getElementById("id_paid_toPeople");
    idpro.innerText = id;
    });

// {/* <script src="../app.js"></script> */}