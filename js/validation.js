// // $(document).ready(function(){$("#send_message").click(function(a){a.preventDefault();var b=!1,c=$("#name").val(),d=$("#email").val(),e=$("#phone").val(),f=$("#message").val();if($("#name,#email,#phone,#message").click(function(){$(this).removeClass("error_input")}),0==c.length){var b=!0;$("#name").addClass("error_input")}else $("#name").removeClass("error_input");if(0==d.length||"-1"==d.indexOf("@")){var b=!0;$("#email").addClass("error_input")}else $("#email").removeClass("error_input");if(0==e.length){var b=!0;$("#phone").addClass("error_input")}else $("#phone").removeClass("error_input");if(0==f.length){var b=!0;$("#message").addClass("error_input")}else $("#message").removeClass("error_input");0==b&&($("#send_message").attr({disabled:"true",value:"Sending..."}),$.post("email.php",$("#contact_form").serialize(),function(a){"sent"==a?($("#submit").remove(),$("#mail_success").fadeIn(500)):($("#mail_fail").fadeIn(500),$("#send_message").removeAttr("disabled").attr("value","Send The Message"))}))})})





var fname=document.getElementById('name1')
    var email = document.getElementById("mail1")
    var phone = document.getElementById("phone1")
    var message = document.getElementById("message1")
    var err = document.getElementsByClassName("error1")
    var letters = /^[a-zA-Z\s]*$/;
    var emailrej = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    var one=0,two=0,three=0,four=0

    
    
   



    function checkName(){

        b = fname.value
        if(b.trim() ==""){
            err[0].innerHTML = "Enter the name" 
            one=0
        }else if(letters.test(b) == false){
            err[0].innerHTML = "Enter only char"
            one=0
        }
        else{
            err[0].innerHTML = ""
            one=1

        }
    }
    function checkEmail(){

        b=email.value
        if(b==""){
            err[1].innerHTML = "Enter your e-mali"
            two=0
        }else if(emailrej.test(b) == false){
            err[1].innerHTML = "Enter Email"
            two=0
        }else{
            err[1].innerHTML = ""
            two=1
        }
    }
    function checkPhone(){

        b=phone.value
        if(b==""){
            err[2].innerHTML = "Enter the phone Number"
            three=0
        }else if(b.length!=10 ){
            err[2].innerHTML = "enter 10 digit number"
            three=0
         
        }else{
            err[2].innerHTML = ""
            three=1
        }
    }
    function checkMessage(){
        
        b=message.value
        if(b==""){
            err[3].innerHTML = "Enter the message"
            four=0
        }else if(b.length < 6 ){
            err[3].innerHTML = "Message length should be morethan 6"
            four=0
         
        }else{
            err[3].innerHTML = ""
            four=1
        }
        
    }
    $("#contact_form").submit((e)=>{
        e.preventDefault()
    if( one==1&&two==1 &&three==1&&four==1){


       

    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbzQWUfTpokazif8u7h2qJd2a722FIpoFJUruQd9/exec",
        data:$("#contact_form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
           
            $("#contact_form")[0].reset();
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
}
})


