const express = require("express")
const morgan = require("morgan")
const override = require("method-override")
const mainView = require("./views/mainView.js")

//require router(s)
//const routes = require("./routes")

const app = express()
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static(__dirname + "/public"))
app.use(override("_method"))

//set up routes and/or router
//app.use("/????", routes)

//set up redirect if needed
// app.use("/", (req, res, next) => {
//   res.redirect("/????")
// })

app.get("/", (req, res) => {
  res.send(mainView(""))
})

const PORT = 1337

app.use((err, req, res, next) => {
  console.log(err)
  res.status(500).send(err.message)
})

app.listen(PORT, () => {
  console.log(`app listening in port ${PORT}`)
})
