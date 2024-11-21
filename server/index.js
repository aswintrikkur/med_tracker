import express from "express";


const port = 3000;

const app = express();

//middlewares
app.use(express.json());



//routes
app.get("/", (req, res, next) => {
    res.json("hello world");
});




app.listen(port, () => {
    console.log(`server running on  http://localhost:${port}`);
});
