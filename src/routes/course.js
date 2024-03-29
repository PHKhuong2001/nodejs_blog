const express = require("express");
const router = express.Router();

const CoursesController = require("../app/controllers/CoursesController");
router.get("/create", CoursesController.create);
router.post("/store", CoursesController.store);
router.get("/:id/edit", CoursesController.edit);
router.put("/:id", CoursesController.update);
router.delete("/:id", CoursesController.remove);
router.get("/:slug", CoursesController.course);
module.exports = router;
