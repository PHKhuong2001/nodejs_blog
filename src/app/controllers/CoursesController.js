const Course = require("../modules/Course");

class CoursesController {
  course(req, res) {
    Course.findOne({ slug: req.params.slug })
      .lean()
      .then((course) => {
        res.render("courses/show", { course });
      });
  }
  create(req, res, next) {
    res.render("courses/create");
  }
  store(req, res, next) {
    const formData = req.body;
    const course = new Course(formData);
    course.save();
    res.send("Course Save!");
  }
}
module.exports = new CoursesController();
