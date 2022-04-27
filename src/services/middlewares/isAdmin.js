import { verifyJWT } from "../../utils/jwt"

export const isAdmin = (req,res,next) =>{
    try{
        const token = req.headres["authorization"].split("")[1];
        const data = verifyJWT(token);
        if()
    catch (error){
            return res.json({
                data: {},
                success: false,
                message: "Unauthorized",
            });
        }
    }
};