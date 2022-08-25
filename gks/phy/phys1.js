
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
                    question: "If Ravan moving in a Pushpak Vimana tosses a coin upward that falls behind him. it means that the motion of the Pushpak Vimana is _____",
                    answers: {a: 'Uniform', b: 'Accelerated', c: 'Zero', d: 'Retarded'},
                    correctAnswer: 'b'
                },
                {
                    question: "The Ramsetu length traveled by Vanarsena in a given time interval is known as _____.",
                    answers: {a: 'velocity', b: 'distance', c: 'acceleration', d: 'moment'},
                    correctAnswer: 'b'
                },
                {
                    question: "The Weight of Kumbhkaran on the moon's Surface is _____",
                    answers: {a: '1/3 of the weight on earth', b: '1/5 of the weight on earth ', c: '1/6 of the weight on earth', d: '1/2 of the weight on earth'},
                    correctAnswer: 'c'
                },
                {
                    question: "Ram ji Arrow Velocity is defined as _____ per time.",
                    answers: {a: 'acceleration', b: 'distance', c: 'displacement', d: 'power'},
                    correctAnswer: 'c'
                },
                {
                    question: "If the mass of Hanuman ji is doubled & its Velocity becomes half, then the linear momentum of hanuman ji will ______",
                    answers: {a: 'Remain the same', b: 'Become double', c: 'Become half', d: 'Becomes four times'},
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
        resetQuiz() {``
            this.index = 0
            this.selectedAnswer = ''
            this.correctAnswer = 0
            this.wrongAnswer = 0
        }


    }
})

app.mount('#app')
