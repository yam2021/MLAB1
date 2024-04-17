const form = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginError = document.getElementById('loginError');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 
  
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (username === 'yaminib@student.tce.edu' && password === '21-06-2005') {
    window.location.href = 'student.html';
  } else {
    loginError.textContent = 'Invalid username or password';
  }
});
