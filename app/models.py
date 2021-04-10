import flask_sqlalchemy

db = flask_sqlalchemy.SQLAlchemy()


class Personajes(db.Model):
    __tablename__ = 'personajes'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    edad = db.Column(db.Integer)

