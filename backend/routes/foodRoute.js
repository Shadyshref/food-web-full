import express from 'express'
import { addFood,listFood,removeFood, search } from '../controllers/foodcontroller.js'
import multer from 'multer'


const foodRouter=express.Router()
const storage=multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)

    }
})
const upload=multer({storage:storage})



foodRouter.post('/add', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ success: false, message: 'Image is required.' });
    }

    addFood(req, res);
});
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFood)
foodRouter.post("/search",search)



export default foodRouter;


