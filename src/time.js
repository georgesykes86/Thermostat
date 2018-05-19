function Time() {
}

Time.prototype.getTime = function(){
  var date = new Date;
  return `${date.getHours()}:${date.getMinutes()}`
}

Time.prototype.isDay = function(){
  var date = new Date();
  var hour = date.getHours();
  return (hour > 8 && hour < 20) ? true : false
}
