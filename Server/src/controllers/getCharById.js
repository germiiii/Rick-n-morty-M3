const express = require('express');
const app = express();
const axios = require('axios');

const URL = 'https://rickandmortyapi.com/api/character/'

async function getCharacterById (req, res) {
    const charId = req.params.id;

    try{
        const response = axios.get(`${URL}${charId}`);
        if (response.data){
            const {id, status,name,species,origin,image,gender} = response.data;
            res.json({id, status,name,species,origin,image,gender})
        } else {
            res.status(404).send('No Ta ¯\_(ツ)_/¯ ')
        }
    } catch(error) {
        res.status(404).json({message: "no ta"})
    }
}

module.exports = getCharacterById; 
