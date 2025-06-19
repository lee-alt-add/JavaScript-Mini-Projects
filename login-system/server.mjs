// server.js
import express from "express";
import session from "express-session";
import bcrypt from "bcrypt";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

const users = []; // in-memory "database"

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); // to handle form data
app.use(session({
  secret: "secret-key",
  resave: false,
  saveUninitialized: false,
}));

// View routes
app.get("/", (req, res) => res.redirect("/login"));

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/views/register.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/views/login.html");
});

app.get("/dashboard", (req, res) => {
  if (!req.session.userId) return res.redirect("/login");
  res.sendFile(__dirname + "/views/dashboard.html");
});

// Logic routes
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const userExists = users.find(u => u.username === username);
  if (userExists) return res.send("User already exists");

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ id: Date.now(), username, password: hashedPassword });
  res.redirect("/login");
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user) return res.send("Invalid username or password");

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.send("Invalid username or password");

  req.session.userId = user.id;
  res.redirect("/dashboard");
});

app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/login");
  });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
