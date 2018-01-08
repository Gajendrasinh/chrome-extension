chrome.browserAction.onClicked.addListener(function(tab) {
    window.open(chrome.runtime.getURL('responsive.html?url='+tab.url));
});