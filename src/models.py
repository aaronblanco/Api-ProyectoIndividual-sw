import flask_sqlalchemy

db = flask_sqlalchemy.SQLAlchemy()


class Character(db.Model):
    __tablename__ = 'character'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(100), unique=True, nullable=True)
    age = db.Column(db.Integer, nullable=True)
    gender = db.Column(db.String(100),  nullable=True)
    species = db.Column(db.String(100), nullable=True)
    weapon = db.Column(db.String(100),  nullable=True)
    url = db.Column(db.String(10000),  nullable=True)
    starships = db.relationship('Starships',
        backref=db.backref('character', lazy=True))



class Planets(db.Model):
    __tablename__ = 'planets'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(100), unique=True, nullable=True)
    population = db.Column(db.Integer, nullable=True)
    diameter = db.Column(db.Integer,  nullable=True)
    species = db.Column(db.String(100),  nullable=True)
    url = db.Column(db.String(10000),  nullable=True)

class Starships(db.Model):
    __tablename__ = 'starships'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(100), unique=True, nullable=True)
   # model = db.Column(db.String(100), nullable=True)
    length = db.Column(db.Integer,  nullable=True)
    starship_class = db.Column(db.String(100),  nullable=True)
    url = db.Column(db.String(10000),  nullable=True)
    character_id = db.Column(db.Integer, db.ForeignKey('character.id'),
        nullable=True)