function getUsernames() {
    var usernameElements = document.getElementsByClassName('username');
    let usernames = [];

    for(let i = 0; i < usernameElements.length; i++) {
        let username = usernameElements[i].getElementsByTagName('b')[0].textContent;

        if(usernames.indexOf(username) == -1 && username.length > 0) {
            usernames.push(username);
        }
    }

    return usernames;
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => { sendResponse(getUsernames()) })