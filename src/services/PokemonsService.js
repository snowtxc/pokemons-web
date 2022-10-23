
import axios from "axios"
export const PokemonsService  = {
    getPokemonsByGeneration: async(id)=>{
       const response = await axios.get("https://pokeapi.co/api/v2/generation/"+id);
       const res = response.data["pokemon_species"];

       let finalRes = [];
       for(let i = 0; i < res.length; i++){
       
        const additional_data = await  axios.get("https://pokeapi.co/api/v2/pokemon/"+res[i].name);
        const newRes  ={
              ...res[i],
              ...additional_data.data
        }
        finalRes.push(newRes);
       }
       
       return finalRes;

       
      
    }  
}

