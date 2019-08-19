module.exports = (app, PAGE) => {
	app.post("/api", (req, res) => {
		console.log(req.body.clientResponse.text)
		res.status(200).end()
	})
}