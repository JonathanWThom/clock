$(document).ready(function(){
  setInterval(function(){
    var hours = new Date().getHours();
    if (hours > 12) {
      hours -= 12
    }

    var minutes = new Date().getMinutes();
    if (minutes < 10) {
      minutes = "0" + minutes
    }

    var seconds = new Date().getSeconds();
    if (seconds < 10) {
      seconds = "0" + seconds
    }

    $('#hours').text(hours);
    $('#minutes').text(minutes);
    $('#seconds').text(seconds);
  }, 1000);
});
