const {auth} = require('../../models/auths')

checkDuplicateEmail = async(req, res, next) => {
    console.log(req.body);
    const user = await auth.findOne( { where: { email: req.body.email.toLowerCase() }})
    console.log(user)
    if (user) return res.status(413).send({ message: 'Email is already in use!'})
    next()
};

const verifySignUp = {
    checkDuplicateEmail
}

module.exports = verifySignUp