
module.exports = {
  routes: [
    {
      method: "POST",
      path: "/checkanswer",
      handler: "checkanswer.answerCheck",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};