from app import app, db, FoodReview
from datetime import date

def seed_data():
    sample_reviews = [
        FoodReview(title="Pizza Palace", status="done", content="Delicious thin crust!", due_date=date(2025, 10, 20)),
        FoodReview(title="Sushi Spot", status="pending", content="Great ambiance", due_date=date(2025, 10, 22)),
    ]
    db.session.bulk_save_objects(sample_reviews)
    db.session.commit()
    print("✅ Database seeded successfully!")

if __name__ == "__main__":
    with app.app_context():  # 👈 Fix: create application context
        seed_data()
