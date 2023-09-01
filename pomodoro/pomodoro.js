let [seconds,minutes] = [0 ,24];
let displayTime = document.getElementById("displayTime") ;
let buttonStart = document.getElementById("button-start") ;
let buttonStop = document.getElementById("button-stop") ;
let buttonReset = document.getElementById("button-reset") ;
let timer = null ;



buttonStart.addEventListener("click",startPomo) ;
buttonStop.addEventListener("click",stopPomo) ;
buttonReset.addEventListener("click",resetPomo) ;
window.addEventListener("DOMContentLoaded",deneme)


function deneme(){

    minutes = JSON.parse(localStorage.getItem("pomoMinutes"));
    seconds = JSON.parse(localStorage.getItem("pomoSeconds"));
    if (minutes === null || seconds === null || (minutes === 0 && seconds === 0)) {
        resetTime(); 
    }
    putDisplay();

 

    putDisplay();
    
}


function counter(){
    if(seconds == 0){
        minutes--
        seconds = 59
    }else{
        seconds--
    }

    sendlocal();
    putDisplay()


 
}

function startPomo(){
    

    if(timer =! null){
        clearInterval(timer) ;
    }
    
    timer =setInterval(counter,1000);
    
    

}

function stopPomo(){

    clearInterval(timer) ;

}

function resetPomo(){
    clearInterval(timer) ; 
    [seconds,minutes] = [0 ,25]
    displayTime.innerHTML = "25:"+"00" ;
    sendlocal() ;


}


function FormatDisplay(time){
   return time < 10 ? "0" + time : time
}


function sendlocal(){
    localStorage.setItem("pomoSeconds",JSON.stringify(seconds));
    localStorage.setItem("pomoMinutes",JSON.stringify(minutes));
}


function putDisplay(){

    let FormattedSeconds = FormatDisplay(seconds);
    let FormattedMinutes = FormatDisplay(minutes);
    displayTime.innerHTML = FormattedMinutes + ":" + FormattedSeconds ;


}

function resetTime(){
    [seconds,minutes] = [59 ,24];
    sendlocal();
}