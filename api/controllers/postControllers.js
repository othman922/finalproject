require("../lib/connection");
const Post = require("../models/Post");
const cloudinary = require("../lib/cloudinary");
const User = require("../models/Users");

// POST Post
exports.createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const image = req.file.path;

    const admin = await User.findOne({ isAdmin: true });

    if (!admin) {
      return res.status(500).send("Admin user not found");
    }

    const post = new Post({
      title,
      content,
      image,
      author: admin._id,
    });

    const uploadImage = await cloudinary.uploader.upload(req.file.path, {
      public_id: `post_${post._id}`,
      folder: `post/${post.name}`,
    });

    post.image = uploadImage.secure_url;


    await post.save();

    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred.");
  }
};

// GET All Posts
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find({}, "-author").populate("author");
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred.");
  }
};

// GET Post by ID
exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate("author");
    if (!post) {
      return res.status(404).send("Post not found");
    }
    res.status(200).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred.");
  }
};

// UPDATE Post
exports.updatePost = async (req, res) => {
  try {
    const { title, content } = req.body;

    const existingPost = await Post.findById(req.params.id);

    if (!existingPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (existingPost.image) {
      const publicId = existingPost.image.split("/").pop().split(".")[0];
      await cloudinary.uploader.destroy(publicId);
    }

    if (req.file) {
      const uploadResult = await cloudinary.uploader.upload(req.file.path, {
        folder: `post/${name}`,
      });
      existingPost.image = uploadResult.secure_url;
    }

    existingPost.title = title;
    existingPost.content = content;

    const updatedPost = await existingPost.save();

    res.status(200).json(updatedPost);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred.");
  }
};

// DELETE Post
exports.deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByIdAndDelete(id);

    res.status(200).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred.");
  }
};