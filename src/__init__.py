from flask import Flask
from flask_cors.extension import CORS

from .models import db
from . import config

##Inicializador, se usa cors para evitar problemas de bloquear las peticiones. Está consigurado para usar sqlalchemy. Mapeador de objetos relacional (ORM)
#Permite interactuar con la base de datos con objetos y funciones python.
def inicio():

    app = Flask(__name__)
    if __name__ == '__main__':
      app.run(host='0.0.0.0')
      app.debug = True
    
    app.config['CORS_HEADERS'] = 'Content-Type'
    print(config.DATABASE_CONNECTION_URI)
    app.config['SQLALCHEMY_DATABASE_URI'] = config.DATABASE_CONNECTION_URI
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    
    app.app_context().push()
    
    db.init_app(app)
    db.drop_all()
    db.create_all()
    return app