document.addEventListener('DOMContentLoaded', function() {
  var contactButton = document.getElementById('contactus');
  var registrationForm = document.querySelector('.container2');
  var cancelButton = document.getElementById('cancel');

  // Event listener for the "Contact Us" button
  contactButton.addEventListener('click', function() {
    // Hide the contact button
    contactButton.style.display = 'none';
    // Show the registration form
    registrationForm.style.display = 'block';
  });

  // Event listener for the "Cancel" button
  cancelButton.addEventListener('click', function() {
    // Hide the registration form
    registrationForm.style.display = 'none';
    // Show the contact button
    contactButton.style.display = 'block';
  });
});
