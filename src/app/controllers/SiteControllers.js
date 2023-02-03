const Course = require("../modules/Course");
class SiteController {
  // [Get] /Home
  home(req, res) {
    Course.find({}, (err, courses) => {
      if (!err) {
        res.json(courses);
      } else {
        res.status(400).json({ error: "Error!!!" });
      }
    });
  }
  // [Get] /Search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
