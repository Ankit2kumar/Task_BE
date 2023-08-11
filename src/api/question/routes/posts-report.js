module.exports = {
    routes: [
      {
        method: "POST",
        path: "/posts-report",
        handler: "posts-report.postsReport",
        config: {
          policies: [],
          middlewares: [],
        },
      },
    ],
  };