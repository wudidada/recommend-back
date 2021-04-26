const router = require("koa-router")();
const { Movie, TV, Question, QuestionType } = require("../models/movie");

const { MovieGeners, TVGeners, CountryMap } = require("../models/map");

const TypeMap = {
  country: "production_countries.iso_3166_1",
  movie_gener: "genres.id",
};

router.get("/movie", async (ctx, next) => {
  const id = Number(ctx.request.query.id);
  console.log("id=" + id);
  ctx.body = await Movie.findOne({ id });
});

router.get("/tv", async (ctx, next) => {
  const id = Number(ctx.request.query.id);
  console.log("id=" + id);
  ctx.body = await TV.findOne({ id });
});

router.get("/random_movie", async (ctx, next) => {
  const movies = await Movie.find({}, "id -_id").lean();
  const index = Math.floor(Math.random() * movies.length);
  const id = movies[index].id;
  console.log(id);
  ctx.body = await Movie.findOne({ id });
});

router.get("/questions", async (ctx, next) => {
  ctx.body = await Question.find().lean();
});

router.get("/recommend", async (ctx, next) => {
  console.log(ctx.request.query);
  let index = 1;
  const query = {};
  for (const [key, value] of Object.entries(ctx.request.query)) {
    if (key == "index") {
      index = Number(value);
    } else {
      query[key] = Number(value) || value;
    }
  }

  console.log(query);
  const result = await Movie.find(query)
    .skip(index - 1)
    .limit(1)
    .lean();
  if (result.length == 0) {
    ctx.status = 500;
  }
  ctx.body = result[0] || {};
});

router.get("/question", async (ctx, next) => {
  const index = Number(ctx.request.query.index) || 1;
  const res = await Question.find()
    .skip(index - 1)
    .limit(1)
    .lean();
  let question = res[0];
  if (question) {
    const questionType = await QuestionType.findOne({
      type: question.type,
    }).lean();
    question.desc = questionType.desc;
  } else {
    question = {};
  }
  ctx.body = question;
});

router.post("/add_question", async (ctx, next) => {
  const question = new Question(ctx.request.body);
  const result = await question.save();
  ctx.body = { _id: question._id };
});

router.post("/update_question", async (ctx, next) => {
  const question = new Question(ctx.request.body);
  console.log(question._id);
  const result = await question.updateOne(question);
  ctx.body = { _id: question._id };
});

router.post("/del_question", async (ctx, next) => {
  const _id = ctx.request.body._id;
  console.log(_id);
  const result = await Question.deleteOne({ _id });
  ctx.body = { _id };
});

router.get("/questiontypes", async (ctx, next) => {
  ctx.body = await QuestionType.find().lean();
});

router.post("/add_question_type", async (ctx, next) => {
  const question = new QuestionType(ctx.request.body);
  result = await question.save();
  ctx.body = { _id: question._id };
});

router.post("/update_question_type", async (ctx, next) => {
  const question = new QuestionType(ctx.request.body);
  console.log(question._id);
  const result = await question.updateOne(question);
  ctx.body = { _id: question._id };
});

router.post("/del_question_type", async (ctx, next) => {
  const _id = ctx.request.body._id;
  console.log(_id);
  const result = await QuestionType.deleteOne({ _id });
  ctx.body = { _id };
});

router.get("/options", async (ctx, next) => {
  const type = ctx.request.query.type;
  if (type == "movie_gener") {
    ctx.body = { fieldName: TypeMap[type], options: MovieGeners };
    return;
  }

  const db = Movie;
  if (type.startsWith("tv")) {
    db = TV;
  }
  const fieldName = TypeMap[type];
  const fileds = await db.distinct(fieldName);
  const options = [];
  if (type == "country") {
    fileds.forEach((value) =>
      options.push({ value, label: CountryMap[value] || value })
    );
  } else {
    fileds.forEach((value) => options.push({ value, label: value }));
  }
  ctx.body = { fieldName, options };
});

module.exports = router;
