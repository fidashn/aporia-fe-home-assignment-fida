import axios from 'axios';
export type Pokemon =
  {
    description: string,
    evolutions: any[],
    id: string,
    image_url: string,
    name: string,
    types: string[]
  }


interface IResponseData {
  data: Pokemon[]
}

export const responseData:IResponseData = {
  data: []
};

export async function onGet(event) {
  const response = await axios
    .get("http://127.0.0.1:3001/pokemons")
    .then((response) => {
      responseData.data = response.data
      // inputStr = (event.target.value)
      // console.log(event.target.value)
      // console.log(responseData)
      // pokeName(responseData)
      subTextExists(event)
      pokeType(responseData.data)
      // pokeTypeCards(responseData)
      // pokeImage(responseData)
      // pokeDescription(responseData)
    })
    .catch((errors) => {
      console.log(errors);
    });
  return response
}

export let inputStr: string = ""
export let itExists: string | undefined = ""
export async function subTextExists(event) {
  inputStr = event.target.value
  console.log(inputStr)
  await pokeName(responseData.data)
  if (pokemonNames.length > 0) {
    itExists = pokemonNames.find((element: string) => element.toLowerCase().includes(inputStr.toLowerCase()))
    console.log(itExists)
  }
}
export let pokemonNames: Array<string> = []
export async function pokeName(responseData: Pokemon[]) {
  pokemonNames = await responseData.map(item => item.name.toLowerCase())
  console.log(pokemonNames)
}

let pokemonTypes: Array<string[]> = []
let pokemonTypesFlattened: Array<string> = []
export let pokemonTypesFiltered: Array<string> = []
export async function pokeType(responseData: Pokemon[]) {
  pokemonTypes = await responseData.map(item => item.types)
  pokemonTypesFlattened = pokemonTypes.flat()
  pokemonTypesFiltered = pokemonTypesFlattened.filter((item,
    index) => pokemonTypesFlattened.indexOf(item) === index);
    console.log(pokemonTypesFiltered)
}

// let pokemonTypeCards: Array<string[]> = []
// let pokeTypeCardsArray: Array<string[]> = []

// export async function pokeTypeCards(responseData: Pokemon[]){
//   responseData.filter(item=> return item.types === isChecked)
// }




let pokemonImages: Array<string> = []
export  async function pokeImage(responseData: Pokemon[]) {
  pokemonImages = await responseData.map(item => item.image_url)
  console.log(pokemonImages)
}

let pokemonDescription: Array<string> = []
export async function pokeDescription(responseData: Pokemon[]) {
  pokemonDescription = await responseData.map(item => item.description)
  console.log(pokemonDescription)
}




