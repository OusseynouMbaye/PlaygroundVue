import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/OusseynouMbaye/PlaygroundVue",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});


export default{
    getPokemon(){
        return apiClient.get('/pokemonData')
    }
}