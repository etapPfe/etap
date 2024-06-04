const { Message } = require('../database-mysql/index');

const getMessages = async (req, res) => {
    try {
        const messages = await Message.findAll();
        res.status(200).json(messages);
    } catch (error) {
        console.error('Error fetching messages:', error);
        res.status(500).json({ error: 'Failed to fetch messages' });
    }
};

const postMessage = async (req, res) => {
    try {
        const body = req.body;
        const message = await Message.create(body);
        res.status(201).json(message);
    } catch (error) {
        console.error('Error sending message:', error);
        res.status(500).json({ error: 'Failed to send message' });
    }
};

const deleteMessage = async (req, res) => {
    try {
        const { id } = req.params;
        const message = await Message.findOne({ where: { id } });
        if (message) {
            await message.destroy();
            res.status(200).json({ message: 'Message deleted successfully' });
        } else {
            res.status(404).json({ error: 'Message not found' });
        }
    } catch (error) {
        console.error('Error deleting message:', error);
        res.status(500).json({ error: 'Failed to delete message' });
    }
};

module.exports = {
    getMessages,
    postMessage,
    deleteMessage
};