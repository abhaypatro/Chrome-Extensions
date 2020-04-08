console.log("connected");
$(function () {
    chrome.storage.sync.get('limit', function (budget) {
        $("#limit").val(budget.limit);
    });
    $("#resettotal").click(function () {
        chrome.storage.sync.set({ 'total': 0 }, function () {
            close();
        });
    });
    $("#savelimit").click(function () {
        let lim = parseInt($("#limit").val());
        chrome.storage.sync.set({ "limit": lim }, function () {
            close();
        });
    });

});