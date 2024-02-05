const Post = require("../models/postModel")
const Like = require("../models/likeModel")


exports.createLike = async(req,res) => {
    try{
        //fetch data from req body
        const {post,user} = req.body;

        const like = new Like ({
            post,user
        });

        //save the new comment into the database
        const savedLike = await like.save();
        //find the post by id , add the new comment to its comment array
        const updatedPost = await Post.findByIdAndUpdate(post,{$push:{likes:savedLike._id}},
            {new:true}).populate("likes").exec();
        res.json({
            post:updatedPost,
        });
    }


    catch(error){
        return res.status(500).json({
            error:"Error while creating comment"
        });
    }
}

exports.unlikePost = async(req,res) => {
    try{

        const {post,like} = req.body;
        //find and delete the like collection

        const deletedLike = await Like.findOneAndDelete({post:post,_id:like});

        //update the post collection

        const updatedPost = await Post.findByIdAndUpdate(post,{$pull:{likes:deletedLike._id}},{new:true});

        res.json({
            post:updatedPost,
        })
    }

        catch(error){
            return res.status(500).json({
                error:"Error while deleting comment"
            });
    }
}