//importamos el users array
const users = require('../utils/users');

const login = (req,res) => {
    // obtenemos el email y la password del user array con el query parameters
    const { email, password } = req.query;
    //buscamos si algun user concide con el ingresado tanto en pass como en login
    const user = user.find((user) => user.email === email && user.password === password)

    //chequeamos si existe
    if (user){
        res.status(200).json({ access:true });
    } else {
        res.status(200).json({ access:false })
    }
}

module.exports = login 
