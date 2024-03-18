const signupFormHandler = async (event) => {
  event.preventDefault();
  const newUsername = document.querySelector('#username').value.trim();
  const newPassword = document.querySelector('#password').value.trim();
  const newEmail = document.querySelector('#email').value.trim();
  if (newUsername && newEmail && newPassword) {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ newUsername, newEmail, newPassword }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log('test');
    console.log(response.body);
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('signup failed');
    }
  }
};

document
  .querySelector('#signup-form')
  .addEventListener('submit', signupFormHandler);
