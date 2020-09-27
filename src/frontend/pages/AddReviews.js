window.handleAddReviewsRequest = async (params) => {
	document.body.innerHTML = `
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">   
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="./index.css">
</head>

<body>
    <!--sections with header and main picture with navigation bar-->
    <div class="wrapper">
        <!--navigation bar-->
        <div class="logo-nav">

            <nav class="navbar">
               <img src="./images/logo1.jpg" alt="logo">
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
        <div class="book-meal">
            <div class="allMeals">
                <div class="meal-card">
                    <div class="clearfix">
                        <div class="meal-type">
                            <div class="meal-container">
                             
                                <div class="stars"   >
                                    <div class="stars-outer">
                                        <div class="stars-inner"></div>
                                    </div>
                                </div>                                 
                                <div class="form-group">
                                    <label class="validation-error hide"
                                    id="rating-controlValidationError">This field is required.</label>
                                    <input type="number" id="rating-control" class="form-control" step="0.1" max="5"
                                        placeholder="Rate 1 - 5">
                                </div>
                             
                            </div>


                        </div>


                    </div>
                </div>

            </div>
        </div>
        <div class="reserv-form">
            <h1>We will like to hear your reviews about our food</h1>
            <table>
                <tr>
                    <td>
                        <form onsubmit="event.preventDefault();SubmitReview();" autocomplete="off"  >
                            <div>
                                <label>MealID</label>
                                <input type="number" name="mealId" id="mealID" value=${params.id} disabled>
                            </div>
                            <div>
                                <label>Title</label><label class="validation-error hide"
                                    id="review_titleValidationError">This field is required.</label>
                                <input type="text" name="title" id="review_title"  >
                            </div>
                            <div>
                                <label>Description</label><label class="validation-error hide"
                                    id="review_descriptionValidationError">This field is required.</label>
                                <textarea cols="30"   name="review-description" id="review_description"  placeholder="Enter your comment here.."></textarea>
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

	const ratingControl = document.getElementById("rating-control");
	const starsTotal = 5;
	ratingControl.addEventListener("blur", (e) => {
		const rating = e.target.value;

		// Make sure 5 or under
		if (rating > 5) {
			alert("Please rate 1 - 5");
			return;
		}

		getRatings(rating);
	});

	// Get ratings
	function getRatings(rateNumber) {
		// Get percentage
		const starPercentage = (rateNumber / starsTotal) * 100;

		// Round to nearest 10
		const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

		// Set width of stars-inner to percentage
		document.querySelector(`.stars-inner`).style.width = starPercentageRounded;
	}
	// make the router handle those links.
	router.updatePageLinks();
};

//function for postiong data in api/reviews
const SubmitReview = () => {
	if (validateFormReview()) {
		let mealReview = createmealReview();
		console.log(mealReview);
		fetch("/api/reviews", {
			method: "POST",
			mode: "cors",
			cache: "no-cache",
			credentials: "same-origin",
			headers: { "Content-Type": "application/json" },
			redirect: "follow",
			referrerPolicy: "no-referrer",
			body: JSON.stringify(mealReview),
		})
			.then((resp) => {
				console.log(resp);
				alert("Thank you for reviews");
			})
			.catch((err) => {
				console.log(err);
				alert("Error");
			});
		resetFormReview();
	}
};
//add data in review form
const createmealReview = () => {
	let mealReviewData = {};
	let createdDate = new Date();

	mealReviewData["meal_id"] = document.getElementById("mealID").value;
	mealReviewData["created_date"] = createdDate.toISOString();
	mealReviewData["title"] = document.getElementById("review_title").value;
	mealReviewData["stars"] = document.getElementById("rating-control").value;
	mealReviewData["description"] = document.getElementById(
		"review_description"
	).value;

	return mealReviewData;
};

//reset the form
const resetFormReview = () => {
	document.getElementById("review_description").value = "";
	document.getElementById("review_title").value = "";
	document.getElementById("rating-control").value = "";
};
//validation of data
const validateFormReview = () => {
	let isValid = true;
	if (document.getElementById("review_description").value == "") {
		isValid = false;
		document
			.getElementById("review_descriptionValidationError")
			.classList.remove("hide");
	} else if (document.getElementById("review_title").value == "") {
		isValid = false;
		document
			.getElementById("review_titleValidationError")
			.classList.remove("hide");
	} else if (document.getElementById("rating-control").value == "") {
		isValid = false;
		document
			.getElementById("rating-controlValidationError")
			.classList.remove("hide");
	}
	return isValid;
};
