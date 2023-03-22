// Main Function 
var regex  = new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/);
$(document).ready(function(){
    $("#password").keypress(function(){
        let val = $("#password").val()
        if (val.length<8){
            $("p").text("Password Strength: Weak")
            $("p").css("color","red")
        }
        else if(regex.test(val)){
            $("p").text("Password Strength: Strong")
            $("p").css("color","green")
        }
        else{
            $("p").text("Password Strength: Fair")
            $("p").css("color","orange")
        }
    })
})