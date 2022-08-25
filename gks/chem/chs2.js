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
                    question: "What is true about homogeneous mixture?",
                    answers: {a: 'Homogeneous mixture is the mixture of two or more than two components.', b: 'In homogeneous mixture the composition and properties are uniform throughout the mixture', c: 'both (a) and (b) are true', d: 'none of the above'},
                    correctAnswer: 'c'
                },
                {
                    question: "Which of the following properties does not describe a compound?",
                    answers: {a: 'It is composed of two or more elements', b: 'It is mixed in any proportion by mass', c: 'It is a pure substance.', d: 'It cannot be separated into constituents by physical means'},
                    correctAnswer: 'b'
                },
                {
                    question: "In the tincture of iodine, find the solute and solvent?",
                    answers: {a: 'alcohol is the solute and iodine is the solvent', b: 'any component can be considered as solute or solvent', c: ' iodine is the solute and alcohol is the solvent', d: 'tincture of iodine is not a solution'},
                    correctAnswer: 'c'
                },
                {
                    question: "Which of the following is not a homogeneous mixture?",
                    answers: {a: 'Air', b: 'Tincture of iodine', c: 'Sugar solution', d: 'Milk'},
                    correctAnswer: 'd'
                },
                {
                    question: "Solid solution in which the solute is gas ______",
                    answers: {a: 'Copper dissolved in gold', b: 'Camphor in nitrogen gas', c: 'Solution of hydrogen in palladium', d: 'All of the above'},
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
