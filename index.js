/* globals clearPlayerData initPlayers */

const userNameInput = document.getElementById('user-input');
const testingInput = document.getElementById('testing');

userNameInput.addEventListener('submit', event => {
    event.preventDefault();
    let userName = event.target.user.value;
    window.localStorage.setItem('userName', JSON.stringify(userName));
    initPlayers();
});

testingInput.addEventListener('submit', event => {
    event.preventDefault();
    // console.log(event.target.user.value);
    clearPlayerData();
});
