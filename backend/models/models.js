const mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  fName: {
    type: String,
    required: true
  },
  lName: {
    type: String,
    required: true
  },
  imgURL: {
    type: String
  },
  aboutMe: {
    type: String
  },
  stats: {
    type: Array
  },
  phone: {
    type: String
  },
  pendingRequests: {
    type: Array,
    default: []
  }
});

var itemSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  // categories: {
  //   type: Array,
  // },
  imgURL: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  pending: {
    type: Boolean,
    default: false
  }
});

var communitySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  users: [{
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  }],
  items: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Item',
  }],
  requests: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Request'
  }],
});

var requestSchema = mongoose.Schema({
  requester: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  text: {
    type: String,
    required: true
  },
  datePosted: {
    type: Date,
    required: true
  }
});

var User = mongoose.model('User', userSchema);
var Item = mongoose.model('Item', itemSchema);
var Community = mongoose.model('Community', communitySchema);
var Request = mongoose.model('Request', requestSchema);

module.exports = {
  User: User,
  Item: Item,
  Community: Community,
  Request: Request
};
