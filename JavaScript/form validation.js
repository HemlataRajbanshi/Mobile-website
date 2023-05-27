// creating variables
function form(){
    var phoneNo = document.getElementById("phnno").value;
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var message = document.getElementById("Message").value;
       
// checking conditions
    if(phoneNo=="" || email=="" || name=="" || address=="" || message=="") {
        alert("Fill the form properly")
    }
    else if(phoneNo.length<10) {
        alert("Please enter valid phone number")
    }
    else{
        alert("Thank you")
    }


}
