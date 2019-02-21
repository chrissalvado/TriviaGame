var Questions = [
    {
        prompt: "When the Rolling Stones appeared on The Ed Sullivan Show in 1967, which song were they forced to change the lyrics to so that it wouldn't be censored by the CBS Network censors?\n(a) under my thumb\n\(b) Honkey Tonk Woamn\n\(c)Satisfaction\n\(d) Lets spend the night together",
        answer: "b"
        },
        {
        prompt: "This guitarist, originally named Johnny, was born in 1942 in Seattle, Washington. He would go on to be arguably the greatest guitarist of all time, though he only lived to be twenty-seven. If I told you what band he was in, it would be way too obvious.\n(a) Jimmy Hendrix \n\(b) Angus Young\n\(c) Jimmy Paige\(d) Chuck Berry",
        answer: "a"
        },
        {
        prompt: "This Beatle was born in 1942, had a successful career after the band broke up, and played bass.\n(a) John Lennon\n\(b) Ringo Starr\n\(c) George Harrison\n\(d) Paul McCartney",
        answer: "d"
         },
         {
        prompt: "This guitarist and co-founder of Van Halen was ranked at seventh on Rolling Stone's best guitar solos list for Erupytion.\n(a) Stevie ray vaughn\n\(b) eddie van halen\n\(c) sammy hagar\n\(d) Slash",
        answer: "b"
         },
         {
        prompt: "Certainly Billy Joel had many albums that deserved to be considered as one of the greatest of all time. Which of the following is not a Billy Joel album?\n(a) The stranger\n\(b) 52nd street\n\(c) Too Low for Zero\n\(d) Glass Houses",
        answer: "c"
         },
         {
         prompt: "Billy Joel was once married to what celebrity?\n(a) Brooke Shields\n\(b) Christie Brinkley\n\(c) Stephaine Seymore\n\(d) Ginger Damiels",
         answer: "b"
        },
        {
        prompt: "This Glam Rocker started his career with The Velvet Underground and went on to have a Walk on the Wild Side solo career. Who is this?/n(a) Lou Reed\n\(b) Adam Ant\n\(c) Phil Colins\n\(d) Frank Zappa",
        answer: "a"
        },
        {
        prompt: "Which band was named for a high school coach?\n(a) Molly Hathcet\n\(b) Marshall Tucker Band\n\(c) Lynard Skinner\n\(d) Tom Petty",
        answer: "c"
        },
        {
        prompt: "If I leave here tomorrow...(complete this song line)\n(a) Would you still remember me?\n\(b) Would you be leaving here with me?\n\(c) Will you still be in Tennessee?\n\(d) Would your will include me?",
        answer: "d"
        },
        {
        prompt:"Bette Davis Eyes topped the Billboard Hot 100 chart in 1981. Who sang it?\n(a) Kim Carnes\n\(b) Blondie\n\(c) Sheena Easton\n\(d) Whitney Houston",
        answer: "a"
        },
        {
        prompt:"which 80s rock glam band was Brett Micahels the lead singer of?\n(a) Motley Crue\n\(b) Scorpians\n\(c) Whitesnake\n\(d) Poison",
        answer: "d"
        },
]
var score = 0

$(".Questions").attr(Questions)
   
for(var i = 0; i < Questions.length;i++){
    var response = window.prompt(Questions[i].prompt)

    if(response === Questions[i].answer){
        score++;
        alert("that is correct sir!")
    }
    else{
        alert("Nope")
    }
}


