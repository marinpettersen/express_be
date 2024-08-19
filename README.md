Step-by-Step Implementation:
Step 1: Initialize the project

Run the following commands to set up a new Node.js project and install the necessary dependencies:


mkdir express-backend
cd express-backend
npm init -y
npm install express body-parser

Step 2: Create the project structure

Create the following directory structure:

express-backend/
├── controllers/
│   └── userController.js
├── routes/
│   └── userRoutes.js
├── models/
│   └── userModel.js
├── index.js

Step 3: Set up the Express server

Create index.js with the following content:

const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/users', userRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

Step 4: Define the routes
Create routes/userRoutes.js with the following content:
const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;


Step 5: Implement controllers
Create controllers/userController.js with the following content:
let users = [];

const getAllUsers = (req, res) => {
    res.status(200).json(users);
};

const getUserById = (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).send('User not found');
    }
};

const createUser = (req, res) => {
    const newUser = {
        id: users.length + 1,
        ...req.body
    };
    users.push(newUser);
    res.status(201).json(newUser);
};

const updateUser = (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (user) {
        Object.assign(user, req.body);
        res.status(200).json(user);
    } else {
        res.status(404).send('User not found');
    }
};

const deleteUser = (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).send('User not found');
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};


Step 6: Run the server
Run the following command to start the server:
node index.js

Your Express server should now be running on port 3000, and you can perform CRUD operations on the /users endpoint.


Example of Testing User Routes with cURL
Create a User:
curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"name":"John Doe", "email":"john@example.com"}'

Get All Users:
curl http://localhost:3000/users

Get a User by ID:
curl http://localhost:3000/users/1

Update a User:
curl -X PUT http://localhost:3000/users/1 -H "Content-Type: application/json" -d '{"name":"John Smith"}'

Delete a User:
curl -X DELETE http://localhost:3000/users/1

