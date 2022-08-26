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

let phrases = ['rusty machinery','conflicting rules','broken supply chains','conflicting rules','confusing situation in many cities','work while others remain stuck']


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
    speech.text = "wanna phrase!!";
    
    if(message.includes('rusty machinery' || 'conflicting rules' || 'broken supply chains' || 'confusing situation in many cities' || 'work while others remain stuck')){
        let finalresult = "you are Right";
        speech.text = finalresult;
    }
   
    if(message.includes('phrase' || 'Phrase' || 'yes')){
        let finalresult = phrases[Math.floor(Math.random() * hobbies.length)];
        speech.text = finalresult;    
    }
    if(message.includes('news')){
        let finalresult = news[Math.floor(Math.random() * news.length)];
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));       
        if(finalresult == news[0]){
            //let option = news[Math.floor(Math.random() * news.length)];
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
        if(finalresult == news[1]){
            //let option = news[Math.floor(Math.random() * news.length)];
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
        if(finalresult == news[2]){
            //let option = news[Math.floor(Math.random() * news.length)];
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
        if(finalresult == news[3]){
            //let option = news[Math.floor(Math.random() * news.length)];
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
    if(message.includes('pizza')){
        let finalresult = pizzas[Math.floor(Math.random() * pizzas.length)];
        speech.text = finalresult;
    }
    if(message.includes('thank you' || 'thank you so much')){
        let finalresult = thank[Math.floor(Math.random() * thank.length)];
        speech.text = finalresult;
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
