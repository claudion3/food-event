window.handleMealsRequest = () => {
	document.body.innerHTML = `
 
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="./index.css" />
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
        <!--This row contain two column inside-->
        <div class="allMeals">
            <!--leftcolumn with items-->
            <div class="meal-card">

                <div class="clearfix">
                    <div class="meal-type">
                        <div class="meal-container">
                            <div class="meal-text">
                                <h4>Chicken Kiev quesadilla</h4>
                                <p> A seriously gourmet quesadilla. This easy,
                                    chicken-filled snack will curb your cheese cravings - serve warm and golden
                                    brown with your favourite dipping sauce. </p>
                            </div>
                        </div>
                        <img src="../images/Chicken_Kiev_quesadilla.png" alt="chicken_kiev">
                         
                        <div class="price">
                            <p>Price: <b id="pr_chicken_kiev">0</b> <b>kr</b></p>

                        </div>

                        <div class="add-meal-and-reviews">
                            <div class="add-meal">
                                <a href="AddMeal/1" data-navigo>
                                     <button>Book Meal</button>
                                </a>                                
                            </div>
                            <div class="add-reviews">
                                <a href="AddReviews/1" data-navigo>
                                     <button>ADD Review</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="meal-type">
                        <div class="meal-container">
                            <div class="meal-text">
                                <h4>Singapore chilli crab</h4>
                                <p> This low fat, spicy crab dish is a versatile street-food style recipe that can be
                                    adapted to your liking. Serve with
                                    rice or steamed bao buns. </p>
                            </div>
                        </div>
                        <img src="../images/singapore_chilli_crab.png " alt="singapore_chilli_crab">
                         
                        <div class="price">
                            <p>Price: <b id="pr_singapore_chilli_crab">0</b> <b>kr</b></p></p>

                        </div>

                        <div class="add-meal-and-reviews">
                            <div class="add-meal">
                                <a href="AddMeal/2" data-navigo>
                                     <button>Book Meal</button>
                                </a>                                
                            </div>
                            <div class="add-reviews">
                                <a href="AddReviews/2" data-navigo>
                                     <button>ADD Review</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="meal-type">
                        <div class="meal-container">
                            <div class="meal-text">
                                <h4>Spicy lamb keema pau</h4>
                                <p> A modern take on a popular Indian street-food dish - keema pau.
                                    Spiced lamb on a toasted cumin bun with a fried egg on
                                    top - it's worth trying! </p>

                            </div>
                        </div>
                        <img src="../images/spicy_lamb.png " alt="spicy_lamb">
                         
                        <div class="price">
                            <p>Price: <b id="pr_spicy_lamb">0</b> <b>kr</b></p></p>

                        </div>

                        <div class="add-meal-and-reviews">
                            <div class="add-meal">
                                <a href="AddMeal/3" data-navigo>
                                     <button>Book Meal</button>
                                </a>                                
                            </div>
                            <div class="add-reviews">
                                <a href="AddReviews/3" data-navigo>
                                     <button>ADD Review</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="meal-type">
                        <div class="meal-container">
                            <div class="meal-text">
                                <h4>Steam-fried bao buns</h4>
                                <p> This street food dim sum from Beijing is an authentic type of
                                    bao bun that puffs up in the pan. You can get them filled
                                    with minced chicken, pork or prawns if you don't want to go veggie </p>

                            </div>
                        </div>
                        <img src="../images/sheng_jian.png " alt="sheng_jian">
                         
                        <div class="price">
                            <p>Price: <b id="pr_sheng_jian">0</b> <b>kr</b></p></p>

                        </div>

                        <div class="add-meal-and-reviews">
                            <div class="add-meal">
                                <a href="AddMeal/4" data-navigo>
                                     <button>Book Meal</button>
                                </a>                                
                            </div>
                            <div class="add-reviews">
                                <a href="AddReviews/4" data-navigo>
                                     <button>ADD Review</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="allMeals">
            <!--leftcolumn with items-->
            <div class="meal-card">

                <div class="clearfix">
                    <div class="meal-type">
                        <div class="meal-container">
                            <div class="meal-text">
                                <h4>Lamb shoulder & smoky aubergine flatbread</h4>
                                <p> This is loosely based on the Turkish dish of lahmacun, but with a thicker bread base
                                    similar to pizza. Great for using
                                    leftover lamb, the charred aubergine gives a smoky depth. </p>
                            </div>
                        </div>
                        <img src="../images/lamb_shoulder.png" alt="lamb_shoulder">
                         
                        <div class="price">
                            <p>Price: <b id="pr_lamb_shoulder">0</b> <b>kr</b></p></p>

                        </div>

                        <div class="add-meal-and-reviews">
                            <div class="add-meal">
                                <a href="AddMeal/5" data-navigo>
                                     <button>Book Meal</button>
                                </a>                                
                            </div>
                            <div class="add-reviews">
                                <a href="AddReviews/5" data-navigo>
                                     <button>ADD Review</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="meal-type">
                        <div class="meal-container">
                            <div class="meal-text">
                                <h4>Chicken souvlaki</h4>
                                <p>Marinate the chicken for these Greek-style spiced kebabs as long as possible to soak
                                    up all the flavour and make it
                                    really tender. Served with warm bread, salad and tzatziki.</p>
                            </div>
                        </div>
                        <img src="../images/chicken_souvlaki.png " alt="chicken_souvlaki">
                         
                        <div class="price">
                            <p>Price: <b id="pr_chicken_souvlaki">0</b> <b>kr</b></p></p>

                        </div>

                        <div class="add-meal-and-reviews">
                            <div class="add-meal">
                                <a href="AddMeal/6" data-navigo>
                                     <button>Book Meal</button>
                                </a>                                
                            </div>
                            <div class="add-reviews">
                                <a href="AddReviews/6" data-navigo>
                                     <button>ADD Review</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="meal-type">
                        <div class="meal-container">
                            <div class="meal-text">
                                <h4>Turkish kebabs with tomato chilli sauce</h4>
                                <p> These spicy chicken kebabs are marinated 2 days for extra flavour. Wrapped in a warm
                                    flatbread and top with pickled
                                    chilli and cooling yogurt make the best dinner!</p>

                            </div>
                        </div>
                        <img src="../images/turkish_kebabs.png " alt="turkish_kebabs">
                         
                        <div class="price">
                            <p>Price: <b id="pr_turkish_kebabs">0</b> <b>kr</b></p></p>

                        </div>

                        <div class="add-meal-and-reviews">
                            <div class="add-meal">
                                <a href="AddMeal/7" data-navigo>
                                     <button>Book Meal</button>
                                </a>                                
                            </div>
                            <div class="add-reviews">
                                <a href="AddReviews/7" data-navigo>
                                     <button>ADD Review</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="meal-type">
                        <div class="meal-container">
                            <div class="meal-text">
                                <h4>Baja avocado tacos with chipotle crema </h4>
                                <p>A veggie take on a Californian Baja fish taco, with crispy battered avocado with a
                                    spicy crema. You could also use fish
                                    or other veg, like asparagus.</p>

                            </div>
                        </div>
                        <img src="../images/baja_tacos.png " alt="baja_tacos">
                         
                        <div class="price">
                            <p>Price: <b id="pr_baja_tacos">0</b> <b>kr</b></p></p>

                        </div>

                        <div class="add-meal-and-reviews">
                            <div class="add-meal">
                                <a href="AddMeal/8" data-navigo>
                                     <button>Book Meal</button>
                                </a>                                
                            </div>
                            <div class="add-reviews">
                                <a href="AddReviews/8" data-navigo>
                                     <button>ADD Review</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <!--footer-->
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

	const price_chicken_kiev = document.getElementById("pr_chicken_kiev");

	const price_singapore_chilli_crab = document.getElementById(
		"pr_singapore_chilli_crab"
	);
	const price_spicy_lamb = document.getElementById("pr_spicy_lamb");
	const price_sheng_jian = document.getElementById("pr_sheng_jian");
	const price_lamb_shoulder = document.getElementById("pr_lamb_shoulder");
	const price_chicken_souvlaki = document.getElementById("pr_chicken_souvlaki");
	const price_turkish_kebabs = document.getElementById("pr_turkish_kebabs");
	const price_baja_tacos = document.getElementById("pr_baja_tacos");

	function renderMeals(meals) {
		meals.forEach((meal) => {
			if (meal.id === 1) {
				price_chicken_kiev.innerHTML = `${meal.price}`;
			} else if (meal.id === 2) {
				price_singapore_chilli_crab.innerHTML = `${meal.price}`;
			} else if (meal.id === 3) {
				price_spicy_lamb.innerHTML = `${meal.price}`;
			} else if (meal.id === 4) {
				price_sheng_jian.innerHTML = `${meal.price}`;
			} else if (meal.id === 5) {
				price_lamb_shoulder.innerHTML = `${meal.price}`;
			} else if (meal.id === 6) {
				price_chicken_souvlaki.innerHTML = `${meal.price}`;
			} else if (meal.id === 7) {
				price_turkish_kebabs.innerHTML = `${meal.price}`;
			} else if (meal.id === 8) {
				price_baja_tacos.innerHTML = `${meal.price}`;
			}
		});
	}

	router.updatePageLinks();
};
