const { Router } = require('express')
const router = Router()
const Controller = require('../controllers/blogController');


// get all blogs
router.get('/allblogs',Controller.getAllBlogs)
// get single blog by id
router.get('/blogs/:id', Controller.getSingleBlog)
// create new blog
router.post('/addblog', Controller.createBlog)
// update blog
router.put('/updateblog/:id', Controller.updateBlog)
// delete a blog
router.delete('/deleteblog/:id', Controller.deleteBoardMember)


module.exports = router