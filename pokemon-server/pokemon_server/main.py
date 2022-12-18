from fastapi import FastAPI
from pydantic import BaseModel
import json
import os


current_dir = os.path.dirname(os.path.abspath(__file__))
json_path = os.path.join(current_dir, 'data.json')
print(json_path)
app = FastAPI()


class HeldItem(BaseModel):
    name: str
    description: str


class Pokemon(BaseModel):
    id: int
    name: str
    image_url: str
    description: str
    types: list[str]
    abilities: list[str]
    held_items: list[HeldItem]


# Open the JSON file
with open(json_path, 'r') as f:
    # Load the JSON data into a Python variable
    pokemons = json.load(f)


@app.get("/pokemons")
def get_pokemons():
    return pokemons


@app.get("/pokemon/{id}")
def get_pokemon(id: int):
    if id > len(pokemons):
        return {"error": f"pokemon id {id} wasn't found"}
    else:
        return pokemons[id-1]


@app.put("/pokemon/{id}")
def update_pokemon(id: int, pokemon: Pokemon):
    if id > len(pokemons):
        return {"error": f"pokemon id {id} wasn't found"}
    else:
        pokemons[id-1] = pokemon
        return pokemons[id-1]


def run_local():
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=3001)
