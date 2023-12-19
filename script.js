document.addEventListener("DOMContentLoaded", function () {
    // Navigation Bar Interactivity
    var nav = document.getElementById("mainNav");
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        nav.style.backgroundColor = "#d4498b";
      } else {
        nav.style.backgroundColor = "#ff66b2";
      }
    });
  
    // Smooth Scrolling for Navigation Links
    var navLinks = document.querySelectorAll('nav a');
  
    navLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
  
        var targetId = this.getAttribute('href').substring(1);
        var targetElement = document.getElementById(targetId);
  
        window.scrollTo({
          top: targetElement.offsetTop - nav.offsetHeight,
          behavior: 'smooth'
        });
      });
    });
  
    // Ticket Booking Form Interactivity
    var ticketForm = document.getElementById("ticketForm");
  
    if (ticketForm) {
      ticketForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        var nameInput = document.getElementById("name");
        var emailInput = document.getElementById("email");
        var ticketsInput = document.getElementById("tickets");
  
        if (validateForm(nameInput.value, emailInput.value, ticketsInput.value)) {
          // Perform further actions, e.g., send form data to a server
          alert("Booking successful!\nThank you for purchasing tickets!");
          ticketForm.reset();
        } else {
          alert("Please fill in all the required fields.");
        }
      });
    }
  
    function validateForm(name, email, tickets) {
      // Basic validation example, you can add more complex validation as needed
      return name.trim() !== "" && email.trim() !== "" && tickets > 0;
    }
  });
  