'use strict';



module.exports = {
    answerCheck: async (ctx) => {
       
      const { questionId, selectedAnswer } = ctx.request.body;
      try {
     
        console.log("line11:",questionId);
      const question = await strapi.db.query('api::question.question').findOne({
        select: ['answer'],
        where: { id:questionId },
      });
      console.log("line16:",question);
  
      if (!question) {
        return ctx.badRequest('Question not found');
      }
  
      const isCorrect = question.answer === selectedAnswer;
  
      return { isCorrect };} 
      catch (err) {
        console.log(err);
        ctx.badRequest("Perrorr", { moreDetails: err });
      }
    },
  };
  