require('dotenv').config({ path: '.env.development.local' });

const { sql } = require('@vercel/postgres');

const execute = async () => {
  console.log('execute');

  const res = await sql`delete from todos_ppqita where id=1`;

  console.log(res);
};

execute();
