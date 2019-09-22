module.exports = (app, PAGE, query) => {
	
	app.post("/api", (req, res) => {
		console.log(req.body)
		res.status(200).end()
	})
}