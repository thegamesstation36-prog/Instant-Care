console.log("Instant Care loaded successfully");


// Simple button interaction

const appointmentButtons =
    document.querySelectorAll(".primary-btn");


appointmentButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        console.log("Appointment button clicked");

    });

});