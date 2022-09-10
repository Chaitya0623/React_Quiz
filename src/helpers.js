// To shuffles options for each attempt
export const shuffleAnswers = (question) => {
    const unshuffledAnswers = [
        question.correctAnswer,
        ...question.incorrectAnswers,
    ];
    // math.random is used to shuffle 
    return unshuffledAnswers.map(answer => ({sort: Math.random(), value: answer}))
    .sort((a,b) => a.sort - b.sort)
    .map(obj => obj.value);
};

