const newRouter = require("./news");
const siteRouter = require("./site");
const courseRouter = require("./course");
const me = require("./me");

function route(app) {
  app.use("/news", newRouter);
  app.use("/", siteRouter);
  app.use("/search", siteRouter);
  app.use("/courses", courseRouter);
  app.use("/me", me);
}

module.exports = route;
