import React, { useEffect, useState } from "react";

function App() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data.reviews || []));
  }, []);

  return (
    <div>
      <h1>Food Reviews</h1>
      <ul>
        {reviews.map((r) => (
          <li key={r.id}>{r.title} - {r.status}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
