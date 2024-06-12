const { user } = require ('../models/users.js')
const { event } = require('../models/events.js')
const { favorite } = require('../models/favorites.js')
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
const addToFavorites = async (req, res) => {
  try {
    const current_user = await user.findOne({ where: { uid: req.params.uid } });
    if (!current_user) return res.status(404).send({ message: 'User not found' });
    const current_event = await event.findOne({ where: { uid: req.body.eventUid } });
    if (!current_event) return res.status(404).send({ message: 'Event not found' });
    // Проверяем, существует ли уже запись в таблице favorites
    const existingFavorite = await favorite.findOne({
      where: {
        user_uid: current_user.uid,
        event_uid: current_event.uid
      }
    });
      if (existingFavorite) {
        // Если запись уже существует, удаляем ее из избранного
        await existingFavorite.destroy();
        return res.send({ message: 'Event removed from favorites' });
      } else {
        // Если записи нет, добавляем ее в избранное
        await favorite.create({ user_uid: current_user.uid, event_uid: current_event.uid });
        return res.send({ message: 'Event added to favorites' });
      }
    }
     catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
const getFavorites = async (req, res) => {
  try {
    const token = req.headers['x-access-token'];
    if (!token) {
      return res.status(403).send({ message: 'No token provided.' });
    }
    const favoriteEvents = await favorite.findAll({
      where: { user_uid: req.params?.uid },
      attributes: ['event_uid']
    });
    if (!favoriteEvents || favoriteEvents.length === 0) {
      return res.status(404).send({ message: 'No favorite events found for the user' });
    }
    const favoriteEventsUids = favoriteEvents.map(favorite => favorite.event_uid);
    const eventsInfo = [];
    for (const eventUid of favoriteEventsUids) {
      const eventInfo = await event.findOne({ where: { uid: eventUid } });
      if (eventInfo) {
        eventsInfo.push(eventInfo);
      }
    }
    return res.json(eventsInfo);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
module.exports = {
    getUserByUid,
    updateUserByUid,
    addToFavorites,
    getFavorites
}