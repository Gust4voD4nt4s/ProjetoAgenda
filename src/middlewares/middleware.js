const checkCsrfError = (err, req, res, next) => {
    if (err) {
        return res.render('404')
    }
}

const csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    next()
}

module.exports = {
    checkCsrfError,
    csrfMiddleware
}