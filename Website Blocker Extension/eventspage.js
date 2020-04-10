
function abhay() {
    console.log("this is working as expected");
}
siteList = [];
chrome.storage.sync.get(['key'], function (result) {
    siteList = result.urlList;
});
chrome.webRequest.onBeforeRequest.addListener(function () {
        console.log("abhay chgaran");
        return { cancel: true };
    },
    {
        urls: ["*://*.youtube.com/*", "*://*.facebook.com/*"]
    },
    ["blocking"]
);