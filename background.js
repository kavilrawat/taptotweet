chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.sendMessage(tab.id, { message: 'getSelectedText',fromOnClick:true});
});

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'tweetSelectedText',
    title: 'Tweet Selected Text',
    contexts: ['selection']
  });

  chrome.contextMenus.create({
    id: 'tweetThisPage',
    title: 'Tweet This Site',
    contexts: ['page']
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'tweetSelectedText') {
    chrome.tabs.sendMessage(tab.id, { message: 'getSelectedText' });
  } else if (info.menuItemId === 'tweetThisPage') {
    chrome.tabs.sendMessage(tab.id, { message: 'tweetThisPage' });
  }
});

// Open a link when the extension is uninstalled. this is deprecated api. wont work with manifest v3.
// chrome.runtime.onUninstalled.addListener(() => {
//   const uninstalledUrl = 'https://tally.so/r/w42kDY';
//   chrome.tabs.create({ url: uninstalledUrl });
// });
chrome.runtime.setUninstallURL('https://tally.so/r/w42kDY')