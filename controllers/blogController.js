const Blog = require('../models/Blog')


exports.createBlog = async (req, res) => {
  try {   
    const blog = await Blog.create(req.body);
    res.status(201).json({ status: "success", data: { blog } });
  } catch (error) {
    res.send(error.errors) 
  }
};


exports.getAllBlogs = async (req, res, next) => {
  const allBlogs = await Blog.find({});
  res.status(200).json({ data: allBlogs });
};

exports.getSingleBlog = async (req, res, next) => {
 try {  
   const blog = await Blog.findById(req.params.id);
   if (!blog) {
     return res.status(400).send(new Error('No blog found with that id'));
   }
   res.status(200).json({ status: "success", data:  blog  });
 } catch (error) {
    res.send(error.errors) 
 }

};


exports.updateBlog = async (req, res, next) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: false,
      new: true,
    });
  
    if (!blog) {
      return res.status(400).json(new Error('No blog found with that id'));
    }
    res.status(200).json({ status: "success", data: blog });
  } catch (error) {
    res.send(error.errors) 
  }
};


exports.deleteBoardMember = async (req, res) => {
  const blog = await Blog.deleteOne({ id: req.body.id });
  if (blog) {
    res.status(200).json({ status: "success" });
  }
};