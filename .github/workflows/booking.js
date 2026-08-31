const bookingForm = document.getElementById("bookingForm");

const checkin = document.getElementById("checkin");
const checkout = document.getElementById("checkout");


// Minimum check-in date = today
const today = new Date().toISOString().split("T")[0];

checkin.min = today;
checkout.min = today;


// Check-out must be after check-in
checkin.addEventListener("change", function () {

    checkout.min = checkin.value;

    if (checkout.value && checkout.value <= checkin.value) {
        checkout.value = "";
    }

});


// Booking submit
bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    if (checkout.value <= checkin.value) {

        alert("Please select a valid check-out date.");

        return;
    }

    document.getElementById("successPopup").style.display = "flex";

});


// Close popup
function closePopup() {

    window.location.href = "index.html";

}