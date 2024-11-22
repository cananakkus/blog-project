//!! benim eklediğim kısım 
const showCategory =(req, res, next) => {
    const categoryID = req.params.id;
    
    console.log(categoryID);

    const categories = require('../data/categories.json')

    
    res.render('pages/category', {
        title: categoryID,
        categoryName: categoryID,
        categories
    });
};

module.exports = {
    showCategory
}