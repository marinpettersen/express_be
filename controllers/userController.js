const userModel = require('../models/userModel');

exports.createUser = async (req, res) => {
    const { name, email, age } = req.body;
    try {
        const newUser = await userModel.createUser(name, email, age);
        res.status(201).json({ message: "Create user sukses", user: newUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.getAllUsers = async (req, res) => {
    try {
        const users = await userModel.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await userModel.getUserById(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;
    try {
        const updatedUser = await userModel.updateUser(id, name, email, age);
        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await userModel.deleteUser(id);
        if (!deletedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(deletedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};