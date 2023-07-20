const User = require("../models/User");
const Post = require("../models/Post");
const Comment = require("../models/comment")
const Like = require("../models/like")
const jwt = require('jsonwebtoken');


exports.createUser = async (req, res) => {
    // jwt
    try {
        const { name, email ,dp} = req.body;
        const existingUser = await User.find({ email: email });
        console.log(existingUser)
        if (existingUser.length > 0) {
            res.status(401).json({ success: false, message: "User already exists" })
            return;
        }
        const user = new User({
            name: name,
            email: email,
            dp: dp
        });
        user.save();
        res.status(200).json({ success: true, user});
    } catch (e) {
        console.log(e);
        res.status(500).json({ success: false, message: e });
    }
}

exports.createPost = async (req,res) =>{
    try {
        const {uid,caption,imgurl} = req.body;
        const post = new Post({
            uid: uid,
            caption : caption,
            imgurl : imgurl
        })
        post.save();
        res.status(200).json({success: true, post: post});

    } catch (error) {
        console.log(error);
        res.status(500).json({success:false,message : error});
    }
}

exports.makeComment = async (req,res) =>{
    try {
        const {pid,comment} = req.body;
        const newcomment = new Comment({
            pid:pid,
            comment :comment
        })
        newcomment.save();
        res.status(200).json({success: true, post: newcomment});

    } catch (error) {
        console.log(error);
        res.status(500).json({success:false,message : error});
    }
}

exports.likepost = async (req,res) =>{
    try {
        const {pid,Uid} = req.body;
        const prevlike = Like.findOne({pid:pid,Uid:Uid})
        if(prevlike!=null){
            res.status(500).json({success: false});
            return;
        }
        const newlike = new Like({
            pid:pid,
            Uid :Uid
        })
        newlike.save();
        res.status(200).json({success: true, post: newlike});

    } catch (error) {
        console.log(error);
        res.status(500).json({success:false,message : error});
    }
}

exports.getPosts = async (req,res) =>{
    try {
        const {pid,Uid} = req.body;
        const prevlike = Like.findOne({pid:pid,Uid:Uid})
        if(prevlike!=null){
            res.status(500).json({success: false});
            return;
        }
        const newlike = new Like({
            pid:pid,
            Uid :Uid
        })
        newlike.save();
        res.status(200).json({success: true, post: newlike});

    } catch (error) {
        console.log(error);
        res.status(500).json({success:false,message : error});
    }
}

// exports.signIn = async (req, res) => {
//     const { email, password } = req.body;
//     // console.og(us)
//     try {
//         const user = await User.findOne({ email });
//         if (user === null) {
//             res.status(400).send({ success: false, message: "User doesn't exist, please register first!" });
//             return;
//         }
//         console.log(user)
//         const isPasswordMatch = password === user.password;

//         if (!isPasswordMatch) {
//             return res.status(400).json({success: false, message: "Password not match"});
//         }
//         const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '3d' },);
//         res.status(200).json({ success: true, data: { user, token }, message: "Login success" });
//     }
//     catch (e) {
//         console.log(e);
//         res.status(500).json({ success: false, message: e });
//     }
// }
