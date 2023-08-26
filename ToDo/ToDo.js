var todoAddForm = document.querySelector("#todoAddForm");
var Input = document.querySelector("#todoName");
var todoAddButton = document.querySelector("#todoAddButton");
var cardbody = document.querySelectorAll(".card-body")[0];
var cardbody2 = document.querySelectorAll(".card-body")[1];
var clearButton = document.querySelector("#clearButton");
var ToDoList = document.querySelector(".list-group")
var FilterInput = document.getElementById("todoSearch")
var ToDoS = [];


runEvents()

function runEvents(){
    todoAddForm.addEventListener("submit",AddToDo);
    cardbody2.addEventListener("click",RemoveToDo)
    cardbody2.addEventListener("click",RemoveAll)
    cardbody2.addEventListener("click",checked)
    cardbody2.addEventListener("dblclick",unchecked)
    FilterInput.addEventListener("keyup",FilterToDo)
    document.addEventListener("DOMContentLoaded",pageloaded)
    
   
    
}

function pageloaded(){ 
    //sayfa yüklendiğinde ToDos içindeki değerleri li ye aktar 
    checkToDoFromStorage();
    ToDoS.forEach(function(todo){
        AddToDoUI(todo);
    })
}

function AddToDo(e){ // submit olunca çalısacak kodlar

    
    const InputText = Input.value.trim(); // ınputtan değeri aldık
    if( InputText == "" || InputText == null){ // input değeri eğer boşşsa uyarı versin 
        alert("Lütfen To Do ismi giriniz")
    }
    else{
        e.preventDefault();

        AddToDoUI(InputText); //alınan değeri AddToDoUI a götüdük
        AddToDoLocal(InputText); // alınan değeri Locale eklemek için fonkisyona götürdük 
    }

}

function AddToDoLocal(ToDo){

    checkToDoFromStorage(); // diziyi kontrol ettirdik 
    ToDoS.push(ToDo); // diznin içine AddToDo dan gelen değeri ekledik 
    localStorage.setItem("todos",JSON.stringify(ToDoS)); // eklenmis deger locale de eklensin diye tekrar güncelledik 

}

function checkToDoFromStorage(){

    if(localStorage.getItem("todos") === null || localStorage.getItem("todos") === ""){ // eğer todos keyimin değeri boşsa ToDoS dizimi boşalt 
        ToDoS = []; 
    }else{
        
        ToDoS = JSON.parse(localStorage.getItem("todos"));   // Eğer Todos Keyim Doluysa dolu olan değerleri arrayımin içine yazdır 
    }

}


function AddToDoUI(ToDo){   
    var li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between"
    li.textContent = ToDo ;

    var a = document.createElement("a");
    a.href = "#"
    a.className = "delete-item"

    var i = document.createElement("i")
    i.className = "fa fa-remove"

    // yeni bir li todo li si olusturduk


    a.appendChild(i)
    li.appendChild(a);
    ToDoList.appendChild(li);
    Input.value ="";

    // ToDoList ulsinin pesine ekledik
    
}



function RemoveToDo(e){
    


    if(e.target.className == "fa fa-remove"){
        const ToDo = e.target.parentElement.parentElement ;
        ToDo.remove();
        //class name i fa fa-remove olan etikete tıklanırsa Todo Silinecek , Özellikle o butona tıklanırsa


        removeFromLocal(ToDo.textContent); // localden silmesi için fonkkiyona yolladık 
    }


}

function removeFromLocal(removeToDo){ 
    // parametre bize normal silme işlemindeki silinen li nin text.contentinden geliyor
    checkToDoFromStorage(); // dizinin yeni degerini kontrol ediyor 
    ToDoS.forEach(function(todo,index){  // dizimizin içindeki todo ve index numarasını alıp gelen text.content değeri ile karşilastırdık
        if(removeToDo===todo){ // eğer gelen degerle eşitse 
            ToDoS.splice(index,1); // Dizi içindeki eşit olan değerin index numarasını al ve splice ile 1. elemanı sil yani sadece kendisini 
        }
    })
    localStorage.setItem("todos",JSON.stringify(ToDoS)); // Diziyi Güncelle
}




function RemoveAll(e){

    if(e.target.className == "btn btn-primary btn-sm mt-3"){
        var todos = document.querySelectorAll(".list-group-item");

        todos.forEach(function(todo){
            todo.remove();
        })
        
        removeFromLocalAll(todos); // hepsini locaden silmek için 
        
    }

}

function removeFromLocalAll(){

    checkToDoFromStorage();
    ToDoS = []; // direkt diziyi boşalt
    localStorage.setItem("todos",JSON.stringify(ToDoS));
    


}


function FilterToDo(e){

    var Filter = e.target.value.toLowerCase().trim(); // keyupdan gelen değeri küçülltük,boşlularını sildik 
    var FilterTodos = document.querySelectorAll(".list-group-item"); // li lerimizi seçtik f
    
    FilterTodos.forEach(function(todo){
        if(todo.textContent.toLocaleLowerCase().trim().includes(Filter)){ // todo li lerindeki textlerimizide küçülltük ve filtemizdeki değer todo.textin contentinde içeriyorsa
            todo.setAttribute("style","display : block")
        }
        else{
            todo.setAttribute("style","display : none !important")
        }
    })

}

function checked(e){
    
    if(e.target.className == "list-group-item d-flex justify-content-between"){
        const ToDo = e.target
        ToDo.setAttribute("style","text-decoration-line: line-through");
    }
    
}

function unchecked(e){
    
    if(e.target.className == "list-group-item d-flex justify-content-between"){
        const ToDo = e.target
        ToDo.setAttribute("style","text-decoration-line: none ")
 
        
    }
    
}



























