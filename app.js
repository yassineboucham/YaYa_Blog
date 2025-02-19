// app.js
import express from "express";
import indexRoutes from "./routes/index.js";
import tendenceRoutes from "./routes/tendence.js";
import logYouBlogRoutes from "./routes/logYourBlog.js";

const app = express();

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Serve static files
app.use(express.static("public"));

// Use Routes
app.use("/", indexRoutes);
app.use("/tendence", tendenceRoutes); // Ensure this line is present
app.use("/logyourblog", logYouBlogRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));