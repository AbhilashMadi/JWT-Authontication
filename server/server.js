const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
require("./db/connectDB");

const app = express();
const PORT = process.env.PORT || 3000;

// import routes
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// defining routes
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.use((error, request, response, next) => {
    console.error(error);
    response.status(500).json({ error: 'Internal server error.' })
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});
