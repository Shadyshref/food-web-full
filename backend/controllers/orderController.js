import orderModel from "../models/orderModel.js";  
import userModel from "../models/userModel.js";     
const placeOrder = async (req, res) => {
    console.log("Received data:", req.body);  
    try {
        if (!req.body.userId || !req.body.items || !req.body.amount || !req.body.address) {
            return res.status(400).json({
                success: false,
                message: "Missing required fields in the request"
            });
        }

        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address,
            status: "food processing",  
            payment: true,  
        });

        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId,{cartData:new Map()})

      

        res.json({
            success: true,
            message: "Order placed successfully",
            orderId: newOrder._id
        });
    } catch (error) {
        console.error("Error while placing order:", error); 
        res.status(500).json({
            success: false,
            message: "Error while placing the order",
            error: error.message,أ
        });
    }
};







const userOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({ userId: req.body.userId });
        res.json({ success: true, data: orders });
    } catch (error) {
        console.log("Error fetching orders:", error);
        res.json({ success: false, message: "Error fetching orders" });
    }
};
const listOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({});
        res.json({ success: true, data: orders });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};
const updateStatus=async(req,res)=>{
try {
    await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status})
    res.json({ success: true, message:"status Updated" });
} catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
}
}



export { placeOrder,userOrders,listOrders,updateStatus};














