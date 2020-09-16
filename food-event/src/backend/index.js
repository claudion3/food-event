const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");

const port = process.env.PORT || 3000;

// Serve the built client html
const buildPath = path.join(__dirname, "./../frontend");
app.use(express.static(buildPath));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

//meals route
const mealsRouter = require("./api/meals");
router.use("/meals", mealsRouter);
//reservations route
const reservationsRouter = require("./api/reservations");
router.use("/reservations", reservationsRouter);
//reviews route
const reviewsRouter = require("./api/reviews");
router.use("/reviews", reviewsRouter);
app.use("/api", router);

// Ensures that the client router works on reload aswell.
// Sends all requests back to index.html where the routing lib takes over
app.get("/*", function (req, res) {
	res.sendFile(path.join(__dirname, "./../frontend/index.html"), function (
		err
	) {
		if (err) {
			res.status(500).send(err);
		}
	});
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
