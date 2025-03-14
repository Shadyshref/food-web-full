import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter  from './routes/userRoute.js';
import cartRouter from './routes/cartRoute.js';
import"dotenv/config.js"
import orderRouter from './routes/orderRoute.js';

const app=express()
const port=5000;




app.use(express.json())
app.use(cors())

connectDB();

app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get('/api/order/list', (req, res) => {
    res.json({
      success: true,
      data: orders 
    });
  });
  


app.listen(port,(req,res)=>{
    console.log(`server started on http://localhost:${port}`);
    
})



