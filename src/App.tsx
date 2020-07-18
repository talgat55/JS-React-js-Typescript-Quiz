import React, {useState} from 'react';
import {Difficulty, fetchQuizQuestion, QuestionState} from "./components/api";
import QuestionCard from "./components/QuestionCard";

type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
};


const App = () => {


    const TOTAL_QUESTIONS = 10;

    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState<QuestionState[]>([]);
    const [number, setNumber] = useState(0);
    const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);


    const startTrivia = async () => {
        setLoading(true);
        setGameOver(false);

        const newQuestion = await fetchQuizQuestion(TOTAL_QUESTIONS, Difficulty.EASY);
        setQuestions(newQuestion);
        setScore(0);
        setUserAnswer([]);
        setNumber(0);
        setLoading(false);
    };

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

    };

    const nextQuestion = () => {

    };


    return (
        <div className="App">
            <h1> Quiz</h1>
            {
                gameOver || userAnswer.length === TOTAL_QUESTIONS ? (<button
                        className="start"
                        onClick={startTrivia}
                    >
                        Start
                    </button>)
                    :
                    null
            }
            {!gameOver &&
            <p
                className="score"
            >
                Score
            </p>}

            {loading && <p>Loading</p>}
            {!loading && !gameOver && (
                <QuestionCard
                    questionNr={number + 1}
                    totalQuestion={TOTAL_QUESTIONS}
                    question={questions[number].question}
                    answers={questions[number].answers}
                    userAnswer={userAnswer ? userAnswer[number] : undefined}
                    callback={checkAnswer}
                />
            )
            }

            {
                !gameOver && !loading && userAnswer.length === number + 1 && number !== TOTAL_QUESTIONS - 1  &&
            <button
                className="next"
                onClick={nextQuestion}
            >
                Next
            </button>
            }

        </div>
    );
};

export default App;
