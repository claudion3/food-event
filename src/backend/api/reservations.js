const express = require("express");
const router = express.Router();
const knex = require("../database");

//get all reservations
const getReservations = async () => {
	try {
		return await knex("reservation").select("*");
	} catch (error) {
		console.log(error);
	}
};
router.get("/", async (request, response) => {
	getReservations().then((result) => response.json(result));
	try {
	} catch (error) {
		throw error;
	}
});
//Post new reservation
router.post("/", async (request, response) => {
	createReservations({
		body: request.body,
	})
		.then((result) => response.json(result))
		.catch((error) => {
			response.status(400).send("Bad request").end();
			console.log(error);
		});
});
const createReservations = async ({ body }) => {
	const {
		id,
		number_of_guests,
		meal_id,
		created_date,
		contact_phonenumber,
		contact_name,
		contact_email,
	} = body;
	return await knex("reservation").insert({
		id: id,
		number_of_guests: number_of_guests,
		meal_id: meal_id,
		created_date: created_date,
		contact_phonenumber: contact_phonenumber,
		contact_name: contact_name,
		contact_email: contact_email,
	});
};
//get id from reservations
const getReservationId = async (id) => {
	try {
		return await knex("reservation").select("*").where({
			id: id,
		});
	} catch (error) {
		console.log(error);
	}
};
router.get("/:id", async (request, response) => {
	let reservationsId = Number(request.params.id);

	getReservationId(reservationsId).then((result) => response.json(result));
	try {
	} catch (error) {
		throw error;
	}
});
// Updates the reservation by id
const editReservations = async ({ body, id }) => {
	const {
		number_of_guests,
		meal_id,
		created_date,
		contact_phonenumber,
		contact_name,
		contact_email,
	} = body;
	const reservations = await knex.from("reservation").select("*").where({
		id: id,
	});
	if (reservations.length === 0) {
		throw new HttpError("Bad request", `reservation not found: ID ${id}!`, 404);
	}
	const queryDto = {
		number_of_guests: number_of_guests,
		meal_id: meal_id,
		created_date: created_date,
		contact_phonenumber: contact_phonenumber,
		contact_name: contact_name,
		contact_email: contact_email,
	};
	if (Object.keys(queryDto).length !== 0) {
		return await knex("reservation")
			.where({
				id: id,
			})
			.update(queryDto);
	} else return "Nothing updated!";
};

router.put("/:id", async (request, response) => {
	editReservations({
		body: request.body,
		id: request.params.id,
	})
		.then((result) => response.json(result))
		.catch((error) => {
			response.status(400).send("Bad request").end();
			console.log(error);
		});
});
//Deletes the reservation by id
const deleteReservation = async (id) => {
	try {
		if (!id) {
			throw new HttpError("Bad request", "Id not found", 400);
		}
		return knex("reservation")
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
	let deleteReservationId = Number(request.params.id);
	deleteReservation(deleteReservationId)
		.then((result) => response.json(result))
		.catch((error) => {
			response.status(400).send("Bad request").end();
			console.log(error);
		});
});
module.exports = router;
