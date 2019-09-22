const { Pool, Client } = require("pg")

const client = new Client({
	user: "postgres",
	host: "localhost",
	database: "mobile-store",
	password: "postgres",
	port: 5432
})

const query = {
	getUserName: () => {
		client.connect()
		client.query("SELECT * FROM users", (err, res) => {
			return res.rows[0].name
			client.end()
		})
	}
}
module.exports = query