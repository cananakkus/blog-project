
const showHome = (req, res) => {
    const posts = []; // get posts from database

    const categories = require('../data/categories.json')
    console.log(categories);

    res.render('pages/home', {
        title: 'Home',
        categories
    });

};


module.exports = {
    showHome
};
