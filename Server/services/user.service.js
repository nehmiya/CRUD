const pool = require("../config/dbConfig")
const bcrypt = require("bcrypt")

const register = async (body) => {
    const {name, email, password} = body
    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        const res = await pool.query(`INSERT INTO users (name, email, password) values (?,?,?)`, [name, email, hashedPassword]);
        console.log(res);
    } catch (error) {
        console.log(error.message);
    }
}

const userService = { register }

module.exports = userService