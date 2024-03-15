//Sign-up handler
const signUpFormHandler = async (event) => {
  event.preventDefault();
  const newUsername = document.querySelector('#username').value.trim();
  const newPassword = document.querySelector('#password').value.trim();
  // Function to check if username already exists
  function checkUsernameAvailability(newUsername) {
    return database.query('SELECT COUNT (*) FROM users WHERE username = ?', [newUsername]) > 0;
  }
  // If else statement verifies that username is unique, password is populated, and post new user to db
  if (checkUsernameAvailability) {
    alert('Username not available. Please select another username.');
  } else if (newPassword === null) {
    alert('Password cannot be empty');
  } else if (newUsername && newPassword) {
    const response = await fetch('../api/users/', {
      method: 'POST',
      body: JSON.stringify({newUsername, newPassword}),
      headers: { 'Content-Type': 'application/json'},
    });

    console.log('New user successfuly created');

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
};

document.querySelector('#signup-form').addEventListener('submit', signUpFormHandler);
