var tabList = [];
chrome.tabs.onCreated.addListener(function (tab) {

    // console.log(tab);
    // console.log(tab.title);
    // console.log(tab.url);
    // console.log("new tab opned");
    tabList.push({
        "parentId":tab.openerTabId,
        "id": tab.id
    });
//    console.log(tabList);
});

chrome.tabs.onRemoved.addListener(function(tabId, removed) {
    console.log("removed tab id:" + tabId);
    tabList = tabList.filter(item => item.id !== tabId);
    for(var tab of tabList) {
        // console.log(tab);
        // console.log(tab.parentId +" "+ tabId);
        if(tab.parentId === tabId) {
            chrome.tabs.remove(tab.id);
            tabList = tabList.filter(item => item !== tab);
        }
    }
   })
