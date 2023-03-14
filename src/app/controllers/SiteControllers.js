const Course = require("../modules/Course");
class SiteController {
  // [Get] /Home
  home(req, res, next) {
    Course.find({})
      .lean()
      .then((courses) => res.render("home", { courses }))
      .catch(next);
  }
  // [Get] /Search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
