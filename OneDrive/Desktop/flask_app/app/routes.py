from flask import Blueprint, jsonify, request

main = Blueprint('main', __name__)

# Dummy in-memory storage
tasks = [
    {"id": 1, "title": "Add Review"},
    {"id": 2, "title": "Give Rating"}
]

@main.route('/')
def home():
    return "Welcome To FOODVLOGGSS!!"

# GET /tasks
@main.route('/tasks', methods=['GET'])
def get_tasks():
    return jsonify(tasks)

# POST /tasks
@main.route('/tasks', methods=['POST'])
def add_task():
    data = request.get_json()
    if not data or "title" not in data:
        return jsonify({"error": "Task title is required"}), 400

    new_task = {
        "id": len(tasks) + 1,
        "title": data["title"]
    }
    tasks.append(new_task)
    return jsonify(new_task), 201
