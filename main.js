import express from "express";
import movieRoutes from "./routes/movies.route.js";
import connectDB from "./lib/db.js";

const app = express();
const PORT = 6969;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.get("/", (req, res) => {
  res.send("<h1>hello</h1>");
});

app.use("/movies", movieRoutes);

app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});
