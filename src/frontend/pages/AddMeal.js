window.handleAddMealRequest = async (params) => {
	document.body.innerHTML = `
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="./index.css" />
	<link rel="shortcut icon" href="./images/icon.jpg" />
</head>

<body>
    <!--sections with header and main picture with navigation bar-->
    <div class="wrapper">
        <!--navigation bar-->
        <div class="logo-nav">
            <img src="./images/logo1.jpg" alt="logo">

            <nav class="navbar">
                
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="meals" data-navigo>Meals</a></li>
                    <li><a href="reservations" data-navigo>Reservations</a></li>
                    <li><a href="reviews" data-navigo>Reviews</a></li>
                     

                </ul>
            </nav>
        </div>
        
        <div class="book-meal">
            <div class="allMeals">               
                <div class="meal-card">

                    <div class="clearfix">
                        <div class="meal-type">
                            <div class="meal-container">
                                <div class="meal-text">
                                    <h4 class="ml-title1"></h4>
                                          
                                    <p class="ml-description1"></p>
                                      
                                </div>
                            </div>
                            <div class="meal-image1"></div>
                             
                        </div>


                    </div>
                </div>

            </div>
        </div>
        <div class="reserv-form">
            <h1>Welcome to make reservation for this meal</h1>
            <table>
                <tr>
                    <td>
                        <form onsubmit="event.preventDefault();reservationSubmit();" autocomplete="off" id="reservationForm">
                            <div>
                                <label>MealID</label>
                                <input type="number" name="mealId" id="mealID" value=${params.id} disabled>
                            </div>
                            <div>
                                <label>Full Name</label><label class="validation-error hide"
                                    id="fullNameValidationError">This field is required.</label>
                                <input type="text" name="contact_name" id="contact_name"  >
                            </div>
                            <div>
                                <label>Number of the Guest</label><label class="validation-error hide"
                                    id="number_of_guestsValidationError">This field is required.</label>
                                <input type="number" name="number_of_guests" id="number_of_guests"  >
                            </div>
                            <div>
                                <label>E-mail</label><label class="validation-error hide"
                                    id="contact_emailValidationError">This field is required.</label>
                                <input type="email" name="contact_email" id="contact_email"  >
                            </div>
                            <div>
                                <label>Phone number</label><label class="validation-error hide"
                                    id="contact_phonenumberValidationError">This field is required.</label>
                                <input type="tel" name="tel" id="contact_phonenumber"  >
                            </div>

                            <div class="form-action-buttons">
                                <input type="submit" value="Submit" ">
                            </div>
                        </form>
                    </td>
             
                </tr>
            </table>
        </div>

        <footer>
        <div class=" api">
            <p><a href="http://localhost:3000/api/meals"> <b>API-AllMeals</b> </a>
            </p>
            <p><a href="http://localhost:3000/api/reservations"> <b>API-AllReservations</b> </a>
            </p>
            <p><a href="http://localhost:3000/api/reviews"> <b>API-AllReviews</b> </a>
            </p>
        </div>
        <div class="copy-right">

            <p>Jean Claude Gakimbiri<br> &copy;2020 All Rights Reserved
            </p>
        </div>
        <div class="contact">
            <h3>Follow us on</h3>
            <a href="" class="fa fa-facebook"></a>
            <a href="" class="fa fa-twitter"></a>
            <a href="" class="fa fa-instagram"></a>

        </div>
    </footer>
    </div>
    
</body>
  
  `;
	fetch("/api/meals")
		.then((response) => response.json())

		.then((meals) => renderMeals(meals));

	const image = document.querySelector(".meal-image1");
	const title = document.querySelector(".ml-title1");
	const description = document.querySelector(".ml-description1");

	let checkId = Number(params.id);
	function renderMeals(meals) {
		meals.forEach((meal) => {
			// display chicken_kiev
			if (checkId === 1 && meal.id === 1) {
				image.innerHTML = `<img src="../images/Chicken_Kiev_quesadilla.png" alt="chicken_kiev">`;
				title.innerHTML = `${meal.title}`;
				description.innerHTML = `${meal.description}`;
				//singapore_chilli_crab
			} else if (checkId === 2 && meal.id === 2) {
				image.innerHTML = `<img src="../images/singapore_chilli_crab.png " alt="singapore_chilli_crab">`;
				title.innerHTML = `${meal.title}`;
				description.innerHTML = `${meal.description}`;
				//spicy_lamb
			} else if (checkId === 3 && meal.id === 3) {
				image.innerHTML = ` <img src="../images/spicy_lamb.png " alt="spicy_lamb">`;
				title.innerHTML = `${meal.title}`;
				description.innerHTML = `${meal.description}`;
				//sheng_jian
			} else if (checkId === 4 && meal.id === 4) {
				image.innerHTML = `<img src="../images/sheng_jian.png " alt="sheng_jian">`;
				title.innerHTML = `${meal.title}`;
				description.innerHTML = `${meal.description}`;
				//lamb_shoulder
			} else if (checkId === 5 && meal.id === 5) {
				image.innerHTML = `<img src="../images/lamb_shoulder.png" alt="lamb_shoulder">`;
				title.innerHTML = `${meal.title}`;
				description.innerHTML = `${meal.description}`;
				//chicken_souvlaki
			} else if (checkId === 6 && meal.id === 6) {
				image.innerHTML = `<img src="../images/chicken_souvlaki.png " alt="chicken_souvlaki">`;
				title.innerHTML = `${meal.title}`;
				description.innerHTML = `${meal.description}`;
				//turkish_kebabs
			} else if (checkId === 7 && meal.id === 7) {
				image.innerHTML = `<img src="../images/turkish_kebabs.png " alt="turkish_kebabs">`;
				title.innerHTML = `${meal.title}`;
				description.innerHTML = `${meal.description}`;
				//baja_tacos
			} else if (checkId === 8 && meal.id === 8) {
				image.innerHTML = `<img src="../images/baja_tacos.png " alt="baja_tacos">`;
				title.innerHTML = `${meal.title}`;
				description.innerHTML = `${meal.description}`;
			}
		});
	}

	// make the router handle those links.
	router.updatePageLinks();
};

