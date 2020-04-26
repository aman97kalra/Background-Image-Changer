console.log("Background Script Running");
chrome.browserAction.onClicked.addListener(function(){
    console.log("newtab opened");
    chrome.tabs.create({'url':"chrome://newtab"});
});