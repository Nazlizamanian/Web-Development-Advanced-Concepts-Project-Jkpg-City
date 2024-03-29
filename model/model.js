const { Client } = require('pg');
const storeJson = require('../stores.json');
//npm run docker: build
const DATABASE_HOST = 'localhost';
class Model {
  constructor() {
    this.client = new Client({
      user: 'postgres',
     // host: DATABASE_HOST || 'localhost', // run it locally
      host: "host.docker.internal",  // for docker 
      database: 'postgres',
      password: '12345',
      port: 5432,
    });
  }

  //connects to the database
  async initDatabase() {
    await this.client.connect();
    await this.setup(storeJson);
  }

  async setup(storeJson) {
    await this.client.query(`
      CREATE TABLE IF NOT EXISTS public.stores
      (
          id SERIAL NOT NULL,
          name text,
          url text,
          district text,
          CONSTRAINT stores_pkey PRIMARY KEY (id)
      );
    `);

    await this.client.query(`
      ALTER TABLE IF EXISTS public.stores OWNER to postgres;
    `);

    for (const store of storeJson) {
      const checkForStore = await this.client.query(`
        SELECT * FROM public.stores
        WHERE name = $1
        LIMIT 1`, [store.name]);

      if (checkForStore.rows.length === 0) {
        await this.client.query(`
          INSERT INTO public.stores (name, url, district)
          VALUES ($1, $2, $3)
        `, [store.name, store.url, store.district]);
      }
    }


  }

  
  async getAllStores() {
    const query = 'SELECT * FROM stores';
    const { rows }= await this.client.query(query);
    
    return rows;
  }

}

module.exports = Model;

