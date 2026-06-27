const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Health Check
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Blog Platform Backend Running Successfully 🚀"
    });
});

// Register (Dummy)
app.post("/api/register", (req, res) => {
    res.json({
        success: true,
        message: "User Registered Successfully"
    });
});

// Login (Dummy)
app.post("/api/login", (req, res) => {
    res.json({
        success: true,
        message: "Login Successful"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});