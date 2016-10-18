(function(){
  'use strict';

  function executeWhenLoaded() {
    try {
      var elements = {
        showInfo: {
          className: 'player-status'
        },

        progress: {
          className: 'player-scrubber-progress-completed',
          styleElement: 'width'
        }

      };

      var showInfoElement = document.getElementsByClassName(elements.showInfo.className)[0];
      var progressElement = document.getElementsByClassName(elements.progress.className)[0];


      // if the player is loaded
      if (showInfoElement && progressElement) {
        // if it is a show
        if (showInfoElement.childElementCount >= 3) {
          var show = {
            name: showInfoElement.children[0].innerText,
            temp: showInfoElement.children[1].innerText,
            ep: showInfoElement.children[2].innerText
          };

          var progress = parseInt(progressElement.style.getPropertyValue(elements.progress.styleElement));
          
          // if more than 50% watched we send to background the info
          if (progress > 50) {
            console.log(show);
          }
        }
      }
    } catch (err) {
      console.log("sem netflix ainda");
    }
  }
  window.setInterval(executeWhenLoaded, 20000);
})();
