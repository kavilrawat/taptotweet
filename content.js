chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'getSelectedText') {
      const selectedText = window.getSelection().toString();
      const url = window.location.href;
  
      if (selectedText) {
        const tweetText = `${selectedText}\n\n(${url})`;
        const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
        window.open(tweetUrl, '_blank');
        return
      }
    }
    let fromOnClick = request.fromOnClick
    if (request.message === 'tweetThisPage' || fromOnClick) {
      const url = window.location.href;
      const tweetUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`;
      window.open(tweetUrl, '_blank');
    }
  });