$(document).ready(function() {
    // Change button text using jQuery
    $("#changeButtonText").click(function() {
        $("#submitButton").text("Register Now");
    });

    // Set background image using jQuery CSS property
    $("body").css("background-image", "url('background-image.jpg')");

    // Access HTML form data using jQuery
    $("#registrationForm").on("submit", function() {
        var formData = {
            username: $("#username").val(),
            email: $("#email").val(),
            phone: $("#phone").val(),
            password: $("#password").val(),
            confirmPassword: $("#confirmPassword").val()
        };
        console.log(formData); // Print form data to console
    });

    // Change image source after clicking the button
    $("#changeImageButton").click(function() {
        $("#dynamicImage").attr("src", "another-image.jpg");
    });
});

