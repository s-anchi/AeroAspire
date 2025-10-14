from flask import Flask
from app.models import db, Task
from datetime import date

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///tasks.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

with app.app_context():
    # Create the database and tables
    db.create_all()

    # Add a sample task
    new_task = Task(
        title="Finish Flask Projects",
        description="Build API endpoints for task management",
        status="in-progress",
        due_date=date(2025, 10, 20)
    )

    db.session.add(new_task)
    db.session.commit()

    # Query and print all tasks
    tasks = Task.query.all()
    for task in tasks:
        print(f"Title: {task.title}")
        print(f"Description: {task.description}")
        print(f"Status: {task.status}")
        print(f"Due Date: {task.due_date}")
        print("-" * 40)
