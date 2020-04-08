let contextMenu={
    id:"spendmoney",
    title:"Spend Money",
    contexts:["selection"]
}
chrome.contextMenus.create(contextMenu);

chrome.contextMenus.onClicked.addListener(function (clickData){
    
    if(clickData.menuItemId=="spendmoney" && clickData.selectionText)
    {     
        if(Number.isInteger(parseInt(clickData.selectionText)))
        { 
            chrome.storage.sync.get(['total', 'limit'], function (budget) {
                let newTotal = 0;
                if (budget.total)
                    newTotal += parseInt(budget.total);
    
                    newTotal += parseInt(clickData.selectionText);
    
                chrome.storage.sync.set({ 'total': newTotal })
    
                if ( newTotal >= budget.limit) 
                {   chrome.notifications.clear('noti');
                    let notif = 
                    {
                        type: "basic",
                        iconUrl: "48.png",
                        title: 'Limit Reached !',
                        message: 'Looks like you have reached your limit !'
    
                    }
                    chrome.notifications.create('noti', notif);
                    
                }
                $('#total').text(newTotal);
        })
    }
    }
    
});
chrome.storage.onChanged.addListener(function(changes, storageName){
    chrome.browserAction.setBadgeText({"text": changes.total.newValue.toString()});
})