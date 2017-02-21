$(document).ready(function(){
  setInterval(function(){
    $('#hours').text(new Date().getHours());
    $('#minutes').text(new Date().getMinutes());
    $('#seconds').text(new Date().getSeconds());
  }, 1000);
});
