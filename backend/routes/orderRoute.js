import { listOrders, placeOrder,updateStatus,userOrders } from "../controllers/orderController.js";
import express from "express"
import authMiddleWare from '../middleware/auth.js'


const orderRouter=express.Router()


orderRouter.post("/place",authMiddleWare,placeOrder)
orderRouter.post('/userorders', authMiddleWare,userOrders);
orderRouter.get('/list', listOrders);
orderRouter.post('/status', updateStatus);




export default orderRouter;
