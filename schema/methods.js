require('../index')
// 实例方法
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var animalSchema = new Schema({ name: String, type: String });

// 实例方法
animalSchema.methods.findSimilarTypes = async function() {
  // this 为调用此方法的Model 实例对象
  return this.model('Animal').find({ type: this.type })
};

// 静态方法
animalSchema.statics.findByName = async function(name) {
  return this.find({ name })
}

var Animal = mongoose.model('Animal', animalSchema);
/* 
// 添加数据
Animal.create({ name: 'woff', type: 'dog' })
Animal.create({ name: 'tom', type: 'cat' })
 */
var dog = new Animal({ type: 'dog' });

// dog.findSimilarTypes().then(data => console.log(data.name)) // woff
Animal.findByName('tom').then(data => console.log(data))