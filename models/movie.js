const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const schema = new mongoose.Schema(
  { any: {} },
  {
    versionKey: false,
    strict: false,
  }
);

schema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  return object;
});

const Movie = mongoose.model("movies", schema, "movies");
const TV = mongoose.model("tvs", schema, "tvs");
const MovieGeners = mongoose.model("movie_geners", schema, "movie_geners");
const TVGeners = mongoose.model("tv_geners", schema, "tv_geners");
const Question = mongoose.model("question", schema, "question");
const QuestionType = mongoose.model("question_type", schema, "question_type");

module.exports = {
  Movie,
  TV,
  MovieGeners,
  TVGeners,
  Question,
  QuestionType,
};
