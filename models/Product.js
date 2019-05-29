var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  product_id: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Product', ProductSchema);
