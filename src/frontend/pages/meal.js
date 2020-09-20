window.handleMealRequest = (params) => {



	document.body.innerHTML = `
  <head>
  <link rel="stylesheet" href="./index.css" />
</head>
  <!--navigation bar-->
            <div class="logo-nav">

                <nav class="navbar">
                    <img src="./images/logo.png" alt="logo">
                    <ul>
                        <li><a href="/" data-navigo>Home</a></li>
                        <li><a href="/meals" data-navigo>Meals</a></li>               
                        
                    </ul>
                </nav>
            </div> 
  <h1>Meal with id ${params.id}</h1>
  
  <table class="mealList" id="mealList">
                    <thead>
                        <tr>
                            <th>Meal ID</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Location</th>
                            <th>When</th>
                            <th>Price</th>
                            
                        </tr>
                    </thead>
  
                            <tr class="mealID"></tr>
                            <tr class="MealTitle"></tr>
                            <tr class="mealDescription"></tr>
                            <tr class="mealLocation"></tr>
                            <tr class="mealWhen"></tr>
                            <tr class="mealPrice"></tr>
                  

                    
</table>
  
  
  
  `;
  fetch("/api/meals")
	.then((response) => response.json())
	.then((meals) => renderConcerts(meals);

function renderConcerts(meals) {
  const ul = document.querySelector(".mealID");
	meals.forEach((meal) => {
		
		const li = document.createElement("li");
		li.innerHTML = meal.id;
		ul.appendChild(li);
	});
}
};
