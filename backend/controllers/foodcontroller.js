import foodModel from "../models/foodModel.js";
import fs from 'fs'

const addFood=async (req,res)=>{
    if (!req.file) {
    return res.json({ success: false, message: 'No image uploaded' });
}
let image_filename=`${req.file.filename}`

const food=new foodModel({
    name:req.body.name,
    description:req.body.description,
    price:req.body.price,
    category:req.body.category,
    image:image_filename
})
try{
    await food.save();
    res.json({success:true,message:'food added'})

}catch(error){
    console.log(error);
    res.json({success:false,message:'error'})

}


}
    const listFood=async(req,res)=>{
        try{
            const foods=await foodModel.find({})
            res.json({success:true,data:foods})

        }
        catch(error){
            console.log(error);
            res.json({success:false,message:"error"})
            

        }

    }
    const removeFood=async(req,res)=>{
        try{
            const food=await foodModel.findById(req.body.id)
            fs.unlink(`uploads/ ${food.image}`,()=>{})
            await foodModel.findByIdAndDelete(req.body.id)
            res.json({success:true,message:"food removed"})

        }
        catch(error){
            console.log(error);
            res.json({success:false,message:"error"})
            

        }

    }
    const search = async (req, res) => {
        const { name } = req.body;
        
        try {
          const results = await foodModel.find({ name: { $regex: name, $options: 'i' } });
          
          if (results.length === 0) {
            return res.status(404).json({ message: 'no result found' });
          }
      
          res.json(results);
        } catch (err) {
          res.status(500).json({ message: 'error' });
        }
      };
    
export {addFood,listFood,removeFood,search}




