from flask import Flask, request, jsonify
from app.models import db, Task

app = Flask(__name__)

# Database connection
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///tasks.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

# Create tables
with app.app_context():
    db.create_all()

# ----------------------------
# CREATE
# ----------------------------
@app.route('/tasks', methods=['POST'])
def create_task():
    data = request.json
    new_task = Task(
        title=data['title'],
        description=data.get('description', ''),
        status=data.get('status', 'pending')
    )
    db.session.add(new_task)
    db.session.commit()
    return jsonify({"message": "Task created", "task": new_task.title}), 201

# ----------------------------
# READ (All)
# ----------------------------
@app.route('/tasks', methods=['GET'])
def get_tasks():
    tasks = Task.query.all()
    return jsonify([{
        "id": t.id,
        "title": t.title,
        "description": t.description,
        "status": t.status,
        "due_date": str(t.due_date)
    } for t in tasks])

# ----------------------------
# UPDATE
# ----------------------------
@app.route('/tasks/<int:id>', methods=['PUT'])
def update_task(id):
    task = Task.query.get(id)
    if not task:
        return jsonify({"error": "Task not found"}), 404
    
    data = request.json
    task.title = data.get('title', task.title)
    task.description = data.get('description', task.description)
    task.status = data.get('status', task.status)
    
    db.session.commit()
    return jsonify({"message": "Task updated"})

# ----------------------------
# DELETE
# ----------------------------
@app.route('/tasks/<int:id>', methods=['DELETE'])
def delete_task(id):
    task = Task.query.get(id)
    if not task:
        return jsonify({"error": "Task not found"}), 404
    
    db.session.delete(task)
    db.session.commit()
    return jsonify({"message": "Task deleted"})

# ----------------------------
# Run app
# ----------------------------
if __name__ == '__main__':
    app.run(debug=True)
