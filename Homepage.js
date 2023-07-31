// Function to adjust font size
function changeFontSize(sizeDifference) {
    const inputs = document.querySelectorAll("input, textarea");
    inputs.forEach(input => {
        const currentSize = parseInt(window.getComputedStyle(input).fontSize);
        const newSize = currentSize + sizeDifference;
        input.style.fontSize = newSize + "px";
    });
}

// Increase font size
document.querySelector(".adjust-font-size.increase").addEventListener("click", function () {
    changeFontSize(2); // Change the font size by 2 pixels (You can adjust the value as needed)
});

// Decrease font size
document.querySelector(".adjust-font-size.decrease").addEventListener("click", function () {
    changeFontSize(-2); // Change the font size by -2 pixels (You can adjust the value as needed)
});

// Contact form submission handling
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Here, you can add code to handle the form submission, like sending the data to a server or displaying a success message.

    // Clear the form after submission (optional)
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    // Display a success message (optional)
    alert("Thank you for contacting us! We will get back to you soon.");
});

// ... Your previous JavaScript code ...

// Function to navigate to the contact page
function goToContactPage() {
    window.location.href = "contact.html";
  }
  