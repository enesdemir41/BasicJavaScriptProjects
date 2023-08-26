// setinterval metodu ile her saniyede saniye değerim artacak ve saniye degerim 60 olursa minutes artacak minutes 60 olursa hours 1 artacak
// htmldeki displayTime a innerhtml ile bu degerler yazdırılacak 
//stop ve reverse kısımları olacak 
//local storage ile sayfa kapansa bile kullanıcı terkar girdiginde kaldıgı yerden devam edecek 

let [seconds,minutes,hours] = [0,0,0] ; 
let timer = null ; 





let displayTime = document.getElementById("displayTime") ;

let buttonStart = document.getElementById("button-start") ;
let buttonStop = document.getElementById("button-stop") ;
let buttonReset = document.getElementById("button-reset") ;



buttonStart.addEventListener("click",watchStart) ; 
buttonStop.addEventListener("click",watchStop) ; 
buttonReset.addEventListener("click",watchReset) ; 
document.addEventListener("DOMContentLoaded",GetFromLocal)


function GetFromLocal(){
  seconds = JSON.parse(localStorage.getItem("LocalSeconds"));
  minutes = JSON.parse(localStorage.getItem("LocalMinutes"));
  hours = JSON.parse(localStorage.getItem("LocalHours"));

  putDisplay();

}


function counter(){
    seconds++;
    if(seconds == 60 ){
        minutes++;
        seconds = 0 ; 
        
        if(minutes == 60 ){
            hours++
            hours = 0 ; 

        }
    }

    sendlocal();
    putDisplay();


}




function watchStart(){

    if(timer != null){
        clearInterval(timer) ; 
    }

    timer = setInterval(counter,1000) ;
}


function watchStop(){
    clearInterval(timer) ; 
}



function watchReset(){
    clearInterval(timer) ; 
    [seconds,minutes,hours] = [0,0,0] ; 
    displayTime.innerHTML = "00:00:00" ; 

    sendlocal();
}


function FormatDisplay(time){
return time < 10 ? "0" + time : time 

}


function sendlocal(){
    localStorage.setItem("LocalSeconds",JSON.stringify(seconds));
    localStorage.setItem("LocalMinutes",JSON.stringify(minutes));
    localStorage.setItem("LocalHours",JSON.stringify(hours));
}


function putDisplay(){

    let FormatedSeconds = FormatDisplay(seconds) ; 
    let formattedMinutes = FormatDisplay(minutes) ; 
    let formattedHours = FormatDisplay(hours) ; 

    displayTime.innerHTML = formattedHours + ":" + formattedMinutes + ":" + FormatedSeconds ; 
}