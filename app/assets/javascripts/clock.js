$(document).ready(function(){
  setInterval(function(){
    var hours = new Date().getHours();
    if (hours > 12) {
      hours -= 12
    }
    $('#hours').text(hours);
    $('#minutes').text(new Date().getMinutes());
    $('#seconds').text(new Date().getSeconds());
  }, 1000);
});
