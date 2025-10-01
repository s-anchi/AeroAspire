import React from "react";
import FoodReviewCard from "./components/FoodReviewCard.jsx";


const dummyReviews = [
  {
    id: 1,
    reviewer: "Alice",
    food: "Pizza Margherita",
    rating: 4,
    review: "Delicious crust, fresh mozzarella, and flavorful basil!",
    image: "C:\Users\sanch\my-app--\src\pizza.jpg"
  },
  {
    id: 2,
    reviewer: "Bob",
    food: "Vegan Burger",
    rating: 5,
    review: "Amazing taste and great texture. Best vegan burger I've had.",
    image: "C:\Users\sanch\my-app--\src\burger.jpg"
  },
  {
    id: 3,
    reviewer: "Charlie",
    food: "Tiramisu",
    rating: 3,
    review: "Decent dessert, but a bit too sweet for my liking.",
    image: "C:\Users\sanch\my-app--\src\tiramisu.jpg"
  }
];

function App() {
  return (
    <div>
      {dummyReviews.map((item) => (
        <FoodReviewCard
          key={item.id}
          reviewer={item.reviewer}
          food={item.food}
          rating={item.rating}
          review={item.review}
          image={item.image}
        />
      ))}
    </div>
  );
}

export default App;
