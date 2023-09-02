
//DOMS
let btn = document.querySelector(".btn") ;
let input = document.getElementById("input") ;
let passwordcontainer = document.querySelector(".password-container") ;
let laspasscontainer = document.querySelector(".laspasscontainer") ;


//EVENTS
btn.addEventListener("click",createPass) ; 
passwordcontainer.addEventListener("click",copyPassword) ;
document.addEventListener("DOMContentLoaded",lastpassword) ;
//VARS
const chars ="0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";



function createPass(){
    let password = "" ; 
    passwordlenght = 14 ;
    for(let i = 0 ;i < passwordlenght ; i++ ){
       let index =  Math.floor(Math.random() * chars.length); 
       password += chars.charAt(index) ; 
    }
    putInput(password) ;
    localStorage.setItem("pass",JSON.stringify(password));
}


function putInput(password){
    input.value = password ; 
}

function copyPassword(e){
    if(input.value == ""){
        alert("Please Generate Password")
    }else{
        if(e.target.className== "far fa-copy fa-2x"){
            let copyText = document.getElementById("input");
            copyText.select();
            navigator.clipboard.writeText(copyText.value) ;
            alert("Copied the password");

            lastpassword()
            
            
        }
    }


}

function lastpassword(){
    let ul = document.createElement("ul");
    ul.className = "lasttpasswords" ;
    let li = document.createElement("li");
    li.className = "password" ;
    li.textContent = JSON.parse(localStorage.getItem("pass"));

    ul.appendChild(li);
    laspasscontainer.appendChild(ul);
    if(li.textContent == "" || null){
        laspasscontainer.setAttribute("style","display : none")

    }else{
        laspasscontainer.setAttribute("style","display : block")
    }
    
}




