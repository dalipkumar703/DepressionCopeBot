var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

module.exports =mongoose.model('QuickReply',
               new Schema({
                 title:String,
                 payload:String,
                 payload_for:String

               }),
               'quick_reply');
