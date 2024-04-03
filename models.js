const mongoose = require('mongoose');

// Define schemas
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  image: String,
  chats: [{
    chatId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Chat'
    },
    nickname: String,
    inbox: Boolean,
    outgoing: Boolean,
    favorite: Boolean,
    draft: Boolean,
    deleted: Boolean,
    tags: [String]
  }]
});

const messageSchema = new mongoose.Schema({
  chat: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chat'
  },
  date: {
    type: Date,
    default: Date.now
  },
  content: String,
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const chatSchema = new mongoose.Schema({
  topic: String,
  participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
});

// Define models
const userModel = mongoose.model('User', userSchema);
const messageModel = mongoose.model('Message', messageSchema);
const chatModel = mongoose.model('Chat', chatSchema);


module.exports = { userModel, messageModel, chatModel };
