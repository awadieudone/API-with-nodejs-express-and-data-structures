import express from "express";
import Reflection from "./src/controllers/Reflection";
import bodyParser from "body-parser";
import logger from 'morgan';
import path from 'path';
import cookieParser from 'cookie-parser';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));

app.post("/api/v1/reflections", Reflection.postOne);
app.get("/api/v1/reflections", Reflection.getAll);
app.get("/api/v1/reflections/:id", Reflection.getOne);
app.put("/api/v1/reflections/:id", Reflection.update);
app.delete("/api/v1/reflections/:id", Reflection.delete);


app.get("/", (req, res) => {
  return res
    .status(200)
    .send({ message: "YAY! Congratulations! Your first endpoint is working" });
});

app.listen(3000);
console.log("app running on port ", 3000);
