import React, { useState, useEffect } from "react";
import { TextField, Button, AppBar, Toolbar, Typography, Card, CardContent } from "@mui/material";

function FoodVloggss() {
  // State for reviews
  const [reviews, setReviews] = useState([]);

  // Form state
  const [foodName, setFoodName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  const [errors, setErrors] = useState({});

  // Dummy fetch effect (simulate API call)
  useEffect(() => {
    const dummyData = [
      { id: 1, foodName: "Pizza", review: "Cheesy and amazing!", rating: 5 },
      { id: 2, foodName: "Burger", review: "Juicy but a little oily", rating: 4 },
    ];
    setReviews(dummyData);
  }, []);

  // Validation function
  const validate = () => {
    const newErrors = {};
    if (!foodName.trim()) newErrors.foodName = "Food name is required";
    if (foodName.length < 3) newErrors.foodName = "Food name must be at least 3 characters";
    if (!review.trim()) newErrors.review = "Review is required";
    if (review.length < 10) newErrors.review = "Review must be at least 10 characters";
    if (!rating) newErrors.rating = "Rating is required";
    else if (isNaN(rating)) newErrors.rating = "Rating must be a number";
    else if (rating < 1 || rating > 5) newErrors.rating = "Rating must be between 1 and 5";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newReview = {
      id: Date.now(),
      foodName,
      review,
      rating: Number(rating),
    };

    setReviews([...reviews, newReview]);

    // Reset form
    setFoodName("");
    setReview("");
    setRating("");
    setErrors({});
  };

  return (
    <div>
      {/* Header */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">🍴 FoodVloggss - Food Reviews</Typography>
        </Toolbar>
      </AppBar>

      {/* Form */}
      <form onSubmit={handleSubmit} style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "15px", maxWidth: "400px", margin: "auto" }}>
        <TextField
          label="Food Name"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
          error={!!errors.foodName}
          helperText={errors.foodName}
          fullWidth
        />
        <TextField
          label="Review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          error={!!errors.review}
          helperText={errors.review}
          multiline
          rows={3}
          fullWidth
        />
        <TextField
          label="Rating (1-5)"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          error={!!errors.rating}
          helperText={errors.rating}
          fullWidth
        />
        <Button variant="contained" color="primary" type="submit">
          Add Review
        </Button>
      </form>

      {/* Render list of reviews */}
      <div style={{ padding: "20px", display: "grid", gap: "15px" }}>
        {reviews.map((item) => (
          <Card key={item.id}>
            <CardContent>
              <Typography variant="h6">{item.foodName}</Typography>
              <Typography variant="body1">{item.review}</Typography>
              <Typography variant="body2" color="text.secondary">
                ⭐ Rating: {item.rating}/5
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default FoodVloggss;
