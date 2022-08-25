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
                    question: "An example of liquid metal and liquid non-metal is?",
                    answers: {a: 'Gallium, mercury', b: 'Mercury, chlorine', c: 'Mercury, bromine', d: 'Bromine, sulphur'},
                    correctAnswer: 'c'
                },
                {
                    question: "Which method is used to separate cream from milk?",
                    answers: {a: 'Centrifugation', b: 'Adsorption', c: 'Distillation', d: 'Crystallization'},
                    correctAnswer: 'a'
                },
                {
                    question: "The atomic symbol of silver is _____",
                    answers: {a: 'Si', b: 'S', c: 'Au', d: 'Ag'},
                    correctAnswer: 'd'
                },
                {
                    question: " Which of the statements is incorrect about the physical change?",
                    answers: {a: 'There is no gain or loss of energy.', b: 'It is permanent and Irreversible', c: 'Composition of the substance remains the same', d: 'No new substance is formed'},
                    correctAnswer: 'b'
                },
                {
                    question: "Which of the following is the correct pair of atom and its atomic symbol?",
                    answers: {a: 'Sulphur – Su', b: 'Potassium – P', c: 'Phosphorus -P', d: 'Sodium- S'},
                    correctAnswer: 'c'
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
