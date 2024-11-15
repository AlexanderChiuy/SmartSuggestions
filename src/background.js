chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));


function getDOM() {
    return Array.from(
        document.getElementsByTagName('div'),
        el => el.innerHTML
    );
}

chrome.tabs.onActivated.addListener(async info => {

    let domRes = await chrome.scripting.executeScript({
      target: {tabId: info.tabId},
      func: getDOM,
    }).catch(console.error);
    if (!domRes) return;
    
    chrome.storage.sync.set({'title': domRes.title}, function() {
        console.log('Title saved');
    });
    console.log("hello");
    console.log(domRes);
  });


