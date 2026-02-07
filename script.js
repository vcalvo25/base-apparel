const emailInput = document.getElementById("email-address"); //declare var to store user input

//function to validate email address
function validateEmail(email){
    const emailPattern =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email); //validates that email address contains one of the symbols
}

//run a function for the signup form when form has been submitted
    document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); //prevents form from being submitted
    const errorMessage = document.getElementById('error-message'); //declare var for error message to be displayed

    //check the user's input to display success or failure alert
    if (validateEmail(emailInput.value)) {
        errorMessage.textContext = ""; //clears any previous error message
        alert('Thank you for subscribing!');
    } else {
        errorMessage.textContent = "Please enter a valid email address"
    }
});

