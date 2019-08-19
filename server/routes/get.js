module.exports = (app, PAGE )=> {
	
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

	app.get("/latest-phones", (req, res) => {
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