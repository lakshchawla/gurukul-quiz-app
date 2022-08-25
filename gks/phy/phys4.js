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
                    question: "Which of the following statements is true of the value of acceleration due to gravity?",
                    answers: {a: 'The value is almost negligible on the equator', b: 'The value increases from pole to equator', c: 'The value is least on poles', d: 'The value is the same on the equator and poles'},
                    correctAnswer: 'a'
                },
                {
                    question: "The law of gravitation describes the gravitational force between",
                    answers: {a: 'earth and point mass only', b: 'any two bodies having mass', c: 'earth and Sun only', d: 'two charged bodies only'},
                    correctAnswer: 'b'
                },
                {
                    question: "The Earth’s atmosphere is held by the",
                    answers: {a: 'Wind', b: 'Earth’s magnetic field', c: 'Gravity', d: 'Clouds'},
                    correctAnswer: 'c'
                },
                {
                    question: "The weight of an object on the Moon’s surface is",
                    answers: {a: '1/3 rd of the weight on Earth', b: '1/5 rd of the weight on Earth', c: '1/2 nd of the weight on Earth', d: '1/6th of the weight on Earth'},
                    correctAnswer: 'd'
                },
                {
                    question: "What is the value of the acceleration due to gravity on the surface of the Earth?",
                    answers: {a: '9.8 m/s2', b: '18.8 m/s2', c: '4 m/s2', d: '12 m/s2'},
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
