window.handleHomeRequest = () => {
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
       
        <div class="front-image">
           <div class="title">
               <h1>International food fair</h1>
               <p>Come join us and taste food <br> for all over the world</p>           
            </div>
            <img src="./images/background2.jpg" alt="street-food">
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
    
</body>
 
  
  `;

	// make the router handle those links.
	router.updatePageLinks();
};
