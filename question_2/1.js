var time = "10:20:00PM";

var seconds = parseInt(time[6] + time[7]);
var minutes = parseInt(time[3] + time[4]);
var hour = parseInt(time[0] + time[1]);

var stamp = time[8];

//THIS IF STATEMENT IS FOR HANDLING THE IF STATEMENTS
if (stamp == "P") {
    var new_second = seconds + 45;
    if (new_second > 59) {
      minutes = minutes + 1;
      new_second = new_second - 60;
      if (minutes > 59) {
        hour = hour + 1;
        minutes = minutes - 60;
      }
    }
    minutes = minutes + 45;
    if (minutes > 59) {
      hour = hour + 1;
      minutes = minutes - 60;
      if(hour>11){
        hour=hour-12;
      }
    }
    if (minutes >= 0 && minutes <= 9) {
      minutes = "0" + minutes;
    }
    if (new_second >= 0 && new_second <= 9) {
      new_second = "0" + new_second;
    }
    if (hour >= 0 && hour <= 9) {
        hour = "0" + hour;
      }
    let new_time = hour + ":" + minutes + ":" + new_second;
    console.log(new_time);

} 
//THIS ELSE STATEMENT IS FOR HANDLING THE AM PART
else {
  var new_second = seconds + 45;
  if (new_second > 59) {
    minutes = minutes + 1;
    new_second = new_second - 60;
    if (minutes > 59) {
      hour = hour + 1;
      minutes = minutes - 60;
    }
  }
  minutes = minutes + 45;
  if (minutes > 59) {
    hour = hour + 1;
    minutes = minutes - 60;
  }
  if(hour>11){
    hour=hour-12;
  }
  if (minutes >= 0 && minutes <= 9) {
    minutes = "0" + minutes;
  }
  if (new_second >= 0 && new_second <= 9) {
    new_second = "0" + new_second;
  }
  if (hour >= 0 && hour <= 9) {
    hour = "0" + hour;
  }
  let new_time = hour + ":" + minutes + ":" + new_second;
  console.log(new_time);
}
