//Sign-up handler
const signUpFormHandler = async (event) => {
  event.preventDefault();
  const newUsername = document.querySelector('#username').value.trim();
  const newPassword = document.querySelector('#password').value.trim();
  const newEmail = document.querySelector('#email').value.trim();
  // If else statement verifies that username is unique, password is populated, and post new user to db
  if (!newUsername && !newEmail && !newPassword) {
    alert('Please complete the sign-up form');
  } else if (!newUsername) {
    alert('Username can not be blank.');
  } else if (!newEmail) {
    alert('Email can not be blank.');
  } else if (!newPassword) {
    alert('Password can not be blank.');
  } else if (newUsername && newEmail && newPassword) {

    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({newUsername, newEmail, newPassword}),
      headers: { 'Content-Type': 'application/json'},
    });

    if (response.ok) {
      alert('New user successfuly created! Welcome to Yeez-N-Jays!');
      document.location.replace('/');
    } else {
      alert('Sign-up failed');
    }
  }
};

document.getElementById('signup-form').addEventListener('submit', signUpFormHandler);
