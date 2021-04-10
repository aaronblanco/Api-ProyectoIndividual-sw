import json
from flask import request
from .models import Personajes
from . import inicio, database
    

app = inicio()

@app.route('/personajes', methods=['GET'])
def getpersonajes():
    personajes = database.get_all(Personajes)
    personajes_all = []
    for personaje in personajes:
        nuevo_personaje = {
            "id": personaje.id,
            "name": personaje.name,
            "edad": personaje.edad,

        }

        personajes_all.append(nuevo_personaje)
    return json.dumps(personajes_all), 200
  
  
  
 

@app.route('/personajes', methods=['POST'])
def addpersonaje():
    personaje = request.get_json()
    name = personaje['name']
    edad = personaje['edad']
    database.add_instance(Personajes, name = name, edad = edad)
   
    return json.dumps("Añadido"), 200



@app.route('/personajes/<string:personaje_name>', methods=['DELETE'])
def deletepersonaje(personaje_name):
   database.delete_instance(Personajes, name=personaje_name)



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
