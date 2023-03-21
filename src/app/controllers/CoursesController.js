const Course = require("../modules/Course");

class CoursesController {
  // [GET] /course/:slug
  course(req, res) {
    Course.findOne({ slug: req.params.slug })
      .lean()
      .then((course) => {
        res.render("courses/show", { course });
      });
  }

  // [POST] /course/create
  create(req, res, next) {
    res.render("courses/create");
  }

  // [PUT] back to /me/stored/courses
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .lean()
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }

  //[DELETE]
  remove(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .lean()
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }

  // [GET] /course/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .lean()
      .then((course) => res.render("courses/edit", { course }))
      .catch(next);
  }

  // [POST] /me/stored/courses
  store(req, res, next) {
    const formData = req.body;
    const course = new Course(formData);
    course.save();
    res.send("Course Save!");
  }
}
module.exports = new CoursesController();
