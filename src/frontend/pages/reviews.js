window.handleReviewsRequest = async () => {
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
        <!--This row contain two column inside-->
        <div class="allMeals">
            <!--leftcolumn with items-->
            <div class="meal-card">
                <div class="clearfix">
                    <div class="meal-type">
                        <div class="meal-container">
                            <div class="meal-text">
                                <h4>Chicken Kiev quesadilla</h4>
                            </div>
                        </div>
                        <img src="../images/Chicken_Kiev_quesadilla.png" alt="chicken_kiev">
                        <div class="stars">
                            <div class="stars-outer">
                                <div class="stars-inner" id="rateNumber_chicken_kiev"></div>
                            </div>
                        </div>
                    </div>
                    <div class="meal-type">
                        <div class="meal-container">
                            <div class="meal-text">
                                <h4>Singapore chilli crab</h4>

                            </div>
                        </div>
                        <img src="../images/singapore_chilli_crab.png " alt="singapore_chilli_crab">
                        <div class="stars">
                            <div class="stars-outer">
                                <div class="stars-inner" id="rateNumber_singapore_chilli_crab"></div>
                            </div>
                        </div>
                    </div>
                    <div class="meal-type">
                        <div class="meal-container">
                            <div class="meal-text">
                                <h4>Spicy lamb keema pau</h4>

                            </div>
                        </div>
                        <img src="../images/spicy_lamb.png " alt="spicy_lamb">
                        <div class="stars">
                            <div class="stars-outer">
                                <div class="stars-inner" id="rateNumber_spicy_lamb"></div>
                            </div>
                        </div>
                    </div>
                    <div class="meal-type">
                        <div class="meal-container">
                            <div class="meal-text">
                                <h4>Steam-fried bao buns</h4>

                            </div>
                        </div>
                        <img src="../images/sheng_jian.png " alt="sheng_jian">
                        <div class="stars">
                            <div class="stars-outer">
                                <div class="stars-inner" id="rateNumber_sheng_jian"></div>
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

                            </div>
                        </div>
                        <img src="../images/lamb_shoulder.png" alt="lamb_shoulder">
                        <div class="stars">
                            <div class="stars-outer">
                                <div class="stars-inner" id="rateNumber_lamb_shoulder"></div>
                            </div>
                        </div>

                    </div>
                    <div class="meal-type">
                        <div class="meal-container">
                            <div class="meal-text">
                                <h4>Chicken souvlaki</h4>

                            </div>
                        </div>
                        <img src="../images/chicken_souvlaki.png " alt="chicken_souvlaki">
                        <div class="stars">
                            <div class="stars-outer">
                                <div class="stars-inner" id="rateNumber_chicken_souvlaki"></div>
                            </div>
                        </div>

                    </div>
                    <div class="meal-type">
                        <div class="meal-container">
                            <div class="meal-text">
                                <h4>Turkish kebabs with tomato chilli sauce</h4>

                            </div>
                        </div>
                        <img src="../images/turkish_kebabs.png " alt="turkish_kebabs">
                        <div class="stars">
                            <div class="stars-outer">
                                <div class="stars-inner" id="rateNumber_turkish_kebabs"></div>
                            </div>
                        </div>

                    </div>
                    <div class="meal-type">
                        <div class="meal-container">
                            <div class="meal-text">
                                <h4>Baja avocado tacos with chipotle crema </h4>


                            </div>
                        </div>
                        <img src="../images/baja_tacos.png " alt="baja_tacos">
                        <div class="stars">
                            <div class="stars-outer">
                                <div class="stars-inner" id="rateNumber_baja_tacos"></div>
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
	fetch("/api/reviews")
		.then((response) => response.json())

		.then((reviews) => renderStars(reviews));
	const rateNumber_chicken_kiev = document.getElementById(
		"nmbOfReservation_chicken_kiev"
	);
	const rateNumber_singapore_chilli_crab = document.getElementById(
		"rateNumber_singapore_chilli_crab"
	);
	const rateNumber_spicy_lamb = document.getElementById(
		"nmbOfReservation_spicy_lamb"
	);
	const rateNumber_sheng_jian = document.getElementById(
		"nmbOfReservation_sheng_jian"
	);
	const rateNumber_lamb_shoulder = document.getElementById(
		"nmbOfReservation_lamb_shoulder"
	);

	const rateNumber_chicken_souvlaki = document.getElementById(
		"nmbOfReservation_chicken_souvlaki"
	);
	const rateNumber_turkish_kebabs = document.getElementById(
		"nmbOfReservation_turkish_kebabs"
	);
	const rateNumber_baja_tacos = document.getElementById(
		"nmbOfReservation_baja_tacos"
	);

	function renderStars(reviews) {
		let starPercentage;
		const starsTotal = 5;
		let starPercentageRounded;

		reviews.forEach((review) => {
			if (review.meal_id === 1) {
				let chicken_kiev_stars = `${review.stars}`;
				starPercentage = (Number(chicken_kiev_stars) / starsTotal) * 100;
				starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
				document.getElementById(
					"nmbOfReservation_chicken_kiev"
				).style.width = starPercentageRounded;
			} else if (review.meal_id === 2) {
				let singapore_chilli_crab_stars = `${review.stars}`;

				starPercentage =
					(Number(singapore_chilli_crab_stars) / starsTotal) * 100;
				starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
				document.getElementById(
					"rateNumber_singapore_chilli_crab"
				).style.width = starPercentageRounded;
			} else if (review.meal_id === 3) {
				let spicy_lamb_stars = `${review.stars}`;

				starPercentage = (Number(spicy_lamb_stars) / starsTotal) * 100;
				starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
				document.getElementById(
					"nmbOfReservation_spicy_lamb"
				).style.width = starPercentageRounded;
			} else if (review.meal_id === 4) {
				let sheng_jian_stars = `${review.stars}`;

				starPercentage = (Number(sheng_jian_stars) / starsTotal) * 100;
				starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
				document.getElementById(
					"nmbOfReservation_sheng_jian"
				).style.width = starPercentageRounded;
			} else if (review.meal_id === 5) {
				let lamb_shoulder_stars = `${review.stars}`;

				starPercentage = (Number(lamb_shoulder_stars) / starsTotal) * 100;
				starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
				document.getElementById(
					"nmbOfReservation_lamb_shoulder"
				).style.width = starPercentageRounded;
			} else if (review.meal_id === 6) {
				let chicken_souvlaki_stars = `${review.stars}`;

				starPercentage = (Number(chicken_souvlaki_stars) / starsTotal) * 100;
				starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
				document.getElementById(
					"nmbOfReservation_chicken_souvlaki"
				).style.width = starPercentageRounded;
			} else if (review.meal_id === 7) {
				let turkish_kebabs_stars = `${review.stars}`;

				starPercentage = (Number(turkish_kebabs_stars) / starsTotal) * 100;
				starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
				document.getElementById(
					"nmbOfReservation_turkish_kebabs"
				).style.width = starPercentageRounded;
			} else if (review.meal_id === 8) {
				let baja_tacos_stars = `${review.stars}`;

				starPercentage = (Number(baja_tacos_stars) / starsTotal) * 100;
				starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
				document.getElementById(
					"nmbOfReservation_baja_tacos"
				).style.width = starPercentageRounded;
			}
		});
	}

	router.updatePageLinks();
};
