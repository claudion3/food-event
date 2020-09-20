window.handleHomeRequest = () => {
	document.body.innerHTML = `
  <head>
       <link rel="stylesheet" href="./index.css" />
  </head>
  <!--navigation bar-->
<div class="logo-nav">

            <nav class="navbar">
                    <img src="./images/logo.png" alt="logo">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="meals" data-navigo>Meals</a></li>
                        <li><a href="meal/8" data-navigo>meal/8</a></li>
                        
                    </ul>
                </nav>
            </div>
  <body>
     
        <div class="title">
            <h1>International food fair</h1>
            <h2>Come join us and test food for all over the world</h2>
        </div>         

    
</body>
 
  
  `;

	// if any links are added to the dom, use this function
	// make the router handle those links.
	router.updatePageLinks();
};
