chrome.webRequest.onBeforeRequest.addListener(
    function() {
        console.log("abhay chgaran");
        return {cancel: true};
    },
    {
        urls: ["*://youtube.com/*"]
    },
    ["blocking"]
);