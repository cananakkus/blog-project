
module.exports = (req, res) => {
    res.status(404);
    res.render('pages/error', { title: '404' });
}
