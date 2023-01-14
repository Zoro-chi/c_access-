const User = require("../model/User");
const bcrypt = require("bcrypt");
const utils = require("../utils");

const authController = {
	register: async (req, res) => {
		try {
			// HASH PASSWORD
			const salt = await bcrypt.genSalt(10);
			const hashedPass = await bcrypt.hash(req.body.password, salt);

			// VALIDATE EMAIL
			const { valid, reason, validators } = await utils.isEmailValid(req.body.email);
			const checkDuplicateEmail = await User.findOne({ email: req.body.email });
			let email;

			try {
				if (valid && !checkDuplicateEmail) {
					email = req.body.email;
				}
			} catch (err) {
				res.json(validators[reason].reason);
			}

			// CREATE NEW USER
			const newUser = new User({
				firstname: req.body.firstName,
				lastname: req.body.lastName,
				email: email,
				password: hashedPass,
				phone: req.body.phone,
			});

			// SAVE NEW USER TO DB
			const user = await newUser.save();
			res.status(200).json(user);
		} catch (err) {
			res.status(500).json(err.message);
		}
	},

	login: async (req, res) => {
		try {
			const user = await User.findOne({ email: req.body.email });
			if (!user) {
				return res.status(400).json("user not found");
			}

			const password = await bcrypt.compare(req.body.password, user.password);
			if (!password) {
				return res.status(400).json("wrong password");
			}

			res.status(200).json(user);
		} catch (err) {
			res.status(500).json(err.message);
		}
	},
};

module.exports = authController;
