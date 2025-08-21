const formElement = document.getElementById("js-email-form");
const inputElement = document.getElementById("js-email");
const paragraphElement = document.getElementById("js-error-message");


formElement.addEventListener('submit', function(event) {
    event.preventDefault(); // prevents refresh
    email = inputElement.value.trim(); // removes whitespaces

    if(email === "") {
        inputElement.style.border = "0.1rem solid red";
        paragraphElement.textContent = "Email is required";
        paragraphElement.style.fontSize = "0.7rem";
        paragraphElement.style.color = "red";
        paragraphElement.style.display = "block";
    }
    else{
        inputElement.style.border = "0.1rem solid green";
        paragraphElement.style.display = "none";
        alert("Email submitted");
    }
});


