
let displayTime = document.getElementById("displayTime") ; 
let StartButton = document.getElementById("button-start") ;
let StopButton = document.getElementById("button-stop") ;
let ResetButton = document.getElementById("button-reset") ;

let [seconds,minutes] = [0 ,25];
let timer = null ;

StartButton.addEventListener("click",watchStart) ;
StopButton.addEventListener("click",watchStop) ;
ResetButton.addEventListener("click",watchReset) ;
window.addEventListener("DOMContentLoaded",getLocal)

function getLocal(){
    seconds = JSON.parse(localStorage.getItem("secondsPomo"));
    minutes = JSON.parse(localStorage.getItem("minutesPomo"));
    putDisplay();
}


function  counter(){
if(seconds == 0 ){
    minutes-- ;
    seconds = 59 ;
}else{
    seconds --
}

putDisplay();
setLocal()




}

function watchStart(){
if(timer != null){
    clearInterval(timer);
}
timer = setInterval(counter,1000);
}

function watchStop(){
    clearInterval(timer);
}

function watchReset(){
    [seconds,minutes] = [0 ,25] ;
    clearInterval(timer);
    displayTime.innerHTML = "25" + ":" + "00";
    setLocal()


}


function putDisplay(){

let s =seconds < 10 ? "0"+seconds : seconds;
let m=minutes < 10 ? "0"+minutes : minutes;
displayTime.innerHTML = m + ":" + s 
}

function setLocal(){
    localStorage.setItem("secondsPomo",JSON.stringify(seconds)) ;
    localStorage.setItem("minutesPomo",JSON.stringify(minutes)) ;
}

