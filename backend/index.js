import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoutes from "./routes/user.routes.js";
import companyRoutes from"./routes/company.routes.js";
import jobRoutes from "./routes/job.routes.js";
import applicationRoutes from "./routes/application.route.js";
import path from "path";

dotenv.config({});

const app = express();


//Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
    origin:'http://localhost:5173',
    credentials:true
}
app.use(cors(corsOptions));

const PORT = process.env.PORT || 8000;


// API's
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/company", companyRoutes);
app.use("/api/v1/job", jobRoutes);
app.use("/api/v1/application", applicationRoutes);


const _dirname = path.resolve();
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(_dirname, '/frontend/dist')));
    app.get('*', (req, res)=>{
        res.sendFile(path.resolve(_dirname, 'frontend', 'dist', 'index.html'));
    });
}else {
    app.get('/', (req, res)=>{
        res.send('API is running');
    })
}



app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server running at port ${PORT}`);
})