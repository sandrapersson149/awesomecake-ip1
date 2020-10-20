// Till hjälp har jag kollar på Net ninjas video om form validering
// JavaScript Tutorial For Beginners #44 - VERY Simple Form Validation

// Jag har också tagit inspitarin från
// https://webdesign.tutsplus.com/tutorials/bring-your-forms-up-to-date-with-css3-and-html5-validation--webdesign-4738


let myForm = document.forms.myForm;
let message = document.getElementById("error");

myForm.onsubmit = function () {

    if (myForm.name.value == "") {
        error.innerHTML = "Vänligen skriv in ditt namn";
        return false;
    }
    if (myForm.number.value == "") {
        error.innerHTML = "Glöm inte skriva in ditt telefonummer"
        return false;
    }
    if (myForm.email.value == "") {
        error.innerHTML = "Vänligen skriv in din mejl adress"
        return false;
    }
    if (myForm.message.value == "") {
        error.innerHTML = "Du måste skriv in ett meddelande"
        return false;
    }
    else {
        error.innerHTML = "";
        return true;
    }
}