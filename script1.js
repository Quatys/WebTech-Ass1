document.addEventListener('DOMContentLoaded', function() {
    const passwordField = document.getElementById('password');
    const showHideButton = document.querySelector('.showHidePw');

    showHideButton.addEventListener('click', function() {
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);

        // Toggle the eye icon
        if (type === 'password') {
            showHideButton.classList.remove('uil-eye-slash');
            showHideButton.classList.add('uil-eye');
        } else {
            showHideButton.classList.remove('uil-eye');
            showHideButton.classList.add('uil-eye-slash');
        }
    });
});