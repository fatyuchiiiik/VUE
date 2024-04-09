const { user } = require ('../models/users.js')
const getUserByUid = async(req,res) => {
    try {
        const currentUser = await user.findOne({ where: { uid: req.userUid}})
        if (!currentUser) return res.status(404)
        return res.json(currentUser)
    }catch (error){
        return res.status(500).send({ message: error.message})
    }
} 
const updateLike = async (req, res) => {
    try { 
        const {likes}= req.body 
        const currentUser = await user.update({likes: likes}, {where: {uid: req.userUid}})
        if (!currentUser) return res.status(404)
        return res.json(currentUser)
    }catch(error){
        return res.status(500).send({message: error.message})

    }
} 

module.exports = {
    getUserByUid,
    updateLike
}