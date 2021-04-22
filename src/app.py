import json
from flask import request
from flask import render_template
from .models import Character, Planets, Starships
from . import inicio, database
    

app = inicio()
app.debug = True

@app.route('/')
def index():
    return render_template('index.html')

## CHARACTERS

@app.route('/character', methods=['POST'])
def addCharacter():
    character = request.get_json()
    name = character['name']
    edad = character['edad']
    gender = character['gender']
    species = character['species']
    weapon = character['weapon']
    database.add_instance(Character, name = name, edad = edad, gender = gender, species = species, weapon = weapon)
   
    return json.dumps("Añadido"), 200


@app.route('/character', methods=['GET'])
def getCharacter():
    characters = database.get_all(Character)
    if characters is None:
        return json.dumps("BBDD is empty."), 200

    character_all = []
    for character in characters:
        new_character = {
            "id": character.id,
            "name": character.name,
            "edad": character.edad,
            "gender": character.gender,
            "species": character.species,
            "weapon": character.weapon,
        }

        character_all.append(new_character)
    return json.dumps(character_all), 200
  
  

@app.route('/character/<string:character_name>', methods=['DELETE'])
def deleteCharacter(character_name):
   database.delete_instance(Character, name=character_name)

## PLANETS

@app.route('/planet', methods=['POST'])
def addPlanet():
    planet = request.get_json()
    name = planet['name']
    population =  planet['population']
    diameter = planet['diameter']
    species =  planet['species']
    database.add_instance(Planets, name = name, population = population, diameter = diameter, species = species)
   
    return json.dumps("Añadido"), 200


@app.route('/planet', methods=['GET'])
def getPlanet():
    planets = database.get_all(Planets)
    if planets is None:
        return json.dumps("BBDD is empty."), 200

    planet_all = []
    for planet in planets:
        new_planet = {
            "id": planet.id,
            "name": planet.name,
            "population": planet.population,
            "diameter": planet.diameter,
            "species": planet.species,
        }

        planet_all.append(new_planet)
    return json.dumps(planet_all), 200
  
 
@app.route('/planet/<string:planet_name>', methods=['DELETE'])
def deletesables(planet_name):
   database.delete_instance(Planets, name=planet_name)

## STARSHIPS

@app.route('/starship', methods=['POST'])
def addStarship():
    starship = request.get_json()
    name = starship['name']
    model =  starship['model']
    length = starship['length']
    starship_class =  starship['starship_class']
    database.add_instance(Starships, name = name, model = model, length = length, starship_class = starship_class)
   
    return json.dumps("Añadido"), 200


@app.route('/starship', methods=['GET'])
def getStarship():
    starships = database.get_all(Starships)
    if starships is None:
        return json.dumps("BBDD is empty."), 200

    starship_all = []
    for starship in starships:
        new_planet = {
            "id": starship.id,
            "name": starship.name,
            "model": starship.model,
            "length": starship.length,
            "starship_class": starship.starship_class,
        }

        starship_all.append(new_planet)
    return json.dumps(starship_all), 200
  

@app.route('/starship/<string:starship_name>', methods=['DELETE'])
def deleteStarship(starship_name):
   database.delete_instance(Starships, name=starship_name)

#Ejemplo prueba.
"""

{
	"name" : "Obi-Wan Kenobi",
    "edad" : 35,
    "gender" : "Hombre",
    "species" : "Humano",
    "weapon" : "Sable Laser"
}


"""