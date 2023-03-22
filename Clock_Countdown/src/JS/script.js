// Main Function
let currentDate = new Date(new Date().getTime());
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();
let flag = 0
$(document).ready(function () {
  $("#click_btn").click(function () {
    if (flag == 0){
        $(".countdown").css("border", "19px solid blue")
        let interval = setInterval(function () {
        seconds -= 1;
        hours = minutes < 0 ? --hours : hours;
        minutes = seconds < 0 ? --minutes : minutes;
        seconds = seconds < 0 ? 59 : seconds;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        $(".countdown").html(hours+":"+minutes+":"+seconds);
        if (hours<0) clearInterval(interval);
        if (minutes<=0 && hours<=0) clearInterval(interval);
        if (seconds<=0 && minutes<=0 && hours<=0) clearInterval(interval);
        timer2 = hours + ":" + minutes + ":" + seconds;
      }, 1000);
    }
    flag = 1
  });
});
