const questions = [
    {
        "que": "Which of the language is a markup language?",
        "a": "HTML",
        "b": "HTMssL",
        "c": "HTMsL",
        "d": "HTMsssL",
        "correct": "a"
    },
     {
        "que": "Which of the language is a pograming language?",
        "a": "HTML",
        "b": "Java script",
        "c": "php",
        "d": "css",
        "correct": "b"
    },
    {
        "que": "A school student was berated by the managing director of the Bihar Women Development Corporation, who said students would soon start asking for free contraceptives for family planning. What had the student originally asked for?  ",
        "a": "Toilet facilities",
        "b": "Jeans",
        "c": "Sanitary napkins",
        "d": "Sports equipment",
        "correct": "c"
    },
      {
          "que": "Lizzo and 19th century US president James Madison have played the same instrument. It's around 200 years old, made of crystal, belonged to Madison and was played by Lizzo at her concert in Washington DC. What? ",
          "a": "Golden cymbals ",
          "b": "A diamond encrusted tambourine",
          "c": " A crystal flute ",
          "d": "A grand piano",
        "correct": "a"
    }
]

let index = 0;
let total = questions.length;
let correct = 0 , wrong = 0;
const quebox = document.getElementById('quebox')
const optionInput = document.querySelectorAll('.Options')
const loadQuestion = () =>{
    if(index === total){
        return endQuiz();
    }
    reset();
    const deta = questions[index]
    console.log(deta)
    quebox.innerText = `${index+1} )${deta.que}`;
    optionInput[0].nextElementSibling.innerText = deta.a;
    optionInput[1].nextElementSibling.innerText = deta.b;
    optionInput[2].nextElementSibling.innerText = deta.c;
    optionInput[3].nextElementSibling.innerText = deta.d;

}


const submitQuiz = () =>{
    // window.alert("Your answer hasbeen submited");
    const deta = questions[index]
    const ans = getAns()
    if(ans === deta.correct){
        correct++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAns = () =>{
    let answer;
    optionInput.forEach((input)=>{
        if(input.checked){
            answer = input.value;
           
        } 
        

    })
    return answer;
}

const reset = ()=>{
    optionInput.forEach((input) => {
        input.checked = false;

        })
    
}

const endQuiz = ()=>{
    document.getElementById('main').innerHTML = `<img style="margin-right:50px;"  src="/giphy.gif" alt=""><h2 style="color:white">score:</h2>
    <h2 style="text-align:center;border:2px solid black; background-color:#d1d8e0; border-radius:10px;padding:10px ; margin-left:10px">${correct}/${total} are correct</h2>`
    
    
}
loadQuestion();


