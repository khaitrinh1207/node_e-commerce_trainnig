require('dotenv').config();
const mongoose = require('mongoose');
const {countConnect} = require('../helper/check.connect');

class Database {

    constructor() {
        this.connect();
    }

    connect(type = 'mongodb'){
        if(process.env.ENVIROMENT === 'DEV') {
            mongoose.set('debug', true);
            mongoose.set('debug', {  color: true});
        }
        mongoose.connect(process.env.MONGODB_URL).then( () => console.log(`Connected mongodb success `, countConnect())).catch( (err) => console.log(`connect failed !!`))
    }

    static getInstance() {
        if(!Database.instance) {
            Database.instance = new Database()
        };
        return Database.instance;
    }
}

const instanceDb = Database.getInstance();

module.exports = instanceDb;