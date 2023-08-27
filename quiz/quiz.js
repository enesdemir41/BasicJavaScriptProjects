const questions = [
    {
      question: ' How do you check the data type of a variable in JavaScript? ',
      answer1: 'instanceof',
      answer2: 'isType',
      correctAnswer: 'typeof',
    },
    {
      question: ' What is "Hoisting" in JavaScript ?',
      answer1: 'The process of moving variables declared within a function to the top.',
      answer2: 'An unsolvable error type.',
      correctAnswer: 'Fetching data from the internet.',
    },
  
    {
      question: 'Which of the following doesnt give an error?',
      answer1: 'font-size = 20px',
      answer2: 'background-color : 2rem',
      correctAnswer: 'display : flex;',
    },
  
    {
      question: 'What is "ES6" in JavaScript and what new features does it introduce?',
      answer1: 'Current style state',
      answer2: ' A website that displays gold prices.',
      correctAnswer: 'ECMAScript 6 is a subset of JavaScript that introduces new features, such as arrow functions and template literals.',
    },
  
    {
      question: 'Which of the following is Pre-compiler of Css',
      answer1: 'React',
      answer2: 'Vue',
      correctAnswer: 'Sass',
    },
  ];

//global vars
  let score = 0;
  let guess ;
  let counter  = 0 ; 
  

//DOMS
 let answerlist =  document.querySelector(".answer-list") ;
 let nextBtn = document.querySelector(".btn");
 let questionhtml = document.querySelector(".question") ;

 const answer1 = document.querySelector('.answer-1');
 const answer2 = document.querySelector('.answer-2');
 const answer3 = document.querySelector('.answer-3');

 //events
    answerlist.addEventListener("click",selectanswer) ; 
    nextBtn.addEventListener("click",question) ; 



//select ansver
 function selectanswer(e){
    

    guess = e.target.textContent ;
    
    checkanswer()
    
 }


 //checkanswer
 function checkanswer(){
  
  

  
     if(questions[counter].correctAnswer == guess){
        alert("true") ;
        score++ ;
        counter ++ ;
    }else{
      
      alert("false")
    }


   

 }

 // get question
 function question(){

  if(guess == null | ""){
    alert("pick please") ; 
    
  }else{
    questionhtml.textContent = questions[counter].question;

    let order = randomizeQuestion();
    answer1.textContent = order[0];
    answer2.textContent = order[1];
    answer3.textContent = order[2];
   

   if(counter == 4){
    alert(score);
   }
  }
 
  guess = null ;
 
 }

// shuffle answer 
 function randomizeQuestion() {
    let questionOrder = [
      [
        questions[counter].answer1,
        questions[counter].answer2,
        questions[counter].correctAnswer,
      ],
      [
        questions[counter].correctAnswer,
        questions[counter].answer1,
        questions[counter].answer2,
      ],
      [
        questions[counter].answer2,
        questions[counter].correctAnswer,
        questions[counter].answer1,
      ],
    ];
  
    let selectedOrder = Math.floor(Math.random() * 3);
    return questionOrder[selectedOrder];
  }




  