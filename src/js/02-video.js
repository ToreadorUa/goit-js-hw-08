import Player from '@vimeo/player';
var _ = require('lodash');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

try {const currentTime = localStorage.getItem("videoplayer-current-time");
const startTime = JSON.parse(currentTime);
    player.setCurrentTime(startTime)
}
catch(error){}

player.on(
  'timeupdate',
  _.throttle(function (currentTime) {
    localStorage.setItem('videoplayer-current-time', currentTime.seconds);
  }, 1000)
);

    

   