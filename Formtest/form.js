

function checkPassword(form) {
    // 👇 get passwords from the field using their name attribute
    const password = form.password.value;
    const confirm_password = form.confirm_password.value;


    // 👇 check if both match using if-else condition
    if (password != confirm_password) {
      alert("Error! Password did not match.");
      return false;
      // console.log("FAILLL");
    } 
      alert("Password Match. Congratulations!");
      return true;
    

    
  }
// confirm_password.value;

const confirm_password = document.getElementById("confirm_password");
const password = document.getElementById("password");


const noMatch = document.getElementById("noMatch");
// password.value != confirm_password.value
if(password.value == confirm_password.value){
    noMatch.style.color = "red";
}
