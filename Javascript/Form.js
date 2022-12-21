let form =document.querySelector("form");
let firstname = document.getElementById("firstName");
let lastname = document.getElementById("LastName");
let email= document.getElementById("Email");
let password= document.getElementById("password");


form.addEventListener("submit", function (e) {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const firstNameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (firstNameValue === "") {
        setErrorFor(firstname, "First Name cannot be Empty")
    } else {
        setSuccessFor(firstname);
    }
    if (lastnameValue === "") {
        setErrorFor(lastname,"last name cannot be Empty")
    } else {
        setSuccessFor(lastname)
    } 
    if (emailValue === "") {
        setErrorFor(email, "Email cannot be Empty")
    } else {
        setSuccessFor(email)
    } 
    if (passwordValue === "") {
        setErrorFor (password,"password cannot be Empty")
    } else {
        setSuccessFor(password)
    }

}

function setErrorFor(input , message) {
    const formControl =  input.parentElement
    const small = formControl.querySelector(`small`)
    formControl.className =  'form-control Erorr';
    small.innerText = message;

}
function setSuccessFor(input) {
	const formControl = input.parentElement
	formControl.className = 'form-control succes';
}
