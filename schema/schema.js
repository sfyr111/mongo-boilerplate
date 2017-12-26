require('../index')

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true },
  createTime: { type: Date, default: Date.now },
  sex: String,
  avatar: String,
  vip: Boolean,
}, { collection: 'user' }) // 规定collection name 不为复数形式

const UserModel = mongoose.model('user', UserSchema)

UserModel.create({
  name: 'xiaoyang',
  vip: true,
})