//function for postiong data in api/reservations
const reservationSubmit = () => {
	if (validate()) {
		let reservationMeal = createReservation();
		console.log(reservationMeal);
		fetch("/api/reservations", {
			method: "POST",
			mode: "cors",
			cache: "no-cache",
			credentials: "same-origin",
			headers: { "Content-Type": "application/json" },
			redirect: "follow",
			referrerPolicy: "no-referrer",
			body: JSON.stringify(reservationMeal),
		})
			.then((resp) => {
				console.log(resp);
				alert("Thank you We received your reservation");
			})
			.catch((err) => {
				console.log(err);
				alert("Error");
			});
		resetForm();
	}
};
//add data in form
const createReservation = () => {
	let reservationData = {};
	reservationData["meal_id"] = document.getElementById("mealID").value;
	let createdDate = new Date();
	reservationData["created_date"] = createdDate.toISOString();
	reservationData["contact_phonenumber"] = document.getElementById(
		"contact_phonenumber"
	).value;
	reservationData["contact_name"] = document.getElementById(
		"contact_name"
	).value;
	reservationData["contact_email"] = document.getElementById(
		"contact_email"
	).value;
	reservationData["number_of_guests"] = document.getElementById(
		"number_of_guests"
	).value;

	return reservationData;
};

//reset the form
const resetForm = () => {
	document.getElementById("contact_phonenumber").value = "";
	document.getElementById("contact_email").value = "";
	document.getElementById("contact_name").value = "";
	document.getElementById("number_of_guests").value = "";
};
//validation of data
const validate = () => {
	let isValid = true;
	if (document.getElementById("contact_name").value === "") {
		isValid = false;
		document.getElementById("fullNameValidationError").classList.remove("hide");
	} else if (document.getElementById("number_of_guests").value === "") {
		isValid = false;
		document
			.getElementById("number_of_guestsValidationError")
			.classList.remove("hide");
	} else if (document.getElementById("contact_email").value === "") {
		isValid = false;
		document
			.getElementById("contact_emailValidationError")
			.classList.remove("hide");
	} else if (document.getElementById("contact_phonenumber").value === "") {
		isValid = false;
		document
			.getElementById("contact_phonenumberValidationError")
			.classList.remove("hide");
	} else {
		isValid = true;
		if (
			!document
				.getElementById("fullNameValidationError")
				.classList.contains("hide")
		)
			document.getElementById("fullNameValidationError").classList.add("hide");
	}
	return isValid;
};
