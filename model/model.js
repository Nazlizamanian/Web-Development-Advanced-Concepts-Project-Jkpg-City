const pg = require('pg');
const { Database } = require('sqlite3');

class DB{
    constructor(){
        this.DB = new pg.Pool({
            Database:'database'
        });
    }
}