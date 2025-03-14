import userModel from "../models/userModel.js";

const addToCart = async (req, res) => {
    try {
      const userData = await userModel.findById(req.body.userId);
      if (!userData) {
        return res.status(404).json({ success: false, message: "user not found" });
      }
  
     
      let cartData =await userData.cartData || new Map();
  
     const itemId=req.body.itemId
     if(cartData.has(itemId)){
        cartData.set(itemId,cartData.get(itemId)+1)
     }else{
        cartData.set(itemId,1)
     }
     userData.cartData=cartData
     await userData.save()
     
      return res.json({ 
        success: true, 
        message: "Add to cart",
      });
  
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ 
        success: false, 
        message: "error" 
      });
    }
  };






    const removeFromCart = async (req, res) => {
        try {
            const userData=await userModel.findById(req.body.userId)
            const cartData=await userData.cartData || new Map()
         const itemId=req.body.itemId
           if(!cartData.has(itemId)){
            return res.json({success:false,message:"no item exist"})

           }
           const currentitem=cartData.get(itemId)
           if(currentitem>0){
            cartData.set(itemId,currentitem-1)

           }else{
            cartData.delete(itemId)
           }
           userData.cartData=cartData
           await userData.save();

           return res.json({success:true,message:"item removed"})

        } catch (error) {
            console.log(error);
            res.json({success:false,message:"error"})
            
            
        }
    }
const getCart= async(req,res)=>{
    try {
        const userData=await userModel.findById(req.body.userId)
            const cartData=await userData.cartData || new Map()
            res.json({success:true,cartData})
    } catch (error) {
        console.log(error);
            res.json({success:false,message:"error"})
            
        
    }

}

export {addToCart,removeFromCart,getCart}

