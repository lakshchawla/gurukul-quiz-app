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
                    question: "Indus river originates in –",
                    answers: {a: 'Kinnaur', b: 'Ladakh', c: 'Nepal', d: 'Tibet'},
                    correctAnswer: 'd'
                },
                {
                    question: "The hottest planet in the solar system?",
                    answers: {a: 'Mercury', b: 'Venus', c: 'Mars', d: 'Jupiter'},
                    correctAnswer: 'b'
                },
                {
                    question: "Where was the electricity supply first introduced in India –",
                    answers: {a: 'Mumbai', b: 'Dehradun', c: 'Darjeeling', d: 'Chennai'},
                    correctAnswer: 'c'
                },
                {
                    question: "Which one of the following ports is the oldest port in India?",
                    answers: {a: 'Mumbai Port', b: 'Chennai Port', c: 'Kolkata Port', d: 'Vishakhapatnam Port'},
                    correctAnswer: 'b'
                },
                {
                    question: "Volcanic eruption do not occur in the",
                    answers: {a: 'Baltic sea', b: 'Black sea', c: 'Caribbean sea', d: 'Caspian sea'},
                    correctAnswer: 'a'
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