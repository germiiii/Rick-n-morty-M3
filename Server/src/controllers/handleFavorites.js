let myFavorites = []

const postFav = (req,res) => {
    const character = req.body;
    //agrgamos el character al array de favs
    myFavorites.push(character);

    //retornamos el array
    res.json(myFavorites);
};

const deleteFavs = (req,res) => {
    //Obtenemos el character ID recibido en la request
    const { id } = req.params;

    //filtramos el character con el id que matchea
    myFavorites = myFavorites.filter((character) => character.id !== id);

    //retornamos el array actualizado como un JSON
    res.json(myFavorites);
};

module.exports = { postFav, deleteFavs};
