const newRouter = require("./news");
const siteRouter = require("./site");
const courseRouter = require("./course");

function route(app) {
  app.use("/news", newRouter);
  app.use("/", siteRouter);
  app.use("/search", siteRouter);
  app.use("/course", courseRouter);
}

module.exports = route;
