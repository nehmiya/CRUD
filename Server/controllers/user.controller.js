const userService = require("../services/user.service");

const register = async (req, res) => {
    try {
        const body = req.body
        const user = userService.register(body)
        if (user) {
            res.status(201).json({success: true, data: user})
        } else {
            console.log(error.message);
            res.json({error: error})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({eroor: error.message})
    }
}

const userController = {register}

module.exports = userController;