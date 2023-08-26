let hour = document.getElementById("hour") ;
let minute = document.getElementById("minutes") ;
let second = document.getElementById("seconds") ;
let ampm = document.getElementById("ampm");



document.addEventListener("DOMContentLoaded",updateTime)

function getTime(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();


    hour.innerHTML = h ;
    minute.innerHTML = m ; 
    second.innerHTML = s ; 

    if(m < 10){
        minute.innerHTML = "0"+m ;
    }

    if(s < 10 ){
        second.innerHTML = "0"+s ;
    }

    if( h > 12){
        h = h -12
        hour.innerHTML ="0" + h ;
        ampm.innerHTML = "PM"

    }

}


function updateTime(){
    setInterval(getTime,1000);
}


