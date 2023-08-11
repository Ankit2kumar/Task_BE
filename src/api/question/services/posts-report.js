module.exports = {
    postsReport: async (questionId, selectedAnswer) => {
      try {
        // fetching data
        console.log(questionId);
        const question = await strapi.query('question').findOne({ id: questionId });
  
        if (!question) {
          return { error: 'Question not found.' };
        }
  
        const correctAnswer = question.answer; 
  
        const isCorrect = selectedAnswer === correctAnswer;
  
        return { correct: isCorrect };
      } catch (error) {
        return { error: 'An error occurred while checking the answer.' };
      }
    },
  };