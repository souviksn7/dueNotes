const mongoose = require('mongoose')
const peopletomeitemSchema = new mongoose.Schema({
    parentId: String,
    date: String,
    due: Number,
    paid: Number,
    total: Number,
    reason: String
})
module.exports = mongoose.model('peopletomeitem',peopletomeitemSchema)