"use strict"
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
const router = require('express').Router()

// Call Controllers:
const { BlogCategory, BlogPost } = require('../controllers/blog')

// BlogCategory
// ------------------------------------------
router.route('/category')
    .get(BlogCategory.list)
    .post(BlogCategory.create)

router.route('/category/:categoryId')
    .get(BlogCategory.read)
    .put(BlogCategory.update)
    .delete(BlogCategory.delete)
    
// BlogPost
// ------------------------------------------
router.route('/post')
    .get(BlogPost.list)
    .post(BlogPost.create)
router.route('/post/:postId')
    .get(BlogPost.read)
    .put(BlogPost.update)
    .delete(BlogPost.delete)


router.route('category/:categoryId/posts', BlogPost.listCategoryPost)

module.exports = router
