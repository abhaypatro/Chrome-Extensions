$(function () {

    chrome.storage.sync.get(['total', 'limit'], function (budget) {
        if (budget.total)
            $('#total').text(budget.total);
        if (budget.limit)
            $('#limit').text(budget.limit);
    });
    $('#spentamount').click(function () {
        chrome.storage.sync.get(['total', 'limit'], function (budget) {
            let newTotal = 0;
            if (budget.total)
                newTotal += parseInt(budget.total);

            let amount = $('#amount').val();
            if (amount)
                newTotal += parseInt(amount);

            chrome.storage.sync.set({ 'total': newTotal })

            if ( newTotal >= budget.limit) 
            {
                let notif = 
                {
                    type: "basic",
                    iconUrl: "48.png",
                    title: 'Limit Reached !',
                    message: 'Looks like you have reached your limit !'

                }
                chrome.notifications.create('noti', notif);
                chrome.notifications.clear('noti');
            }
            $('#total').text(newTotal);
            $('#amount').val('');
        });
    });
});