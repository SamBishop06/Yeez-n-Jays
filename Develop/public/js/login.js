//Login handler from week 14 activities
const loginFormHandler = async (event) => {
  event.preventDefault();
  const username = document
    .querySelector('#username-yeeznjays-login')
    .value.trim();
  const password = document
    .querySelector('#password-yeeznjays-login')
    .value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
};

document
  .querySelector('.yeeznjays-login-form')
  .addEventListener('submit', loginFormHandler);
