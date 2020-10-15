/* cls-js-project.js */

window.addEventListener('load', function() 
{
  var problem3 = function() {
    // put any code here for problem3

}();

var password1 = document.getElementById("pwd1");
var password2 = document.getElementById("pwd2");
var phoneNumber = document.getElementById("phone");
var submitClick = document.getElementById("submitBtn");

//event Listeners
pwd1.addEventListener("change",validatePassword1);
pwd2.addEventListener("change",validatePassword2);
phone.addEventListener("change",validatePhoneNumber);
submitBtn.addEventListener("click",checkPhoneEmail);

//function which validates password1
function validatePassword1()
{ 
  event.preventDefault();

      if(password1.value.length < 8)
        {
          alert('Password should be more than 8 characters');
        } 
  
}
    
//function which validates repeat password
function validatePassword2()
{ 
  event.preventDefault();

  if(password2.value.length < 8)
  {
    alert('Repeat Password should be 8 or more characters');
  } 
//check if both the password and repeat password is same
  if(password1.value != password2.value)
  {
    alert('Password and repeat password do not match');
  } 
  
}
 //function which validates phone number
function validatePhoneNumber()
{
  event.preventDefault();
  if(phoneNumber.value.length < 10)
            {
              alert('Phone number should be only 10 digits');

            } 
            else
            {
                document.getElementById("phone").value = phoneNumber.value.toString().substr(0,3) + '-' +phoneNumber.value.toString().substr(3,3)+ '-' + phoneNumber.value.toString().substr(6);   
            }    

}

//function to check either phone or email-id is entered
function checkPhoneEmail()
{
  if(document.getElementById("phone").value =="" && document.getElementById("email").value== "")
  {
    alert( "Either phone number or email-id is required" );
  }
}



});
