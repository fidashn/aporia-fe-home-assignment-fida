# Pokemon API
Welcome to the Pokemon API! This API allows you to retrieve a list of all pokemons and query for specific pokemon by ID.

## Prerequisites
Before you can run the server locally, you will need to have [python3](https://www.python.org/downloads/) and [poetry](https://python-poetry.org/) installed on your machine.

## Running the Server
To start the server, run the following command:

```
poetry run server
```
This will start the server and make the API available for use.

## API Endpoints
The following endpoints are available:

* `GET /pokemons`: Retrieves a list of all pokemons.

* `GET /pokemon/{id}`: Retrieves the pokemon with the specified ID.

## Example Usage
Here is an example of how to retrieve a list of all pokemons:

```python
import requests

response = requests.get("http://localhost:3001/pokemons")
pokemons = response.json()
print(pokemons)
```

And here is an example of how to query a specific pokemon by ID:

```python
import requests

response = requests.get("http://localhost:3001/pokemon/1")
pokemon = response.json()
print(pokemon)
```

## Disclaimer
This API is for a frontend home interview in the Aporia company and is not meant for production use.