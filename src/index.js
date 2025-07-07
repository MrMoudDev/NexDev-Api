const express = require("express")
const dbConection = require("./config/mongo.config.js")
const app = express()
const port = 3000

dbConection()
app.use( express.json() )


app.use("/api/users" , require("./routes/users.router.js"))
app.use("/api/dev-profile", require("./routes/devProfile.router.js"))
app.use("/api/aplication", require("./routes/aplication.router.js"))
app.use("/api/company", require("./routes/company.router.js"))
app.use("/api/vacant" , require("./routes/vacant.router.js"))
app.use("/api/auth", require("./routes/auth.router.js"))


app.listen(port,() => {
    console.log("Servidor corriendo en ", port)
})


