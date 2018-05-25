const userNameInput = document.getElementById('user-input');

userNameInput.addEventListener('submit', event => {
    event.preventDefault();
    console.log(event.target.user.value);
    let userName = event.target.user.value;
    window.localStorage.setItem('userName', JSON.stringify(userName));
});