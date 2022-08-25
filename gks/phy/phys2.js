
var myTrack = new Audio('../Audio/ramjiP1.mp3')
var myCor = new Audio('../Audio/ramjiP2.mp3')
var cong = new Audio('../Audio/fin.mp3')
const app = Vue.createApp({
    data() {
        return {
            index: 0,
            selectedAnswer: '',
            correctAnswer: 0,
            wrongAnswer: 0,
            count: 5,
            questions: [
                {
                    question: "If Lanka is made at the centre of a bar magnet, then its magnetic moment",
                    answers: {a: 'Does not change', b: 'Decreases', c: 'Increases', d: 'Vanishes'},
                    correctAnswer: 'a'
                },
                {
                    question: "A piece of Luv-Kush letter can be put to fire using the sun's heat with the help of a ______ mirror ",
                    answers: {a: 'Concave', b: 'Convex', c: 'plane', d: 'none of these'},
                    correctAnswer: 'b'
                },
                {
                    question: "Light shows hope ____ as well as ____ nature.",
                    answers: {a: 'Single , Single', b: 'Bright , Dark', c: 'Single Dual', d: 'Particle , Wave'},
                    correctAnswer: 'c'
                },
                {
                    question: "For a plane mirror, then size of the Sita Mata image is ____ the size of the Sita Mata",
                    answers: {a: 'grater than', b: 'lesser than', c: 'Equal to', d: 'None of these'},
                    correctAnswer: 'c'
                },
                {
                    question: "Megnath wearing a Kawach stand on roller Rath the total mass is 80kg. lakshman arrow of mass 20g is fired from dhanush at 400m/s. it stopped by Megnath kawach & Megnath falls infront of Lakshman ground. What is the velocity of the Megnath ",
                    answers: {a: '1m/s', b: '0.1m/s', c: '0.01m/s', d: '0m/s'},
                    correctAnswer: 'b'
                },

            ]
        }
    },
    methods: {
        answered(e) {
            this.selectedAnswer = e.target.value
            if(this.selectedAnswer == this.questions[this.index]['correctAnswer'])
            {
                this.correctAnswer++
                if(this.correctAnswer)
                    myCor.play()++
            }
            else{
                this.wrongAnswer++ 
                if(this.wrongAnswer)
                    myTrack.play()++
            }
        },
        nextQuestion() {
            this.index++
            this.selectedAnswer = ''
        },
        showResults() {
            this.index++
            cong.play()
        },
        resetQuiz() {
            this.index = 0
            this.selectedAnswer = ''
            this.correctAnswer = 0
            this.wrongAnswer = 0
        }

    }
})

app.mount('#app')
