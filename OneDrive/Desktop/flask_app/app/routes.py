from flask import Blueprint, jsonify, request, render_template

main = Blueprint('main', __name__)

# Dummy in-memory storage (simulating reviews)
tasks = [
    {"id": 1, "restaurant": "Pizza Palace", "dish": "Margherita Pizza", "review": "Crispy and cheesy!", "rating": 5},
    {"id": 2, "restaurant": "Burger Hub", "dish": "Veggie Burger", "review": "Juicy and fresh!", "rating": 4}
]

@main.route('/')
def home():
    # This renders index.html
    return render_template('index.html')

# GET /tasks — fetch all reviews
@main.route('/tasks', methods=['GET'])
def get_tasks():
    return jsonify(tasks)

# POST /tasks — add a new review
@main.route('/tasks', methods=['POST'])
def add_task():
    data = request.get_json()
    if not data or "restaurant" not in data or "dish" not in data:
        return jsonify({"error": "Invalid data"}), 400

    new_task = {
        "id": len(tasks) + 1,
        "restaurant": data["restaurant"],
        "dish": data["dish"],
        "review": data.get("review", ""),
        "rating": data.get("rating", 0)
    }
    tasks.append(new_task)
    return jsonify(new_task), 201
