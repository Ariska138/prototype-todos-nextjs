require('dotenv').config({ path: '.env.development.local' });

const { sql } = require('@vercel/postgres');

const execute = async () => {
  console.log('execute');

  const res = await sql`update todos_ppqita set status=1  where id=1`;

  console.log(res);
};

execute();
