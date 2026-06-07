import "dotenv/config";
import  express from "express";
import path from "path";
import AnalyzeRouter from "./routes/analyze_routes";


const app = express();


app.use(express.json({ limit: "1mb"}));

app.use(
    express.static(
        path.join(__dirname, "public")
    )
);

app.use("/analyze", AnalyzeRouter);


app.listen(3000, () => {
    console.log("Server is running on port 3000");
})