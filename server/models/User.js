const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  dob: {
    type: Schema.Types.Date,
    required: true,
  },
  timeOfBirth: {
    type: String
  },
  timezone: {
    type: String
  },
  placeOfBirth: {
    type: String
  },
  birthLongitude: {
    type: String
  },
  birthLatitude: {
    type: String
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  
  
});

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const user = model('user', userSchema);

module.exports = user;
