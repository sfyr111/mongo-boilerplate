require('../index')
// 实例方法
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var animalSchema = new Schema({ name: String, type: String });

// 实例方法
animalSchema.methods.findSimilarTypes = async function() {
  // this 为调用此方法的Model 实例对象
  return this.model('Animal').findOne({ type: this.type })
};

// 静态方法
animalSchema.statics.findByName = async function(name) {
  return this.findOne({ name })
}

var Animal = mongoose.model('Animal', animalSchema);
/* 
// 添加数据
Animal.create({ name: 'woff', type: 'dog' })
Animal.create({ name: 'tom', type: 'cat' })
 */
var dog = new Animal({ type: 'dog' });

dog.findSimilarTypes().then(animal => console.log(animal.name)) // woff
Animal.findByName('tom').then(animal => console.log(animal.name)) // tom