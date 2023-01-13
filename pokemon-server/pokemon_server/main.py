from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, parse_obj_as
import json
import os
import uvicorn


current_dir = os.path.dirname(os.path.abspath(__file__))
json_path = os.path.join(current_dir, 'data.json')
app = FastAPI()


class Evolution(BaseModel):
    id: str
    name: str


class Pokemon(BaseModel):
    name: str
    description: str
    types: list[str]
    evolutions: list[Evolution]
    id: str
    image_url: str



with open(json_path, 'r') as f:
    pokemons = parse_obj_as(list[Pokemon], json.load(f))


@app.get("/")
def ping():
    return "OK"


@app.get("/pokemons")
def get_pokemons():
    return pokemons


@app.get("/pokemon/{id}")
def get_pokemon(id: str):
    found_pokemons = [x for x in pokemons if x.id == id]
    if len(found_pokemons) == 0:
        raise HTTPException(status_code=404, detail=f"pokemon id {id} wasn't found")
    return found_pokemons[0]


def run_local():
    uvicorn.run(app, host="0.0.0.0", port=3001)
run_local()