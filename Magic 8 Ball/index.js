const advice = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes, definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
]
const BadJokes = ["Don't do drugs but if you do, don't get caught",
    "Want more advices, go to Stack Overflow then",
    "Asking questions to ball , what has your life come to ?",
    "Work on your Sundays",
    "Say to the police , you have coke in your car, the next time you drive!"
]


const adviceField = document.getElementById("question");
const adviceBtn = document.getElementById("submit");
const adviceTxt = document.getElementById("advice");
const NormalMode = document.getElementById("normal-mode");
const another = document.getElementById("another");
const EvilMode = document.getElementById("Evil-mode")
const EvilModeLabel=document.getElementById("Evil-mode-label")
const Chances = document.getElementById("Chances")
let Count = 5
let timesClicked=0
adviceBtn.addEventListener("click", function () {
    let randomNum = Math.floor(Math.random() * advice.length) ;
    adviceTxt.textContent = advice[randomNum]
    adviceField.value = "";
    document.getElementById("iris").classList.toggle("animate");
    document.getElementById("iris-2").classList.toggle("animate-2");
    adviceBtn.classList.add("hide");
    adviceField.classList.add("hide");
    another.style.display = "block";
    Count=Count-1
    Chances.textContent = "Chances: " + Count
    if (Count <= 0) {
        adviceBtn.classList.add("hide");
        adviceField.classList.add("hide");
        another.style.display = "none";
        Chances.textContent = "You are out of chances!"
        EvilMode.style.display="none"
        EvilModeLabel.style.display="none"
    }

})
another.addEventListener("click", function () {
    if(EvilMode.checked){
        EvileMode()
        timesClicked++;
        if(timesClicked%2==0){
        Chances.textContent = "Chances: " + Count
        Count=Count-1
        }
        if (Count <= 0) {
            Chances.textContent = "You are out of chances!"
            another.style.display = "none";
            EvilMode.style.display="none"
            EvilModeLabel.style.display="none"
        }
    }else{
    document.getElementById("iris").classList.toggle("animate");
    document.getElementById("iris-2").classList.toggle("animate-2");
    adviceBtn.classList.remove("hide");
    adviceField.classList.remove("hide");
    another.style.display = "none";
}
})
function EvileMode() {
    let randomJoke = Math.floor(Math.random() * BadJokes.length);
    adviceTxt.textContent = BadJokes[randomJoke];
    adviceField.value = "";
    document.getElementById("iris").classList.toggle("animate");
    document.getElementById("iris-2").classList.toggle("animate-2");
    adviceBtn.classList.add("hide");
    adviceField.classList.add("hide");
    another.style.display = "block";
}