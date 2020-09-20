window.handleMealsRequest = () => {
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
                        <li><a href="meals" data-navigo>Meals</a></li>
                        <li><a href="meal/8" data-navigo>meal/1</a></li>
                        
                    </ul>
                </nav>
            </div>
            <body>

   <div class="meal">
    <div class="mealId">
    
<h1>meal Id</h1>
    </div>
    
    <div class="mealTitle">
    <h1>meal title</h1></div>
  </div>
<h1> Welcome to create new meal</h1>
  <table>
        <tr>
            <td>
                <form class="form" id="mealform">
                    <div>
                        <label>Meal ID</label><label class="ID-validation-error hide" id="fullNameValidationError">This field is required.</label>
                        <input type="number" name="MealID" id="MealID" >
                    </div>
                    <div>
                        <label>Title</label>
                        <input type="text" name="Title" id="Title">
                    </div>
                    <div>
                        <label>Description</label>
                        <input type="text" name="Description" id="Description">
                    </div>
                   
                     <div>
                        <label>Location</label>
                        <input type="text" name="Location" id="Location">
                    </div>
                     <div>
                        <label>When</label>
                        <input type="date" name="When" id="When">
                    </div>
                    <div>
                        <label>Price</label>
                        <input type="number" name="Price" id="Price">
                    </div>
                    <div  class="form-action-buttons">
                        <input type="submit" value="Submit">
                    </div>
                </form>
            </td>
             
        </tr>
    </table>
  </body>`;

	// make sure the backend api works before working with it here
	fetch("/api/meals")
		.then((response) => response.json())

		.then((meals) => renderConcerts(meals));
	const mealid = document.querySelector(".mealID");
	const title = document.querySelector(".mealTitle");
	function renderConcerts(meals) {
		meals.forEach((meal) => {
			const li_meal = document.createElement("li");
			const li_title = document.createElement("li");
			li_meal.innerHTML = meal.id;
			li_title.innerHTML = meal.title;
			title.appendChild(li_title);
			mealid.appendChild(li_meal);
		});
	}
	function readFormData() {
		let mealData = {};
		mealData["MealID"] = document.getElementById("MealID").value;
		mealData["Title"] = document.getElementById("Title").value;
		mealData["Description"] = document.getElementById("Description").value;
		mealData["Location"] = document.getElementById("Location").value;
		mealData["When"] = document.getElementById("When").value;
		mealData["Price"] = document.getElementById("Price").value;
		return mealData;
	}
	const subButton = document.querySelector(".form-action-buttons");
	subButton.addEventListener("click", readFormData);

	console.log(readFormData());
};
