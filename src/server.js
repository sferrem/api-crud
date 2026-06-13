import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import monthlySaleRoutes from "./routes/monthlySaleRoutes.js";

dotenv.config();

const app = express();
const PORT = 3000;

// Middleware - Uma função que trata as informações recebidas
app.use(express.json());

app.use(monthlySaleRoutes);

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI)
		console.log('MongoDB connected');
	} catch (error){
		console.log(error.message);
		console.log("Error to connect");
	}
}

connectDB();

app.listen(PORT, () => console.log(`The server is running at port ${PORT}`))
