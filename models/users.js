/**
 * Users Model
 */

// deps
var db = require('mongoose');
var Schema = db.Schema;

// create schema
var usersSchema = new Schema({
  name: String,
  email: String
});

// register model with schema
db.model('users', usersSchema);
