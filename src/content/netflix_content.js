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

      var show = document.getElementsByClassName(elements.showInfo.className)[0];
      var progress = document.getElementsByClassName(elements.progress.className);

      if (show) {
        console.log(show);
      }
    } catch (err) {
      console.log("sem netflix ainda");
    }
  }
  window.setInterval(executeWhenLoaded, 20000);
})();
