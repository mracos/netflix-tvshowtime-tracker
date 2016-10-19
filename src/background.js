(function() {
  'use strict';

  chrome.runtime.onInstalled.addListener(replaceRules);
  chrome.runtime.onMessage.addListener(function(req, sender, sendMessage) {
    // mark in tvshowtime
    console.log(req);
    console.log(sender);
    console.log(sendMessage);
    chrome.notifications.create(null, {
      type: "basic",
      title: "netflix tv",
      message: "Marcdo como watched",
      iconUrl: ''
    });

    sendMessage({status: 'done'});
  });

  function replaceRules() {
    chrome.declarativeContent.onPageChanged.removeRules(['netflixRule'], function(){
      var netflixRule = {
        id: 'netflixRule',
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {
              hostContains: '.netflix.',
              pathContains: 'watch'
            }
          })
        ],
        actions: [
          new chrome.declarativeContent.ShowPageAction()
        ]
      };

      chrome.declarativeContent.onPageChanged.addRules([netflixRule]);
    });
  }

})();
