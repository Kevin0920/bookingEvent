var mongoose = require('mongoose');
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;


var UserSchema = new mongoose.Schema({
    first_name: { type: String, required:true },
    last_name: { type: String, required:true },
    email: { type: String, required:true },
    location: { type: String, required:true },
    password: {type: String, require: true},
    _events: [ {type: Schema.Types.ObjectId, ref:"Event"} ],
    _comments: [ { type: mongoose.Schema.ObjectId, ref: 'Comment' } ],
}, {timestamps: true});

var User = mongoose.model('User', UserSchema);

var EventSchema = new mongoose.Schema({
    eventName: { type: String, required: true },
    date: { type: Date, default: Date.now },
    price: Number,
    location: { type: String, required: true },
    _host: { type: Schema.Types.ObjectId, ref: "User" },
    _comment: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    users: [ {type: mongoose.Schema.ObjectId, ref: 'User'} ],
    _join_user: [ {type: mongoose.Schema.ObjectId, ref: 'User'} ],
    _unjoin_user: [ {type: mongoose.Schema.ObjectId, ref: "User"} ],

}, {timestamps: true});

var Event = mongoose.model('Event', EventSchema);

var CommentSchema = new mongoose.Schema({
    content: { type: String, required:true },
    _event: { type: mongoose.Schema.ObjectId, ref: "Event"},
    // other message poster 
    _message_poster: {type: mongoose.Schema.ObjectId, ref: "User"} ,
    
}, {timestamps: true});

var Comment = mongoose.model('Comment', CommentSchema);