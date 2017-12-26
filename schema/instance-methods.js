require('../index')
// 实例方法
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var animalSchema = new Schema({ name: String, type: String });

animalSchema.methods.findSimilarTypes = async function() {
  return this.model('Animal').find({ type: this.type })
};

var Animal = mongoose.model('Animal', animalSchema);
/* 
// 添加数据
Animal.create({ name: 'woff', type: 'dog' })
Animal.create({ name: 'tom', type: 'cat' })
 */
var dog = new Animal({ type: 'dog' });

dog.findSimilarTypes().then(dta => console.log(dta))