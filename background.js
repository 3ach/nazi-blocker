function onWebNav(details) {
    if (details.frameId === 0 && details.url.indexOf('twitter.com' != -1)) {
        console.log("Here");
        chrome.pageAction.show(details.tabId);

        chrome.tabs.sendMessage(details.tabId, "", {}, (result) => console.log(JSON.stringify(result)));
    }
}

function updateUsernameStore(usernames) {
    
}

chrome.webNavigation.onCompleted.addListener(onWebNav);