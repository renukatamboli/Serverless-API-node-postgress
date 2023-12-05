const Sequelize = require('sequelize');
const databaseUrl = 'postgres://postgres:admin123@localhost:5432/test';
const db = new Sequelize(databaseUrl);

module.exports = syncDB = async() => {
  try {
    await db.sync({ force: false });
    console.log('Database connected');
  } catch (error) {
    console.error('error synching database', error);
  }
}