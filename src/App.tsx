import React, {useState} from 'react';
import QuestionCard from "./components/QuestionCard";
import {Difficulty,fetchQuizQuestion} from "./components/api";

const App = () => {


    const TOTAL_QUESTIONS = 10;

    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [number, setNumber] = useState(0);
    const [userAnswer, setUserAnswer] = useState([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);


    const startTrivia = async () => {

    };

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

    };

    const nextQuestion = () => {

    };


    return (
        <div className="App">
            <h1> Quiz</h1>
            <button
                className="start"
                onClick={startTrivia}
            >
                Start
            </button>
            <p
                className="score"
            >
                Score
            </p>
            <p>Loading</p>
            {
                // <QuestionCard
                //     questionNr={number + 1}
                //     totalQuestion={TOTAL_QUESTIONS}
                //     question={questions[number].question}
                //     answers={questions[number].answers}
                //     userAnswer={userAnswer ? userAnswer[number] : undefined}
                //     callback={checkAnswer}
                // />
            }
            <button
                className="next"
                onClick={nextQuestion}
            >
                Next
            </button>
        </div>
    );
};

export default App;
