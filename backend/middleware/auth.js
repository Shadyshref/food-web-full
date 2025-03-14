import jwt from 'jsonwebtoken'

const authMiddleWare = async (req, res, next) => {
    const {token} = req.headers 

    if (!token) {
        return res.json({ success: false, message: 'Not Authorized. Please log in again.' });
    }

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = decodedToken.id;
        next();  
    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: 'Invalid token or session expired' });
    }
}



export default authMiddleWare;

















// const authMiddleWare= async (res,req,next)=>{
//     const token = req.headers
//     if(!token){
//          res.json({success:false,message:'Not Authorized login again'})

//     }
//     try {
//         const token_decode=jwt.verify(token,process.env.JWT_SECRET)
//         req.body.userId=token_decode.id;
//         //////نكست معناها ان العملية تمت بنجاح ويستمر فى الاستكمال
//         next()
//     } catch (error) {
//         console.log(error);
//         res.json({success:false,message:'error'})
        
        
//     }

// }











