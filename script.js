document.getElementById("contact-form").addEventListener("submit", function(e) {

    e.preventDefault();

    alert("Thank you! Your service request has been received.");

    this.reset();

});