// Function to toggle the visibility of the navigation menu on mobile screens
function toggleNav() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
  }
  
// Function to validate the form inputs 
function validateForm() {  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
     const errorMessage = document.getElementById("errorMessage");

    if (!name || !email || !message) {
      errorMessage.textContent = "All fields are required!";
      return false;
    }
    if (!validateEmail(email)) {
      errorMessage.textContent = "Please enter a valid email address!";
      return false;
    }
    errorMessage.textContent = "";
    return true;
  }
  
// Helper function to validate the email format
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  