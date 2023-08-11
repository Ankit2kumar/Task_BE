'use strict';

/**
 * A set of functions called "actions" for `checkanswer`
 */

module.exports = {
  answerCheck: async (ctx, next) => {
  try {
    console.log("line10 controller::",ctx.request.body);
    // Assuming you have a model named 'Question' with the attribute 'correctAnswer'
    
    const data = await strapi
        .service("api::checkanswer.checkanswer")
        .answerCheck(ctx);
      ctx.body = data;
      console.log("line17 controller::",data);
 } catch (err) {
  ctx.body = err;
  ctx.badRequest("Post report controller error", { moreDetails: err });
 }
 }
};

