

let isRun = true;

function StartPomodoroSession(){
  isRun=true;

  document.getElementById("Pointer").innerHTML="Session"

  time = parseInt(document.getElementById("SettedMinSession").innerHTML) * 60;
  timerShow = document.getElementById("Timer");


  if(timerShow.innerHTML!=="00:00"){
    return;

  }
  console.log("Start")



  let timer = setInterval(function (){

    if(isRun===false){

      clearInterval(timer)
      timerShow.innerHTML="00:00"
      return;
    }


    isRun = true;
    seconds = time%60;
    minutes = time/60%60;


    if(time<=0){
      clearInterval(timer)
      let ring = new Audio('sounds/break.mp3');
      ring.play();
      timerShow.innerHTML='00:00'
      StartPomodoroBreak();

    }

    else{
      let strMin = Math.trunc(minutes);
      let strSec = Math.trunc(seconds);

      if(strMin<10)
        strMin = '0' + strMin;
      if(strSec<10)
        strSec = '0' + strSec;

      let strTimer = `${strMin}:${strSec}`;
      timerShow.innerHTML = strTimer;
    }
    --time;
  },1000)

}

function StartPomodoroBreak(){


  document.getElementById("Pointer").innerHTML="Break"

  time = parseInt(document.getElementById("SettedMinBreak").innerHTML) * 60;
  timerShow = document.getElementById("Timer");


  let timer = setInterval(function (){

    if(isRun===false){

      clearInterval(timer)
      timerShow.innerHTML="00:00"
      return;
    }
    seconds = time%60;
    minutes = time/60%60;


    if(time<=0){
      clearInterval(timer)
      let ring = new Audio('sounds/break.mp3');
      ring.play();
      timerShow.innerHTML='00:00'
      StartPomodoroSession();
    }

    else{
      let strMin = Math.trunc(minutes);
      let strSec = Math.trunc(seconds);

      if(strMin<10)
        strMin = '0' + strMin;
      if(strSec<10)
        strSec = '0' + strSec;

      let strTimer = `${strMin}:${strSec}`;
      timerShow.innerHTML = strTimer;

    }
    --time;
  },1000)
}

function Stop(){
 document.getElementById("Pointer").innerHTML="Session"
 isRun = false;

}
function test() {
 console.log('alals')
}
