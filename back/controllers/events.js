const { event } = require('../models/events')
//const { user } = require('../models/users')
const { v4: uuidv4 } = require('uuid');
exports.addevent = async (req, res) => {
  try {
    console.log(req);
    const cur_event = await event.create({
      uid: uuidv4(), // Генерируем UUID
      title: req.body.title,
      bodyText: req.body.bodyText,
      likes: req.body.likes,
    });
    return res.status(201).send({ message: 'added', uid: cur_event.uid });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

exports.getallevents = async (req, res) => {
  try {
    const events = await event.findAll(); // Используем метод findAll для получения всех мероприятий из базы данных
    return res.status(200).json(events);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

exports.getEventById = async (req, res) => {
  try {
    const eventuid = req.params.uid; // Получаем идентификатор мероприятия из параметров URL
    const cur_event = await event.findByPk(eventuid); // Используем метод findByPk для получения мероприятия по его идентификатору
    if (!cur_event) {
      return res.status(404).send({ message: 'Event not found' });
    }
    return res.status(200).json(cur_event);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
