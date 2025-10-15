from flask_sqlalchemy import SQLAlchemy
from datetime import date

db = SQLAlchemy()

class Task(db.Model):
    __tablename__ = 'tasks'
    
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text)
    status = db.Column(db.String(20), default='pending')
    due_date = db.Column(db.Date, default=date.today)
    
    def __repr__(self):
        return f"<Task {self.title}>"
