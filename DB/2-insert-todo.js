require('dotenv').config({ path: '.env.development.local' });

const { sql } = require('@vercel/postgres');

const execute = async () => {
  console.log('execute');

  const res = await sql`INSERT INTO todos_ppqita (todo, created_at )
  VALUES ('membuat artikel', ${new Date()})`;

  console.log(res);
};

execute();
