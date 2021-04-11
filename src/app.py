import json
from flask import request
from .models import Personajes, SableLaser
from . import inicio, database
    

app = inicio()
app.debug = True

@app.route('/')
def index():
    return 'Index'

@app.route('/personajes', methods=['POST'])
def addpersonaje():
    personaje = request.get_json()
    name = personaje['name']
    edad = personaje['edad']
    database.add_instance(Personajes, name = name, edad = edad)
   
    return json.dumps("Añadido"), 200


@app.route('/personajes', methods=['GET'])
def getpersonajes():
    personajes = database.get_all(Personajes)
    if personajes is None:
        return json("La bd está vacía.")

    personajes_all = []
    for personaje in personajes:
        nuevo_personaje = {
            "id": personaje.id,
            "name": personaje.name,
            "edad": personaje.edad,

        }

        personajes_all.append(nuevo_personaje)
    return json.dumps(personajes_all), 200
  
  
  
 



@app.route('/personajes/<string:personaje_name>', methods=['DELETE'])
def deletepersonaje(personaje_name):
   database.delete_instance(Personajes, name=personaje_name)


@app.route('/sablesLaser', methods=['POST'])
def addLaser():
    SableLaser = request.get_json()
    color = SableLaser['color']
    database.add_instance(SableLaser, color = color)
   
    return json.dumps("Añadido"), 200


@app.route('/sablesLaser', methods=['GET'])
def getpersonajes():
    SablesLaser = database.get_all(SableLaser)
    if SablesLaser is None:
        return json("La bd está vacía.")

    sableLaser_all = []
    for sable in SablesLaser:
        nuevo_sable = {
            "id": sable.id,
            "color": sable.name,
           

        }

        sableLaser_all.append(nuevo_sable)
    return json.dumps(sableLaser_all), 200
  
  
  
 



@app.route('/sablesLaser/<string:sablesLaser_color>', methods=['DELETE'])
def deletepersonaje(sablesLaser_color):
   database.delete_instance(Personajes, color=sablesLaser_color)


"""
  
@app.route('/personajes/<string:personaje_name>', methods=['PUT'])
def editpersonaje(personaje_name):
    personajesFound = [personaje for personaje in personajes if personaje['name'] == personaje_name]
    if (len(personajesFound) > 0):
        personajesFound[0]['name'] = request.json['name']
        personajesFound[0]['edad'] = request.json['edad']
        return jsonify({
            'message': 'personaje Updated',
            'personaje': personajesFound[0]
        })
    return jsonify({'message': 'personaje Not found'})

@app.route('/personajes/<string:personaje_name>')
def getpersonaje(personaje_name):
    personajesFound = [
        personaje for personaje in personajes if personaje['name'] == personaje_name.lower()]
    if (len(personajesFound) > 0):
        return jsonify({'personaje': personajesFound[0]})
    return jsonify({'message': 'personaje Not found'})  
        

""" 
