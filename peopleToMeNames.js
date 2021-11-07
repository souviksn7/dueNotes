const mongoose = require('mongoose');
const peopletomenameSchema = new mongoose.Schema({
    name: String
});
module.exports = mongoose.model('peopletomename',peopletomenameSchema)