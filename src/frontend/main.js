let root = document.location.origin;
let router = new Navigo(root);

// when no route specified it assumes the base route: "/"
router.on(window.handleHomeRequest).resolve();
router.on("/meals", window.handleMealsRequest).resolve();
router.on("/reservations", window.handleReservationsRequest).resolve();
router.on("/reviews", window.handleReviewsRequest).resolve();
router.on("/BookMeal/:id", window.handleBookMealRequest).resolve();
router.on("/AddReviews/:id", handleAddReviewsRequest).resolve();
