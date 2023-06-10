let openTab;

setTimeout(function () {
    openTab = window.open("https://google.com", "",
        "width=200,height=200,left=700,top=200");
}, 2000);

setTimeout(function () {
    openTab.resizeTo(500, 500);
}, 2000);

setTimeout(function () {
    openTab.moveTo(500, 300);
});

setTimeout(function () {
    openTab.close();
});