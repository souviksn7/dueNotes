const mongoose = require('mongoose');
const metopeoplenameSchema = new mongoose.Schema({
    name: String
});
module.exports = mongoose.model('metopeoplename',metopeoplenameSchema)