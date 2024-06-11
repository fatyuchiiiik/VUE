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
const updateUserByUid = async (req, res) => {
    try {
      const userData = req.body;
      const updatedUser = await user.update(userData, { where: { uid: req.params?.uid } });
      if (!updatedUser) return res.status(404).send({ message: 'User not found' });
      return res.json(updatedUser);
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  }
// const updateLike = async (req, res) => {
//     try { 
//         const {likes}= req.body 
//         const currentUser = await user.update({likes: likes}, {where: {uid: req.userUid}})
//         if (!currentUser) return res.status(404)
//         return res.json(currentUser)
//     }catch(error){
//         return res.status(500).send({message: error.message})

//     }
// } 
const addVolonter = async (req, res) => {
    try {
      const email = req.params.email; // Используем req.params.email, если email передается в качестве параметра маршрута
      const current_user = await user.findOne({ where: { email: email } });
      if (!current_user) {
        return res.status(404).json({ message: 'User not found' });
      }
      current_user.security = 'volonter';
      await current_user.save();
      return res.json({ message: 'User updated successfully' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
const addAdmin = async (req, res) => {
    try {
      const email = req.params.email; // Используем req.params.email, если email передается в качестве параметра маршрута
      const current_user = await user.findOne({ where: { email: email } });
      if (!current_user) {
        return res.status(404).json({ message: 'User not found' });
      }
      current_user.security = 'admin';
      await current_user.save();
      return res.json({ message: 'User updated successfully' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
module.exports = {
    getUserByUid,
    updateUserByUid,
    addVolonter,
    addAdmin
}