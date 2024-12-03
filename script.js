// JavaScript for toggling password visibility
const togglePassword = document.querySelector('.toggle-password');
const passwordInput = document.querySelector('#password');
const toggleIcon = togglePassword.querySelector('i');

togglePassword.addEventListener('click', () => {
    // Toggle the type attribute
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';

    // Toggle the icon
    toggleIcon.classList.toggle('fa-eye');
    toggleIcon.classList.toggle('fa-eye-slash');
});