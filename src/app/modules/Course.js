const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    level: { type: String },
    slug: { type: String, slug: "name" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("courses", Course);
