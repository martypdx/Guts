const userName = document.getElementById('submit-name');
userName.addEventListener('submit', () => {
    window.localStorage.setItem('userName', JSON.stringify(userName));
    console.log('user name input');
});