import MonthlySale from "../models/MonthlySale.js";

// CREATE
// /sales
export const createSale = async (req, res) => {
	try{
		const newMonthlySale = await MonthlySale.create(req.body);
		res.json(newMonthlySale);
	} catch (error){
		console.log("error");
		res.send({ error: error });
	}

}

// READ
// /sales
export const getSales =  async (req,res) =>{
	try{
		const monthlySales = await MonthlySale.find();
		res.json(monthlySales);
	} catch {
		res.json({ error: error });

	}
}
// UPDATE
// /sales/:id
export const updateSale = async (req,res) =>{
	try{
		const updatedMonthlySale = await MonthlySale.findByIdAndUpdate(
			req.params.id,
			req.body
		);
		res.json(updatedMonthlySale);
	} catch {
		res.json({ error: error });
	}
}

// DELETE
// /sells/:id
export const deleteSale = async (req,res) =>{
	try{
		const monthlySaleToDelete = await MonthlySale.findByIdAndDelete(
			req.params.id,
		);
		res.json(monthlySaleToDelete);
	} catch {
		res.json({ error: error });
	}
}
