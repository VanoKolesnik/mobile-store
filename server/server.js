const path = require("path")
const express = require("express")
const bodyParser = require("body-parser")
const fileUpload = require("express-fileupload")

const app = express()
const port = process.env.PORT || 1337
const DIST_DIR = path.join(__dirname, "../build")
const PAGE = (file) => {
	return path.join(DIST_DIR, "/pages/", file)
}

app.use(express.static(DIST_DIR))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(fileUpload())

app.listen(port, () => 
	console.log(`App listening on port: ${port}.`) )

require("./routes/get.js")(app, PAGE)
require("./routes/post.js")(app, PAGE)