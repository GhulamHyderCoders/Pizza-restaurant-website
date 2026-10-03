




function submitForm() {


    let name=

    document.getElementById("name").value;


    let email=
    document.getElementById("email").value;


    let phone=
    document.getElementById("phone").value;


    document.getElementById("nameError").nnerHTML=

    name==""?"Please enter your name":"";


   
    document.getElementById("emailError").innerHTML=

    email==""?"Please enter your email":"";


    document.getElementById("phoneError").innerHTML=
    phone==""?"Please enter your phonenumber":"";


    if(name="" && email="" &&phone="") {

        alert("Your message has been sent successfully");

    }
}