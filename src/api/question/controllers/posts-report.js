module.exports = {
    async postsReport(ctx) {
      try {
        const data = await strapi
          .service("api::posts-report.posts-report")
          .postsReport();
        console.log(data, "data");
  
        ctx.body = data;
      } catch (err) {
        console.log(err);
        ctx.badRequest("Post report controller error", { moreDetails: err });
      }
    },
  };