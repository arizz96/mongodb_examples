var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BearSchema = new Schema({
  name: String
});

module.expors = mongoose.model('Bear', BearSchema);
