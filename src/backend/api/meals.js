const express = require("express");
const { where } = require("../database");
const router = express.Router();
const knex = require("../database");

//Query parameters
router.get("/", async (request, response) => {
	try {
		let meals;
		//maxPrice	Get meals that has a price smaller than maxPrice	ex:/meals?maxPrice=80
		if (request.query.maxPrice) {
			let maxPrices = request.query.maxPrice;
			meals = await knex("meal").select("*").where("price", "<", maxPrices);
		} else if (request.query.availableReservations) {
			//Get meals that still has available reservations
			meals = await knex("meal")
				.select("meal.*")
				.count("reservation.id")
				.from("meal")
				.leftJoin("reservation", "meal.id", "=", "reservation.id")
				.groupBy("meal.id")
				.having("meal.number_of_guests", ">", ".count(reservation.id)");
		} else if (request.query.title) {
			//title	Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde	String	/meals?title=Indian%20platter
			let title = request.query.title;
			meals = await knex("meal")
				.select("*")
				.where("title", "like", "%" + title + "%");
		} else if (request.query.createdAfter) {
			//createdAfter	Get meals that has been created after the date	ex:/meals?createdAfter=2019-04-05
			let date = request.query.createdAfter;
			meals = await knex("meal")
				.select("*")
				.where("created_date", ">", date.toString());
		} else if (request.query.limit) {
			//limit	Only specific number of meals ex:/meals?limit=4
			let limit = Number(request.query.limit);
			meals = await knex("meal").select("*").orderBy("id").limit(limit);
		} else {
			//Get all meals
			meals = await knex("meal").select("*");
		}
		response.json(meals);
	} catch (error) {
		throw error;
	}
});
//Post new meal
router.post("/", async (request, response) => {
	createMeal({
		body: request.body,
	})
		.then((result) => response.json(result))
		.catch((error) => {
			response.status(400).send("Bad request").end();
			console.log(error);
		});
});
const createMeal = async ({ body }) => {
	const {
		id,
		title,
		description,
		location,
		when,
		max_reservations,
		price,
		created_date,
	} = body;
	return await knex("meal").insert({
		id: id,
		title: title,
		description: description,
		location: location,
		when: when,
		max_reservations: max_reservations,
		price: price,
		created_date: created_date,
	});
};
//get id from meals
const getMealId = async (id) => {
	try {
		return await knex("meal").select("*").where({
			id: id,
		});
	} catch (error) {
		console.log(error);
	}
};
router.get("/:id", async (request, response) => {
	let mealId = Number(request.params.id);

	getMealId(mealId).then((result) => response.json(result));
	try {
	} catch (error) {
		throw error;
	}
});
// Updates the meal by id
const editMeals = async ({ body, id }) => {
	const {
		title,
		description,
		location,
		when,
		max_reservations,
		price,
		created_date,
	} = body;
	const meals = await knex.from("meal").select("*").where({
		id: id,
	});
	if (meals.length === 0) {
		throw new HttpError("Bad request", `meal not found: ID ${id}!`, 404);
	}
	const queryDto = {
		title: title,
		description: description,
		location: location,
		when: when,
		max_reservations: max_reservations,
		price: price,
		created_date: created_date,
	};
	if (Object.keys(queryDto).length !== 0) {
		return await knex("meal")
			.where({
				id: id,
			})
			.update(queryDto);
	} else return "Nothing updated!";
};

router.put("/:id", async (request, response) => {
	editMeals({
		body: request.body,
		id: request.params.id,
	})
		.then((result) => response.json(result))
		.catch((error) => {
			response.status(400).send("Bad request").end();
			console.log(error);
		});
});
//Deletes the meal by id
const deleteMeal = async (id) => {
	try {
		if (!id) {
			throw new HttpError("Bad request", "Id not found", 400);
		}
		return knex("meal")
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
	let deleteMealId = Number(request.params.id);
	deleteMeal(deleteMealId)
		.then((result) => response.json(result))
		.catch((error) => {
			response.status(400).send("Bad request").end();
			console.log(error);
		});
});

module.exports = router;
