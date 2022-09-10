import { useContext } from "react";
import { QuizContext } from "./quizContext";
// For importing functions that we have created, we can't use {}
import Question from "./Question"

const Quiz = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    console.log('quizState', quizState);
    
    return (
        <div className="quiz">
            {/* Results Page After the Quiz */}
            {quizState.showResults && (
            <div className="results">
                <div className="congratulations">Congratulations!</div>
                <div className="results-info">
                    <div>You have Completed the Quiz.</div>
                    <div>
                        You've got {quizState.correctAnswerCount} of {quizState.questions.length} Right.
                    </div>
                    {/* Restart Button at the end of Results Page */}
                    <div className="next-button restart" onClick={() => dispatch({type: "RESTART"})}>Restart</div>
                </div>
            </div>
            )}
            {!quizState.showResults && (
                <div>
                    <div className="score">
                        {/* To check current Question Number */}
                        Question {quizState.currentQuestionIndex + 1} / {quizState.questions.length}
                    </div>
                    <Question />
                    {/* Button to go to next Question */}
                    <div className="next-button" onClick={() => dispatch({type: 'NEXT_QUESTION'})}>Next Question</div>
                </div>
            )}
            
        </div>
    )
}

export default Quiz;