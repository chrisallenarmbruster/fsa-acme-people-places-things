//if there is an index.js file at this path, it will use it by default.
//exporting STRING, INTEGER with db from other file so we don't need to require sequelize again
const { db, STRING, INTEGER } = require("./")

//define models

//define relationships

async function dbModelSync() {
  await db.sync({ force: true })
  console.log("All models were synchronized successfully.")
}

module.exports = { db, dbModelSync } //don't forget to export your models
