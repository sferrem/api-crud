import mongoose from "mongoose";

const MonthlySaleSchema = new mongoose.Schema({
	month: Number,
	value: Number,
});

export default mongoose.model('MonthlySale', MonthlySaleSchema);
