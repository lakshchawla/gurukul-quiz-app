let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');

let intro = ["Hello, I am Ayan", "Hi, I am a Robo", "Hello, My name is Junaid"];
let help = ["How may i assist you?","How can i help you?","What i can do for you?"];
let greetings = ["i am good you little piece of love", "i am fine, what about you", "don't want to talk", "i am good"];
let hobbies = ["i love to talk with humans", "i like to make friends like you", "i like cooking"];
let pizzas = ["which type of pizza do you like?", "i can make a pizza for you", "i would love to make a pizza for you", "would you like cheese pizza?"];
let thank = ["Most welcome","Not an issue","Its my pleasure","Mention not"];
let closing = ['Ok bye-bye','As you wish, bye take-care','Bye-bye, see you soon..']

let menu = ['']

let count = 0 ;

let phrases = ['rusty machinery','conflicting rules','broken supply chains','conflicting rules','confusing situation in many cities','work while others remain stuck']
let quiz = [ 'Name the Cummer Capital of Jammu and Kashmir?', 
    'Which is the largest coffee-producing state in India?',
    'What is the Capital of Tamil Nadu?',
    'Which Capital city is known as the City of Joy?']

let op0 = ['Anantnag','Jammu','Shimla','Srinagar']
let op1 = ['Arunachal Pradesh','Karnataka','Kerala','Tamil Nadu']
let op2 = ['Chennai','Imphal','Kolkata','Patna']
let op3 = ['Chennai','Coimbatore','Imphal','Kolkata']

let correct_option

let news = ['NEET-UG medical entrance results to be declared by September 7',
    'Active Covid cases in country decline to 90707',
    'India, Bangladesh discuss Ganga, Teesta and Kushiyara in Joint River Commission meeting',
    'INS Vikrant, Indias first indigenously-built aircraft carrier, to be commissioned on September 2',
    'Bank credit growth accelerates to 14.2% in June quarter'];


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
 
function showusermsg(usermsg){
    let output = '';
    output += `<div class="chatarea-inner user">${usermsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function showchatbotmsg(chatbotmsg){
    let output = '';
    output += `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function chatbotvoice(message){
    const speech = new SpeechSynthesisUtterance();
    if ( count == 0 ){speech.text = "Hey!! what would you like";
    window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showchatbotmsg(speech.text));
    speech.text = "News or quiz";
    window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showchatbotmsg(speech.text));  


    count ++;

}    
    if(message.includes('rusty machinery' || 'conflicting rules' || 'broken supply chains' || 'confusing situation in many cities' || 'work while others remain stuck')){
        let finalresult = "you are Right";
        speech.text = finalresult;
    }
   
    if(message.includes('phrase' || 'Phrase' || 'yes')){
        let finalresult = phrases[Math.floor(Math.random() * hobbies.length)];
        speech.text = finalresult;    
    }
    if(message.includes('quiz')){
        let finalresult = quiz[Math.floor(Math.random() * quiz.length)];
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));       
        if(finalresult == quiz[0]){
            //let option = quiz[Math.floor(Math.random() * quiz.length)];
            speech.text = op0[0];
            window.speechSynthesis.speak(speech);
            chatareamain.appendChild(showchatbotmsg(speech.text));   
            speech.text = op0[1];
            window.speechSynthesis.speak(speech);
            chatareamain.appendChild(showchatbotmsg(speech.text));   
            speech.text = op0[2];
            window.speechSynthesis.speak(speech);
            chatareamain.appendChild(showchatbotmsg(speech.text));   
            speech.text = op0[3];
            window.speechSynthesis.speak(speech);
            chatareamain.appendChild(showchatbotmsg(speech.text));             
        }
        if(finalresult == quiz[1]){
            //let option = quiz[Math.floor(Math.random() * quiz.length)];
            speech.text = op1[0];
            window.speechSynthesis.speak(speech);
            chatareamain.appendChild(showchatbotmsg(speech.text));      
            speech.text = op1[1];
            window.speechSynthesis.speak(speech);
            chatareamain.appendChild(showchatbotmsg(speech.text));   
            speech.text = op1[2];
            window.speechSynthesis.speak(speech);
            chatareamain.appendChild(showchatbotmsg(speech.text));   
            speech.text = op1[3];
            window.speechSynthesis.speak(speech);
            chatareamain.appendChild(showchatbotmsg(speech.text));             
        }
        if(finalresult == quiz[2]){
            //let option = quiz[Math.floor(Math.random() * quiz.length)];
            speech.text = op2[0];
            window.speechSynthesis.speak(speech);
            chatareamain.appendChild(showchatbotmsg(speech.text));      
            speech.text = op2[1];
            window.speechSynthesis.speak(speech);
            chatareamain.appendChild(showchatbotmsg(speech.text));   
            speech.text = op2[2];
            window.speechSynthesis.speak(speech);
            chatareamain.appendChild(showchatbotmsg(speech.text));   
            speech.text = op2[3];
            window.speechSynthesis.speak(speech);
            chatareamain.appendChild(showchatbotmsg(speech.text));             
        }
        if(finalresult == quiz[3]){
            //let option = quiz[Math.floor(Math.random() * quiz.length)];
            speech.text = op3[0];
            window.speechSynthesis.speak(speech);
            chatareamain.appendChild(showchatbotmsg(speech.text));      
            speech.text = op3[1];
            window.speechSynthesis.speak(speech);
            chatareamain.appendChild(showchatbotmsg(speech.text));   
            speech.text = op3[2];
            window.speechSynthesis.speak(speech);
            chatareamain.appendChild(showchatbotmsg(speech.text));   
            speech.text = op3[3];
            window.speechSynthesis.speak(speech);
            chatareamain.appendChild(showchatbotmsg(speech.text));             
        }
    }
    if(message.includes('news')){
        let finalresult = news[Math.floor(Math.random() * news.length)];
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
    }

    if(message.includes('srinagar')){
        let finalresult = "correct !!";
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
    }

    if(message.includes('karnataka')){
        let finalresult = "correct !!";
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
    }
    if(message.includes('chennai')){
        let finalresult = "correct !!";
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
    }
    if(message.includes('kolkata')){
        let finalresult = "correct !!";
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
    }
    if(message.includes('thank you' || 'thank you so much')){
        let finalresult = thank[Math.floor(Math.random() * thank.length)];
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text)); 
    }
   
    //window.speechSynthesis.speak(speech);
    //chatareamain.appendChild(showchatbotmsg(speech.text));
}

recognition.onresult=function(e){
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatareamain.appendChild(showusermsg(transcript));
    chatbotvoice(transcript);
    console.log(transcript);
}
recognition.onend=function(){
    mic.style.background="#ff3b3b";
}
mic.addEventListener("click", function(){
    mic.style.background='#39c81f';
    recognition.start();
    console.log("Activated");
})
