const express = require("express");
const router = express.Router();


//import controller

const {dummyLink} = require("../controllers/LikeController");
const {createComment} = require("../controllers/CommentController");
const { createPost, getAllPosts } = require("../controllers/PostController");

router.get("/dummyroute",dummyLink);
router.post("/comments/create",createComment)
router.post("/posts/create",createPost);
router.get("/posts",getAllPosts);

//mapping create



//export

module.exports = router;