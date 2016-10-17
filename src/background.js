(function() {
  'use strict';

  chrome.runtime.onInstalled.addListener(replaceRules);
  
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
