'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = Schema({
  username: String,
  passphrase: String,
  email: String,
  SecurityQ1: String,
  SecurityQ2: String,
});

module.exports = mongoose.model('User', userSchema);
