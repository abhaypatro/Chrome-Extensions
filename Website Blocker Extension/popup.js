document.getElementById("set").addEventListener("click", function () {

    newList = [];
    fullList = ["*://*.youtube.com/*", "*://*.facebook.com/*", "*://*.instagram.com/*", "*://*.snapchat.com/*", "*://*.spotify.com/*"];
    let i;
    if(document.getElementById("1").checked==true)
    console.log("abhay");
    for (i = 1; i <= 5; i++) {
        if (document.getElementById(i.toString()).checked)
            newList.push(fullList[i-1]);
    }
    chrome.storage.sync.set({urlList: newList}, function() {
        console.log(newList);
      });
});