const getRandomArbitrary = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }

const foundAswer = (keywords,message) =>{
    let answer = "";
    const type = [];
    keywords.forEach((item)=>{

        item.words.forEach((elem)=>{
            
            if( (elem.includes(message) || message.includes(elem) ) && !type.includes(item.type)){
                answer += item.answers[getRandomArbitrary(0,item.answers.length)] + " "; 
                type.push(item.type);
            }
        });
    });

    return answer;
}
const buildAnswer = (message) =>{

    let answer = "";

    const keywords = [
        {
            words: ["ciao", "buongiorno", "buonasera","buonasera","buon giorno"],
            answers: ["ciao", "salve"],
            type: "saluto"
        },
        {
            words: ["come va", "come stai", "come ti senti","come sta"],
            answers: ["tutto bene grazie", "tutto ok", "bene bene"],
            type: "stato"
        },
        {
            words: ["sta meglio","stai meglio", "si è ripresa", "ti sei ripreso","ti sei ripresa"],
            answers: ["sì grazie", "ancora no", "sì", "un po'","va un po' meglio"],
            type: "stato"
        },
        {
            words: ["fai", "porta", "manda"],
            answers: ["tranquillo", "va bene"],
            type: "fare"
        },
        {
            words: ["conosci", "hai visto", "visto","sentito"],
            answers: ["no mi dispiace", "sì", "no"],
            type: "domanda"
        },
       
    ];

    if( message[message.length-1] == "?" || message[message.length-1] == "?"){
        message = message.slice(0,message.length-1);
    }
    answer = foundAswer(keywords,message.toLowerCase());

    return answer != "" ? answer.charAt(0).toUpperCase()+ answer.slice(1) : "Ok";

}