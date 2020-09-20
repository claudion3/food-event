const express = require("express");
const router = express.Router();
const knex = require("../database");

//get all reviews
const getReviews = async () => {
	try {
		return await knex("review").select("*");
	} catch (error) {
		console.log(error);
	}
};
router.get("/", async (request, response) => {
	getReviews().then((result) => response.json(result));
	try {
	} catch (error) {
		throw error;
	}
});
//Post new review
router.post("/", async (request, response) => {
	createReview({
		body: request.body,
	})
		.then((result) => response.json(result))
		.catch((error) => {
			response.status(400).send("Bad request").end();
			console.log(error);
		});
});
const createReview = async ({ body }) => {
	const { id, title, description, meal_id, stars, created_date } = body;
	return await knex("review").insert({
		id: id,
		title: title,
		description: description,
		meal_id: meal_id,
		stars: stars,
		created_date: created_date,
	});
};
//get id from reviews
const getReviewsId = async (id) => {
	try {
		return await knex("review").select("*").where({
			id: id,
		});
	} catch (error) {
		console.log(error);
	}
};
router.get("/:id", async (request, response) => {
	let reservationsId = Number(request.params.id);

	getReviewsId(reservationsId).then((result) => response.json(result));
	try {
	} catch (error) {
		throw error;
	}
});
// Updates the reviews by id
const editReviews = async ({ body, id }) => {
	const {
		title: title,
		description: description,
		meal_id: meal_id,
		stars: stars,
		created_date: created_date,
	} = body;
	const reviews = await knex.from("review").select("*").where({
		id: id,
	});
	if (reviews.length === 0) {
		throw new HttpError("Bad request", `reservation not found: ID ${id}!`, 404);
	}
	const queryDto = {
		title: title,
		description: description,
		meal_id: meal_id,
		stars: stars,
		created_date: created_date,
	};
	if (Object.keys(queryDto).length !== 0) {
		return await knex("review")
			.where({
				id: id,
			})
			.update(queryDto);
	} else return "Nothing updated!";
};

router.put("/:id", async (request, response) => {
	editReviews({
		body: request.body,
		id: request.params.id,
	})
		.then((result) => response.json(result))
		.catch((error) => {
			response.status(400).send("Bad request").end();
			console.log(error);
		});
});
//Deletes the review by id
const deleteReviews = async (id) => {
	try {
		if (!id) {
			throw new HttpError("Bad request", "Id not found", 400);
		}
		return knex("review")
			.where({
				id: id,
			})
			.del();
	} catch (err) {
		console.log(err);
		return "something went wrong, try again";
	}
};
router.delete("/:id", async (request, response) => {
	let deleteReviewId = Number(request.params.id);
	deleteReviews(deleteReviewId)
		.then((result) => response.json(result))
		.catch((error) => {
			response.status(400).send("Bad request").end();
			console.log(error);
		});
});

module.exports = router;
