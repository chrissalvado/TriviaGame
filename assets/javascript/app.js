
var pos = 0, test, test_status, question, guess, guesses, cha, chb, chc, chd, correct = 0;
var Questions = [

    ["When the Rolling Stones appeared on The Ed Sullivan Show in 1967, which song were they forced to change the lyrics to so that it wouldn't be censored by the CBS Network censors?", "under my thumb", "Honkey Tonk Woamn", "Satisfaction", "Lets spend the night together", "b" ],
    
    ["This guitarist, originally named Johnny, was born in 1942 in Seattle, Washington. He would go on to be arguably the greatest guitarist of all time, though he only lived to be twenty-seven. If I told you what band he was in, it would be way too obvious.", "Jimmy Hendrix", "Angus Young", "Jimmy Paige", "Chuck Berry", "a"],
    
    ["This Beatle was born in 1942, had a successful career after the band broke up, and played bass.", "John Lennon", "Ringo Starr", "George Harrison", "Paul McCartney", "d" ],
    
    ["This guitarist and co-founder of Van Halen was ranked at seventh on Rolling Stone's best guitar solos list for Erupytion.", "Stevie ray vaughn", "eddie van halen", "sammy hagar", "Slash", "b" ],

    ["Certainly Billy Joel had many albums that deserved to be considered as one of the greatest of all time. Which of the following is not a Billy Joel album?", "The stranger", "52nd street", "Too Low for Zero", "Glass Houses", "c" ],
    
    ["Billy Joel was once married to what celebrity?", "Brooke Shields", "Christie Brinkley", "Stephaine Seymore", "Ginger Damiels", "b" ],
     
    ["This Glam Rocker started his career with The Velvet Underground and went on to have a Walk on the Wild Side solo career. Who is this?", "Lou Reed", "Adam Ant", "Phil Colins", "Frank Zappa", "a" ],

    ["Which band was named for a high school coach?", "Molly Hathcet", "Marshall Tucker Band", "Lynard Skinner", "Tom Petty", "c"],
    
    ["If I leave here tomorrow...(complete this song line)", "Would you still remember me?", "Would you be leaving here with me?", "Will you still be in Tennessee?", "Would your will include me?", "d" ],
    
    ["Bette Davis Eyes topped the Billboard Hot 100 chart in 1981. Who sang it?", "Kim Carnes", "Blondie", "Sheena Easton", "Whitney Houston", "a"],

    ["which 80s rock glam band was Brett Micahels the lead singer of?", "Motley Crue", "Scorpians", "Whitesnake", "Poison", "d" ],
];
var timeRemaining = 10
var ticker = setInterval(function(){
$("#timeremaining").text(timeRemaining)
console.log("timer happening",timeRemaining)
    if(timeRemaining===0){
    alert("Your time is up!!")
    clearInterval(ticker)
    scoreboard()
    }
    timeRemaining--
    },1000)

function _(x) {
    return document.getElementById(x);
}
function getQuestions() {
    test = _("test");
    console.log(test,"this should be our html test")
    if(pos >= Questions.length){
        console.log("checking if statemnets")
        test.innerHTML = "<h2>You got "  + correct + "of" + Questions.length + "questions correct</h2>";
        _("test_status").innerHTML = "Test is Finished";
        pos = 0;
        correct = 0;
        return false;
    }
    _("test_status").innerHTML = "Question "+ (pos+1)+" of "+Questions.length;
    question = Questions[pos][0];
    cha = Questions[pos][1];
    chb = Questions[pos][2];
    chc = Questions[pos][3];
    chd = Questions[pos][4];
    test.innerHTML ="<h3>"+question+"</h3>";
    test.innerHTML += "<input type='radio' name='guesses' value='a'> "+cha+"<br>";
    test.innerHTML += "<input type='radio' name='guesses' value='b'> "+chb+"<br>";
    test.innerHTML += "<input type='radio' name='guesses' value='c'> "+chc+"<br>";
    test.innerHTML += "<input type='radio' name='guesses' value='d'> "+chd+"<br><br>";
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
    }
function checkAnswer() {
    guesses = document.getElementsByName("guesses");
    for(var i = 0;i <guesses.length;i++){
        if (guesses[i].checked){
            guess = guesses[i].value
        }
    }
    if(guess == Questions[pos][5]){
        correct++
    }
        pos++;

        getQuestions();
}
window.addEventListener("load", getQuestions, false);

function scoreboard(){
    var winnerString = "you got " + correct  + " correct!!"
    $("#scoreboard").text(winnerString)

}
