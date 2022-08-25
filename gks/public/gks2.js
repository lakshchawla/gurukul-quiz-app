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
                    img: "../question-img/gkquiz2.gif",
                    question: "Which is the planet nearest to the sun? ",
                    answers: {a: 'Earth', b: 'Mars', c: 'Mercury', d: 'Saturn'},
                    correctAnswer: 'c'
                },
                {
                    img: "../question-img/gkquiz2.gif",
                    question: "Which is the planet farthest from the sun?",
                    answers: {a: 'Uranus', b: 'Jupiter', c: 'Mercury', d: 'Neptune'},
                    correctAnswer: 'd'
                },
                {
                    img: "../question-img/gkquiz2.gif",
                    question: " ______ is the hottest planet in our solar system.",
                    answers: {a: 'Mercury', b: 'Venus', c: 'Jupiter', d: 'Earth'},
                    correctAnswer: 'b'
                },
                {
                    img: "../question-img/gkquiz2.gif",
                    question: " ______ is called the “Red Planet” in our solar system.",
                    answers: {a: 'Mercury', b: 'Venus', c: 'Earth', d: 'Mars'},
                    correctAnswer: 'd'
                },
                {
                    img: "../question-img/gkquiz2.gif",
                    question: "The planet with the highest number of moons is",
                    answers: {a: 'Saturn', b: 'Jupiter', c: 'Neptune', d: 'Uranus'},
                    correctAnswer: 'a'
                }
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