import flask_sqlalchemy

db = flask_sqlalchemy.SQLAlchemy()


class Character(db.Model):
    __tablename__ = 'character'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    edad = db.Column(db.Integer)
    gender = db.Column(db.String(100))
    species = db.Column(db.String(100))
    weapon = db.Column(db.String(100))

class Planets(db.Model):
    __tablename__ = 'planets'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    population = db.Column(db.Integer)
    diameter = db.Column(db.Integer)
    species = db.Column(db.String(100))

class Starships(db.Model):
    __tablename__ = 'starships'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    model = db.Column(db.String(100))
    length = db.Column(db.Integer)
    starship_class = db.Column(db.String(100))
