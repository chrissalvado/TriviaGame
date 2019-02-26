
var pos = 0, test, test_status, question, guess, guesses, cha, chb, chc, chd, correct = 0;
var Questions = [

    ["When the Rolling Stones appeared on The Ed Sullivan Show in 1967, which song were they forced to change the lyrics to so that it wouldn't be censored by the CBS Network censors?", "under my thumb", "Honkey Tonk Woamn", "Satisfaction", "Lets spend the night together", "b"],

    ["This guitarist, originally named Johnny, was born in 1942 in Seattle, Washington. He would go on to be arguably the greatest guitarist of all time, though he only lived to be twenty-seven. If I told you what band he was in, it would be way too obvious.", "Jimmy Hendrix", "Angus Young", "Jimmy Paige", "Chuck Berry", "a"],

    ["This Beatle was born in 1942, had a successful career after the band broke up, and played bass.", "John Lennon", "Ringo Starr", "George Harrison", "Paul McCartney", "d"],

    ["This guitarist and co-founder of Van Halen was ranked at seventh on Rolling Stone's best guitar solos list for 'Erupytion'.", "Stevie ray vaughn", "eddie van halen", "sammy hagar", "Slash", "b"],

    ["Certainly Billy Joel had many albums that deserved to be considered as one of the greatest of all time. Which of the following is not a Billy Joel album?", "The stranger", "52nd street", "Too Low for Zero", "Glass Houses", "c"],

    ["Billy Joel was once married to what celebrity?", "Brooke Shields", "Christie Brinkley", "Stephaine Seymore", "Ginger Damiels", "b"],

    ["This Glam Rocker started his career with The Velvet Underground and went on to have a Walk on the Wild Side solo career. Who is this?", "Lou Reed", "Adam Ant", "Phil Colins", "Frank Zappa", "a"],

    ["Which band was named for a high school coach?", "Molly Hathcet", "Marshall Tucker Band", "Lynard Skinner", "Tom Petty", "c"],

    ["'If I leave here tomorrow'...(complete this song line)", "Would you still remember me?", "Would you be leaving here with me?", "Will you still be in Tennessee?", "Would your will include me?", "a"],

    ["Bette Davis Eyes topped the Billboard Hot 100 chart in 1981. Who sang it?", "Kim Carnes", "Blondie", "Sheena Easton", "Whitney Houston", "a"],

    ["which 80s rock glam band was Brett Micahels the lead singer of?", "Motley Crue", "Scorpians", "Whitesnake", "Poison", "d"],

    ["What megahit boasts an opening riff that was actually just the guitar player warming up", "girls girls girls", "sweet child of mine", "long days", "daughter", "b"],

    ["What's Jon Bon Jovi's real name?", "john mack", "jon jovi", " john bon", "john bongiovoni", "d"],

    ["In a star is born lady gaga sang the hit song 'shallows' with what hollywood leading man? ", " Ben affleck", "Bradley cooper", "Ben Kinglsley", "Jude Law", "b"],

    ["Which of these bands recorded a CD named after the state they grew up in?", " Guns n Roses", "Aerosmith", "Def Leopard", "Bon Jovi", "d"],

    ["In Motley Crue's 'KIckstart My Heart', what were the lyrics about?", "Nikki Sixx heroin overdose"," Tommy Lee's marriage to Heather Locklear", "How the band got started", "Vince Neil's obsession for race car driving", "a"],

    ["Which of these groups had these lyrics: 'Turn it down you said, well all I gotta say to you is time and time again I say no, no, no, no, no, no, no'?", "Quiet Riot", "Twisted Sister", "Van Halen", "Ratt", "b"],

    ["Which CD from Poison was the first to be involved in controversy over the cover?", "Open up and say ah", "Look What The Cat Dragged In", "Flesh And Blood", "Swallow This Live","a"],

    ["What power ballad did Faster Pussycat release in 1989?", "Wthout You", "In My Dreams", "Ballad of Jayne", "House of Pain", "d"],

    ["In what year was the popular '867-5309-Jenny' from Tommy Tutone released?" , "1980", "1981", "1985", "1989", "b"],

    ["True or False: Patrick Swayze sang the song 'She's Like The Wind' from the 'Dirty Dancing' soundtrack?", "true", "false","","","a"]
    
    


];
var timeRemaining = 60
var ticker = setInterval(function () {
    $("#timeremaining").text(timeRemaining)
    console.log("timer happening", timeRemaining)
    if (timeRemaining === 0) {
        alert("Your time is up!!")
        clearInterval(ticker)
        scoreboard()
    }
    timeRemaining--
}, 1000)

function _(x) {
    return document.getElementById(x);
}
function getQuestions() {
    test = _("test");
    console.log(test, "this should be my html test")
    if (pos >= Questions.length) {
        console.log("checking if statements")
        test.innerHTML = "<h2>You got " + correct + " of " + Questions.length + " questions correct </h2>";
        _("test_status").innerHTML = "Test is Finished";
        pos = 0;
        correct = 0;
        return false;
    }
    _("test_status").innerHTML = "Question " + (pos + 1) + " of " + Questions.length;
    question = Questions[pos][0];
    cha = Questions[pos][1];
    chb = Questions[pos][2];
    chc = Questions[pos][3];
    chd = Questions[pos][4];
    test.innerHTML = "<h3>" + question + "</h3>";
    test.innerHTML += "<input type='radio' name='guesses' value='a'> " + cha + "<br>";
    test.innerHTML += "<input type='radio' name='guesses' value='b'> " + chb + "<br>";
    test.innerHTML += "<input type='radio' name='guesses' value='c'> " + chc + "<br>";
    test.innerHTML += "<input type='radio' name='guesses' value='d'> " + chd + "<br><br>";
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer() {
    guesses = document.getElementsByName("guesses");
    for (var i = 0; i < guesses.length; i++) {
        if (guesses[i].checked) {
            guess = guesses[i].value
        }
    }
    if (guess == Questions[pos][5]) {
        correct++
        alert("yup you got it!!")
    
    }
    else{
        alert("thats not right")
    }
    pos++;
   

    
    getQuestions();
}






window.addEventListener("load", getQuestions, false);

function scoreboard() {
    var winnerString = "you got " + correct + " correct!!"
    $("#scoreboard").text(winnerString);

    getQuestions()




}
