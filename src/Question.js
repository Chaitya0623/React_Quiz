import { useContext } from "react";
import { QuizContext } from "./quizContext";
import Answer from "./Answer"

const Question = () => {
    // Using React Hooks like useContext
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex]
    return (
        <div>
            <div className="question">{currentQuestion.question}</div>
            <div className="answers">
                {quizState.answers.map((answer, index) => (
                    <Answer answerText={answer} 
                    key={index} 
                    index={index} 
                    currentAnswer={quizState.currentAnswer}
                    correctAnswer={currentQuestion.correctAnswer}
                    onSelectAnswer={(answerText) =>
                        // Payload is used to get key data passed between reducers
                    dispatch({type: 'SELECT_ANSWER', payload: answerText})}/>
                ))}
            </div>
        </div>
    )
}

export default Question;