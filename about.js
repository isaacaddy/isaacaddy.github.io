// Get the form element
const form = document.querySelector('form');

// Add an event listener for the submit event
form.addEventListener('submit', function(event) {
  // Prevent the form from submitting and reloading the page
  event.preventDefault();
  
  // Get the input values
  const name = form.querySelector('#name').value;
  const email = form.querySelector('#email').value;
  const message = form.querySelector('#message').value;
  
  // Validate the input values
  if (!name || !email || !message) {
    alert('Please fill in all the fields!');
    return;
  }
  
  // Send the form data to the server
  const formData = new FormData(form);
  fetch('/submit-form', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      alert('Form submitted successfully!');
      form.reset();
    } else {
      alert('Form submission failed!');
    }
  })
  .catch(error => {
    alert('An error occurred while submitting the form!');
  });
});