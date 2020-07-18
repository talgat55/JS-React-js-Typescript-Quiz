import {shuffleArray} from "../UTILS";

export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answer: string[];
    question: string;
    type: string;
};

export type QuestionState = Question & { answers: string[] };


export enum Difficulty {
    EASY = 'easy',
    MEDIUM = 'medium',
    HARD = 'hard'
};

export const fetchQuizQuestion = async (amount: number, difficulty: Difficulty) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficult=${difficulty}&type=multiple`;
    const data = await (await fetch(endpoint)).json();
    console.log(data);
    return data.results.map((question: Question) => {
        return {
            ...question,
            answers: shuffleArray([...question.incorrect_answer, question.correct_answer])
        };
    })
};