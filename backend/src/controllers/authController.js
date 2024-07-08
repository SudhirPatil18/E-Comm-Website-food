const authService = require('../services/authService');

exports.signup = async (req, res) => {
  try {
    const { firstName, lastName, email, mobile, password } = req.body;
    const user = await authService.signup({ firstName, lastName, email, mobile, password });
    res.status(201).json({ success: true, user });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
