var mongoose = require('mongoose');
var path = require("path");

var User = mongoose.model("User");
var Event = mongoose.model("Event");
var Comment = mongoose.model("Comment");

module.exports = {
  register: function (req, res) {
    console.log("from controller register: ", req.body);
    User.findOne({
      email: req.body.email
    }, function (err, user) {
      console.log("from controller reg user: ", user);
      if (err) {
        console.log("register error from controller ");
      } else {
        if (user === null) {
          var user = new User({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            location: req.body.location,
            email: req.body.email,
            password: req.body.password
          });
          user.save(function (err, user) {
            if (err) {
              console.log("from controller reg: ", err);
            } else {
              res.json({
                success: "success",
                user: user
              });
            }
          })
        }
      }
    })
  },

  login: function (req, res) {
    console.log(req.body);
    console.log("from controller login: ", req.body.email);
    User.findOne({
      email: req.body.email,
      password: req.body.password
    }, function (err, user) {
      if (err) {
        console.log("can't find this user email from controller", err);
      } else {
        if (user === null) {
          res.json({
            message: "can't find this email",
            user: null
          });
        } else {
          if (user.password === req.body.password) {
            res.json({
              message: "success",
              user: user
            });
          } else {
            res.json({
              message: "The password is incorrect",
              user: null
            });
          }
        }
      }
    })
  },

  update: function (req, res) {
    // console.log("b-e update", req.params.id);
    User.findOne({
      _id: req.params.id
    }, function (err, data) {
      if (err) {
        console.log("can't find update user", err);
      } else {
        data.first_name = req.body.first_name;
        data.last_name = req.body.last_name;
        data.email = req.body.email;
        data.location = req.body.location;
        data.save(function (err) {
          if (err) {
            console.log("can't update user", err);
          } else {
            console.log(data);
            res.json({
              data: data
            });
          }
        })
      }
    })
  },

  createEvent: function (req, res) {
    User.findOne({
      _id: req.params.id
    }, function (err, user) {
      console.log('controller create event route', req.body);
      var event = new Event(req.body);
      // console.log(req.body);
      event._host = user._id;
      event.save(function (err) {
        if (err) {
          console.log(err);
          res.json("can't create event b-e");
        } else {
          res.json('success');
        }
      })
    })
  },

  createComment: function (req, res) {
    var event_id = req.params.event_id;
    var currentPoster = req.params.id;

    User.findOne({
      _id: currentPoster
    }, function (err, user) {
      // console.log("create comment b-e", user);
      var comment = new Comment(req.body);
      // console.log(req.body);
      comment._message_poster = user._id;
      comment.save(function (err) {
        if (err) {
          console.log(err);
          res.json("can't create comment b-e");
        } else {
          Event.findOne({
            _id: event_id
          }, function (err, event) {
            if (err) {
              console.error("event b-e can't match comment", err);
            } else {
              event._comment.push(comment);
              event.save(function (err) {
                if (err) {
                  console.log("can't save this comment to event");
                } else {
                  res.json("successful create comment");
                }
              })
            }
          })
        }
      })
    })
  },

  allEvent: function (req, res) {
    Event.find({}).populate("_host").sort('createdAt').exec(function (err, events) {
      if (err) {
        console.log("fail get all events b-e");
        res.json({
          err: err
        });
      }
      res.json(events);
      // console.log(events);
    })
  },

  destory: function (req, res) {
    Event.remove({
      _id: req.params.id
    }, function (err) {
      if (err) {
        res.json({
          err: err
        });
      }
      res.redirect(303, '/events');
    })
  },

  getOneEvent: function (req, res) {
    Event.findOne({
      _id: req.params.id
    }).populate("_host").populate("_join_user").populate({path: "_comment", populate: {path:"_message_poster"}}).exec(function (err, event) {
      if (err) {
        console.log("b-e one event detail");
      } else {
        res.json(event);
      }
    })
  },

  getComment: function (req, res) {
     Event.findOne({
      _id: req.params.id
    }).populate({path: "_comment", populate: {path: "_message_poster"}}).exec(function(err, comment) {
      if (err) {
        console.log("b-e comment", err);
      }
      else {
        res.json(comment);
        console.log(comment);
      }
    })
  },

  join: function (req, res) {
    const event_id = req.params.event_id;
    const user_id = req.params.user_id;
    console.log(event_id);
    Event.findOne({
      _id: event_id
    }, function (err, event) {
      if (err) {
        console.log("b-e join event");
      } else {
        User.findOne({
          _id: user_id
        }, function (err, user) {
          if (err) {
            console.log("b-e join user");
          } else {
            console.log(user._id);
            event._join_user.push(user._id);
            event.save(function (err) {
              if (err) {
                console.log("can't save this event to user");
              } else {
                console.log("succesfully join event");
                res.json("join event");
              }
            })
          }
        })
      }
    })
  },

  cancelEvent: function (req, res) {
    let event_id = req.params.event_id;
    let user_id = req.params.user_id;
    Event.findOne({
      _id: event_id
    }, function (err, event) {
      if (err) {
        console.log("b-e cancel event route");
      } else {
        User.findOne({
          _id: user_id
        }, function (err, user) {
          if (err) {
            console.log("b-e can't find this user in cancle");
          } else {
            let arr = event._join_user;
            let index = arr.indexOf(user_id);
            console.log("cancle =>", user_id);
            arr.splice(index, 1);
            event.save(function (err) {
              if (err) {
                console.log("b-e after cancle event save");
              } else {
                res.json("b-e cancle event successfully");
              }
            })
          }
        })
      }
    })
  },

  updateEvent: function(req, res) {
    console.log(req.body.eventName);
    Event.findOne({_id: req.params.id}, function(err, event) {
      // console.log(event);
      if (err) {
        res.json({err:err});
      }
      else {
        event.eventName = req.body.eventName;
        event.location = req.body.location;
        event.date = req.body.date;
        event.price = req.body.price;
        event.save(function(err) {
          if (err) {
            res.json('event cant update b-e', err);
          }
          else {
            res.json("success");
          }
        })
      }
    })
  }



}