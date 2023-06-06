require("../lib/connection");
const Post = require("../models/Post");

// POST Post
exports.createPost = async (req, res) => {
    try {
      const { title, content, author } = req.body;
  
      const post = new Post({
        title,
        content,
        author,
      });
  
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
      const posts = await Post.find().populate("author");
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