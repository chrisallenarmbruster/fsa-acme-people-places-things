const { db } = require("./model.js") //don't forget to import the models

async function syncAndSeed() {
  try {
    await db.sync({ force: true })
    console.log("starting seed process")
  } catch {
    console.error(error)
    db.close()
  }
}
