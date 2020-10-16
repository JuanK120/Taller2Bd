const { Pool } = require('pg');
const Router = require('express-promise-router');
const keys = require('../config/keys');


const pool = new Pool({
  connectionString: keys.posgresqlURI,
  ssl: {
    rejectUnauthorized: false
  }
});

pool.connect();

const router = new Router();
// export our router to be mounted by the parent application
module.exports = router;


router.get('/consultatotalpacientes', async (req, res) => {
  //const { id } = req.params
  const { rows } = await pool.query('SELECT * FROM pacientes');
  res.send(rows);
});

router.put('/insertarpacientes', async (req, res) => {
  const { nombre, apellido, numid } = req.body;
  await pool.query(
    `INSERT INTO pacientes(nombre, apellido, numid) VALUES('${nombre}','${apellido}','${numid}')`
  );
  res.send('INSERTADO');
});

router.post('/actualizarpacientes', async (req, res) => {
  const { nombre, apellido, numid, id } = req.body;
  await pool.query(
    `
      UPDATE pacientes
      SET nombre = '${nombre}', apellido = '${apellido}', numid = '${numid}'
      WHERE id = '${id}';
    `
  );
  res.send('actualizado');
});

router.delete('/borrarpacientes', async (req, res) => {
  const { numid } = req.body;
  await pool.query(
    `DELETE FROM pacientes WHERE numid = '${numid}' ;`
  );
  res.send('borrado');
});