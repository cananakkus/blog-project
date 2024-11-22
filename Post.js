const showPost = (req, res, next) => {
    const postID = req.params.id;
    const postTitle = "My first blog post " + postID ; // get from database

    console.log('test');

    res.render('pages/post', {
        title: postTitle,
        postTitle
    });
};




module.exports = {
    showPost
}
