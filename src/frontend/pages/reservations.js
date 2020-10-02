window.handleReservationsRequest = () => {
	document.body.innerHTML = `
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="./index.css">
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
                        <div class="number_of_reservations">
                            <p>Number of reservations: <b id="nmbOfReservation_chicken_kiev">0</b></p>

                        </div>     
                    </div>
                    <div class="meal-type">
                        <div class="meal-container">
                            <div class="meal-text">
                                <h4>Singapore chilli crab</h4>
                                 
                            </div>
                        </div>
                        <img src="../images/singapore_chilli_crab.png " alt="singapore_chilli_crab">
                        <div class="number_of_reservations">
                            <p>Number of reservations: <b id="nmbOfReservation_singapore_chilli_crab">0</b></p>

                        </div>         
                    </div>
                    <div class="meal-type">
                        <div class="meal-container">
                            <div class="meal-text">
                                <h4>Spicy lamb keema pau</h4>
                                 
                            </div>
                        </div>
                        <img src="../images/spicy_lamb.png " alt="spicy_lamb">
                        <div class="number_of_reservations">
                            <p>Number of reservations: <b id="nmbOfReservation_spicy_lamb">0</b></p>

                        </div>                 
                    </div>
                    <div class="meal-type">
                        <div class="meal-container">
                            <div class="meal-text">
                                <h4>Steam-fried bao buns</h4>                                

                            </div>
                        </div>
                        <img src="../images/sheng_jian.png " alt="sheng_jian">
                        <div class="number_of_reservations">
                            <p>Number of reservations: <b id="nmbOfReservation_sheng_jian">0</b></p>

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
                        <div class="number_of_reservations">
                            <p>Number of reservations: <b id="nmbOfReservation_lamb_shoulder">0</b></p>

                        </div>
                         
                    </div>
                    <div class="meal-type">
                        <div class="meal-container">
                            <div class="meal-text">
                                <h4>Chicken souvlaki</h4>
                                
                            </div>
                        </div>
                        <img src="../images/chicken_souvlaki.png " alt="chicken_souvlaki">
                        <div class="number_of_reservations">
                            <p>Number of reservations: <b id="nmbOfReservation_chicken_souvlaki">0</b></p>

                        </div>
                         
                    </div>
                    <div class="meal-type">
                        <div class="meal-container">
                            <div class="meal-text">
                                <h4>Turkish kebabs with tomato chilli sauce</h4>
                           
                            </div>
                        </div>
                        <img src="../images/turkish_kebabs.png " alt="turkish_kebabs">
                        <div class="number_of_reservations">
                            <p>Number of reservations: <b id="nmbOfReservation_turkish_kebabs">0</b></p>

                        </div>
                      
                    </div>
                    <div class="meal-type">
                        <div class="meal-container">
                            <div class="meal-text">
                                <h4>Baja avocado tacos with chipotle crema </h4>
                                 

                            </div>
                        </div>
                        <img src="../images/baja_tacos.png " alt="baja_tacos">
                        <div class="number_of_reservations">
                            <p>Number of reservations: <b id="nmbOfReservation_baja_tacos">0</b></p>

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
	fetch("/api/reservations")
		.then((response) => response.json())

		.then((reservations) => renderMeals(reservations));
	const number_chicken_kiev = document.getElementById(
		"nmbOfReservation_chicken_kiev"
	);
	const number_singapore_chilli_crab = document.getElementById(
		"nmbOfReservation_singapore_chilli_crab"
	);
	const number_spicy_lamb = document.getElementById(
		"nmbOfReservation_spicy_lamb"
	);
	const number_sheng_jian = document.getElementById(
		"nmbOfReservation_sheng_jian"
	);
	const number_lamb_shoulder = document.getElementById(
		"nmbOfReservation_lamb_shoulder"
	);

	const number_chicken_souvlaki = document.getElementById(
		"nmbOfReservation_chicken_souvlaki"
	);
	const number_turkish_kebabs = document.getElementById(
		"nmbOfReservation_turkish_kebabs"
	);
	const number_baja_tacos = document.getElementById(
		"nmbOfReservation_baja_tacos"
	);
	function renderMeals(reservations) {
		reservations.forEach((reservation) => {
			if (reservation.id === 1) {
				number_chicken_kiev.innerHTML = `${reservation.number_of_guests}`;
			} else if (reservation.meal_id === 2) {
				number_singapore_chilli_crab.innerHTML = `${reservation.number_of_guests}`;
			} else if (reservation.meal_id === 3) {
				number_spicy_lamb.innerHTML = `${reservation.number_of_guests}`;
			} else if (reservation.meal_id === 4) {
				number_sheng_jian.innerHTML = `${reservation.number_of_guests}`;
			} else if (reservation.meal_id === 5) {
				number_lamb_shoulder.innerHTML = `${reservation.number_of_guests}`;
			} else if (reservation.meal_id === 6) {
				number_chicken_souvlaki.innerHTML = `${reservation.number_of_guests}`;
			} else if (reservation.meal_id === 7) {
				number_turkish_kebabs.innerHTML = `${reservation.number_of_guests}`;
			} else if (reservation.meal_id === 8) {
				number_baja_tacos.innerHTML = `${reservation.number_of_guests}`;
			}
		});
	}

	router.updatePageLinks();
};
