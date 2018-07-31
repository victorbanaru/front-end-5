// Native JS approach
document.addEventListener("DOMContentLoaded", onHtmlLoaded);

function onHtmlLoaded() {
  
  var btnSubmit = document.getElementById('btn-submit');
  btnSubmit.addEventListener('click', onSubmit);
  
  function onSubmit() {
    var FirstName = document.getElementById('fname').value;
    var LastName = document.getElementById('lname').value;
    var TextField = document.getElementById('sbj').value;
    var Gender = document.querySelector('input[name=gender]:checked');
     if (FirstName  === "") {
       fname.style.border = "solid 1px red";
     } else {
       fname.style.border = "solid 1px #ccc";
     }
     if (LastName === "") {
       lname.style.border = "solid 1px red";
     } else {
       lname.style.border = "solid 1px #ccc";
     }
     if (TextField === "") {
       sbj.style.border = "solid 1px red";
     } else {
       sbj.style.border = "solid 1px #ccc";
     }
     if (Gender === null) {
       alert("Please select you gender!");
       return
     }
     if (FirstName !== "" && LastName !== "" && TextField !== "") {
       banner.innerHTML = '&#9989 Thank you for contacting us, ' + FirstName;
       document.getElementById('banner').style.display = "block";
       console.log(FirstName, LastName, Gender.value, TextField);
     }
  }
}