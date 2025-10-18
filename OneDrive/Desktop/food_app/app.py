from flask import Flask, request, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///foodreviews.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# ------------------ DATABASE MODEL ------------------ #
class FoodReview(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    status = db.Column(db.String(20))
    due_date = db.Column(db.Date)
    content = db.Column(db.Text)

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "status": self.status,
            "due_date": self.due_date.isoformat() if self.due_date else None,
            "content": self.content
        }

# Create tables
with app.app_context():
    db.create_all()

# ------------------ ROUTES ------------------ #

@app.route('/')
def home():
    return render_template('index.html')

# API endpoint: GET reviews with filters + search + pagination
@app.route('/api/reviews', methods=['GET'])
def get_reviews():
    query = FoodReview.query

    # filters
    status = request.args.get('status')
    due_date = request.args.get('due_date')  # format YYYY-MM-DD
    title = request.args.get('title')

    if status:
        query = query.filter(FoodReview.status == status)
    if due_date:
        query = query.filter(FoodReview.due_date == due_date)
    if title:
        query = query.filter(FoodReview.title.ilike(f"%{title}%"))

    # pagination
    page = request.args.get('page', 1, type=int)
    per_page = request.args.get('per_page', 5, type=int)

    pagination = query.paginate(page=page, per_page=per_page, error_out=False)
    reviews = [r.to_dict() for r in pagination.items]

    return jsonify({
        "total": pagination.total,
        "pages": pagination.pages,
        "page": page,
        "per_page": per_page,
        "reviews": reviews
    })

# API endpoint: POST add review
@app.route('/api/reviews', methods=['POST'])
def add_review():
    data = request.get_json()
    new_review = FoodReview(
        title=data['title'],
        status=data.get('status'),
        content=data.get('content'),
        due_date=datetime.strptime(data['due_date'], "%Y-%m-%d").date() if data.get('due_date') else None
    )
    db.session.add(new_review)
    db.session.commit()
    return jsonify({"message": "Review added successfully"}), 201

if __name__ == '__main__':
    app.run(debug=True)
