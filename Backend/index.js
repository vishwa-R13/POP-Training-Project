const express = require("express");
const mdb = require("mongoose");
const dotenv = require("dotenv");
const signup = require("./models/signupSchema");
const bcrypt = require("bcrypt");
const cors = require("cors");
const jwt = require("jsonwebtoken");  
const app = express();
const allowedOrigins = [
  'http://localhost:5173',
  'https://pop-training-project.vercel.app/',
];
app.use(
  cors({
    origin:allowedOrigins,
    credentials: true,
    methods: ["GET", "POST"],
  })
);
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3007;
dotenv.config();

const verifyTok = (req,res,next) =>{
  console.log("Middleware Check");
  const token = req.headers.authorization
  if(!token){
    res.json("Request Denied")
  }
  try{
    console.log(token)
    const payload = jwt.verify(token,process.env.SECRET_KEY)
    console.log(payload.Name)
    Name = payload.Name
    next()
  }
  catch(err){
    res.send("Either token is expired/ Token is itself wrong")
  }
}

mdb
  .connect(process.env.MONGODB_URL) // if it doesn't connect with localhost replace it with 127.0.0.1 ip address
  .then(() => {
    console.log("MDB connection successful");
  })
  .catch((err) => {
    console.log("Check your connection string", err);
  });

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Backend Server</h1>");
});

app.get("/static", verifyTok,(req, res) => {
  res.sendFile("/mern stack/Backend/index.js");
});

app.post("/signup", async (req, res) => {
  try {
    console.log(req.body);
    const { Name, email, password, confirmPassword } = req.body;
    console.log(Name,email,password,confirmPassword);
    const newSignup = new signup({
        Name:Name,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
    });
    newSignup.save();
    console.log("Signup Successful");
    res.status(201).json({ message: "Signup Successful", isSignup: true });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(400).json({ message: "Signup Unsuccessful", isSignup: false });
  }
});

app.get("/getsignupdate",verifyTok, async (req, res) => {
  const signup = await signup.find(); //Signup.find()
  console.log(signup);
  res.send("signup details fetched");
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await signup.findOne({ email: email });
    console.log(existingUser);
    if (existingUser) {
      const payload = {
        Name: existingUser.Name,
        email: existingUser.email,
      };
      const isValidPassword = await bcrypt.compare(
        password,
        existingUser.password
      );
      console.log(isValidPassword);
      if (isValidPassword) {
        const token = jwt.sign(payload, process.env.SECRET_KEY, {
          expiresIn: "45m"
        });
        res.status(201).json({ message: "Login Succesful", isLoggedIn: true,token: token, });
      } else {
        res
          .status(201)
          .json({ message: "Incorrect Password", isLoggedIn: false });
      }
    } else {
      res
        .status(201)
        .json({ message: "User not found, Signup first", isLoggedIn: false });
    }
  } catch (error) {
    console.log("Login error");
    res
      .status(400)
      .json({ message: "Login Error Check Your Code", isLoggedIn: false });
  }
});

app.listen(PORT, () => {
  console.log("Server started successfully.");
});
