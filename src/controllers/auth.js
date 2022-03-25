import User from '../models/user';
import jwt from 'jsonwebtoken';

export const signup = async (req, res) => {
    const { email, name, password} = req.body;
    try {
        // kiem tra user co ton tai khong?
        const existUser = await User.findOne({email}).exec();
        if(existUser){
            res.json({
                message: "User đã tồn tại"
            })
        }
        const user = await new User({email, name, password}).save();
        res.json({
            user: {
                _id: user._id,
                email: user.email,
                name: user.name
            }
        })
    } catch (error) {
        
    }
}
export const signin = async (req, res) => {
    const { email, password} = req.body;
    const user = await User.findOne({email}).exec();
    if(!user){
        res.status(401).json({
            message: "User đã tồn tại"
        })
    }
    if(!user.authenticate(password)){
        res.status(401).json({
            message: "Mật khẩu không đúng"
        })
    }
    const token = jwt.sign({email}, "123456", { expiresIn: 60 * 60 });
    res.json({
        token,
        user: {
            _id: user._id,
            email: user.email,
            name: user.name
        }
    })
}