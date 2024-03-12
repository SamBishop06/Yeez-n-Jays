const router = require('express').Router();
const ( User ) = require('../../models');

//Route: Create a new user 
router.post('/', async (req, res) => {
    try {
        // TODO: Create new user via user input on signup. Include
        const userData = await User.create({
        });
        res.status(200).json(userData)
    } catch (err) {
        res.status(500).json(err);
    }
});

//Route: Log in. 
router.post('/login', async (req, res) => {
    try {
        // TODO: Find user by either username or email, whichever one was used to login.
        const userData = await User.findOne({ where: {}});

        if (!userData) {
            res.status(400).json({message: "Incorrect email or password. Please try again."})
        }
        // TODO: Verify password with the database.
        const validPassword = await userData.checkPassword('INSERT USER INPUT HERE');

        if (!validPassword) {
            res.status(400).json({message: "Incorrect email or password. Please try again."});
            return;

        }
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/logout', (req, res) => {
    //if user is logged in, log them out
})