module.exports = (app, PAGE, query) => {
	const {Client} = require("pg")
	const db = new Client({
		host: "ec2-54-247-72-30.eu-west-1.compute.amazonaws.com",
		database: "d3ebri13f0dtnt",
		user: "izgmaknrmyyaxr",
		password: "fa6848671fd47284da59f4f583a92fa840cc36873968a227631d6f8698bb27b0",
		port: 5432,
		ssl: true
	})
	db.connect()
	const SELECT = (target) => {
		return new Promise((resolve, reject) => {
			db.query(`SELECT * FROM ${target};`, (err, res) => {
				if (err) reject(err)
					resolve(res.rows)
				})
			}
		)
	}
	
	app.get("/", (req, res) => {
		res.sendFile(PAGE("index.html"))
	})
	app.get("/catalog", (req, res) => {
		res.sendFile(PAGE("catalog.html"))
	})
	app.get("/contact", (req, res) => {
		res.sendFile(PAGE("contact.html"))
	})
	app.get("/login", (req, res) => {
		res.sendFile(PAGE("login.html"))
	})
	app.get("/registration", (req, res) => {
		res.sendFile(PAGE("registration.html"))
	})
	app.get("/profile", (req, res) => {
		res.sendFile(PAGE("profile.html"))
	})
	app.get("/product", (req, res) => {
		res.sendFile(PAGE("product.html"))
	})
	app.get("/orders", (req, res) => {
		res.sendFile(PAGE("orders.html"))
	})
	app.get("/viewedproducts", (req, res) => {
		res.sendFile(PAGE("viewedproducts.html"))
	})
	app.get("/wishlist", (req, res) => {
		res.sendFile(PAGE("wishlist.html"))
	})

	app.get("/select-users", (req, res) => {
		Promise.all([SELECT("users")])
			.then(_promises => {
				let users = _promises
				res.send(users[0])
			})
	})
	app.get("/select-products", (req, res) => {
		Promise.all([SELECT("products")])
			.then(_promises => {
				let products = _promises
				res.send(products[0])
			})
	})

	app.get("/select-manufacture", (req, res) => {
		Promise.all([SELECT("manufacture")])
			.then(_promises => {
				let manufacture = _promises
				res.send(manufacture[0])
			})
	})
	app.get("/select-country", (req, res) => {
		Promise.all([SELECT("country_of_manufacture")])
			.then(_promises => {
				let country = _promises
				res.send(country[0])
			})
	})
	app.get("/select-communicationStandart", (req, res) => {
		Promise.all([SELECT("communication_standarts")])
			.then(_promises => {
				let communicationStandart = _promises
				res.send(communicationStandart[0])
			})
	})
	app.get("/select-diagonal", (req, res) => {
		Promise.all([SELECT("diagonal")])
			.then(_promises => {
				let diagonal = _promises
				res.send(diagonal[0])
			})
	})
	app.get("/select-displayResolution", (req, res) => {
		Promise.all([SELECT("display_resolution")])
			.then(_promises => {
				let displayResolution = _promises
				res.send(displayResolution[0])
			})
	})
	app.get("/select-frontCamera", (req, res) => {
		Promise.all([SELECT("front_camera")])
			.then(_promises => {
				let frontCamera = _promises
				res.send(frontCamera[0])
			})
	})
	app.get("/select-backCamera", (req, res) => {
		Promise.all([SELECT("back_camera")])
			.then(_promises => {
				let backCamera = _promises
				res.send(backCamera[0])
			})
	})
	app.get("/select-ram", (req, res) => {
		Promise.all([SELECT("ram")])
			.then(_promises => {
				let ram = _promises
				res.send(ram[0])
			})
	})
	app.get("/select-internalMemory", (req, res) => {
		Promise.all([SELECT("internal_memory")])
			.then(_promises => {
				let internalMemory = _promises
				res.send(internalMemory[0])
			})
	})
	app.get("/select-operationSystem", (req, res) => {
		Promise.all([SELECT("operation_system")])
			.then(_promises => {
				let operationSystem = _promises
				res.send(operationSystem[0])
			})
	})


	app.get("/select-latest-phones", (req, res) => {
		const latestPhones = [
					{
						id: 0,
						title: "Huawei P30 Pro 8",
						price: "25 000",
						imageSource: "../images/products/huawei_p30_pro8.jpg"
					},
					{
						id: 1,
						title: "Samsung Galaxy M20",
						price: "28 000",
						imageSource: "../images/products/samsung_galaxy_m20.jpg"
					},
					{
						id: 2,
						title: "Samsung Galaxy S10",
						price: "40 000",
						imageSource: "../images/products/samsung_galaxy_s10.jpg"
					},
					{
						id: 3,
						title: "Xiaomi Redmi Note 7",
						price: "24 000",
						imageSource: "../images/products/xiaomi_redmi_note_7.jpg"
					}
				]
		res.send(latestPhones)
	})

	app.get("*", (req, res) => {
		res.sendFile(PAGE("404.html"))
	})
}