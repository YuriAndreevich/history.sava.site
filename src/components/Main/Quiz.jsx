import React, { useState } from 'react'

function Quiz() {

    const questions = [
        {
            questionText: 'Столица США?',
            answerOptions: [
                { answerText: 'Бостон', isCorrect: false },
                { answerText: 'Вашингтон', isCorrect: true },
                { answerText: 'Нью-Йорк', isCorrect: false },
                { answerText: 'Лос-Анджелес', isCorrect: false },
            ]
        },
        {
            questionText: 'React это',
            answerOptions: [
                { answerText: 'реакт', isCorrect: true },
                { answerText: 'Вашингтон', isCorrect: false },
                { answerText: 'Нью-Йорк', isCorrect: false },
                { answerText: 'Лос-Анджелес', isCorrect: false },
            ]
        },
        {
            questionText: 'html это',
            answerOptions: [
                { answerText: 'реакт', isCorrect: false },
                { answerText: 'Вашингтон', isCorrect: false },
                { answerText: 'html', isCorrect: true },
                { answerText: 'Лос-Анджелес', isCorrect: false },
            ]
        }
    ]

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(false)

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1)}

            const nextQuestion = currentQuestion + 1

            if (nextQuestion < questions.length) {
                setCurrentQuestion(nextQuestion)
            } else {
                setShowScore(true)
            }
        }

    const refresh = () => {
        setCurrentQuestion(0)
        setScore(0)
        setShowScore(false)
    }

    return (
        <div className='Quiz'>
            {
                showScore
                    ?
                    <div> Правильных ответов {score}из {questions.length}
                        <button onClick={refresh}>Попробовать еще раз</button></div>
                    :
                    <div><p>{questions[currentQuestion].questionText}</p>
                        <span>Вопрос {currentQuestion + 1}</span> / {questions.length}
                        {questions[currentQuestion].answerOptions.map(item =>
                            (<button onClick={() => handleAnswerOptionClick(item.isCorrect)}>{item.answerText}</button>)
                        )}</div>
            }
        </div>
    )
}

export default Quiz