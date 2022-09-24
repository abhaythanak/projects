const wm = document.getElementById("w-min");
const ws = document.getElementById("w-second");
const bm = document.getElementById("b-min");
const bs = document.getElementById("b-second");

function time(){
    if (ws.innerText !=0){
        ws.innerText--;
    }else if(wm.innerText !=0 && ws.innerText == 0){
        ws.innerText = 59;
        wm.innerText--;
    }
    //break
    if(wm.innerText == 0 && ws.innerText == 0){
        if(bs.innerText != 0){
                bs.innerText--;
        }else if (bm.innerText !=0 && bs.innerText == 0){
            bs.innerText = 59;
            bm.innerText--;
    }
  }
  //increse
  if(wm.innerText == 0 && ws.innerText ==0 && bm.innerText == 0 && bs.innerText == 0){
    wm.innerText = 25;
    ws.innerText = "00";

    bm.innerText = 5;
    bs.innerText = "00";
    document.getElementById("time").innerText++;
  }
}
//stop
function stopInterval(){
    clearInterval(startTime);
}

const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

let startTime;

start.addEventListener('click', function(){
   // startTime = setInterval(time, 1000)
   if(startTime === undefined){
       startTime = setInterval(time, 1000)
   }else {
       alert("time is running");
   }
})
//reset
reset.addEventListener('click', function(){
    wm.innerText = 25;
    ws.innerText = "00";
    bm.innerText = 5;
    bs.innerText = "00";
    document.getElementById('time').innerText = 0;
    stopInterval()
    startTime = undefined;

})
//stop
stop.addEventListener('click', function(){
    stopInterval()
    startTime = undefined;

})