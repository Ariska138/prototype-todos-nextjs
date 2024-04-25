require('dotenv').config({ path: '.env.development.local' });

const { sql } = require('@vercel/postgres');

const execute = async () => {
  console.log('execute');

  const { rows } = await sql`Select todo, id from todos_ppqita`;

  console.log(rows);
};

execute();

