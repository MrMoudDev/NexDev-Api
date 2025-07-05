const express = require("express")

const dbConnection = require("./config/mongo.config.js")
const app = express()
const port = 3000

dbConnection()

app.use( express.json() )

app.use("/api/users" , require("./routes/users.router.js"))
app.use("/api/devProfile", require("./routes/devProfile.router.js"))
app.use("/api/category", require("./routes/category.router.js"))
app.use("/api/company", require("./routes/company.router.js"))

app.listen(port,() => {
    console.log("Servidor corriendo en ", port)
})


