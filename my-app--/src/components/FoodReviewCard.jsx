import React from "react";

function FoodReviewCard({ reviewer, food, rating, review, image }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "16px",
      margin: "12px 0",
      borderRadius: "8px",
      background: "#f9f9f9",
      display: "flex",
      alignItems: "flex-start"
    }}>
      {image && (
        <img
          src={image}
          alt={food}
          style={{ width: "80px", height: "80px", borderRadius: "8px", marginRight: "16px" }}
        />
      )}
      <div>
        <h3>{food}</h3>
        <p>
          <strong>Reviewer:</strong> {reviewer}
        </p>
        <p>
          <strong>Rating:</strong> {rating} / 5
        </p>
        <p>{review}</p>
      </div>
    </div>
  );
}

export default FoodReviewCard;
