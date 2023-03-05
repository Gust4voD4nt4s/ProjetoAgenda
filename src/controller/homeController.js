const home = (req, res) => {
    res.render('index')
}

const treatPost = (req, res) => {
    res.send(req.body)
    return;
}

module.exports = {
    home,
    treatPost
}