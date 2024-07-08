const User = require('../models/userModel');
const bcrypt = require('bcrypt');

exports.signup = async ({ firstName, lastName, email, mobile, password }) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error('User already exists with this email');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ firstName, lastName, email, mobile, password: hashedPassword });
  await newUser.save();
  return newUser;
};
