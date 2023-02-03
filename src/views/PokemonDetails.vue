<template>
  <div class="pokemon_details">
    <h5>this details of pokemon</h5>
    <p>HP :{{ pokemon.stats.HP }}</p>
    <p>attack :{{ pokemon.stats.attack }}</p>
    <p>defense:{{ pokemon.stats.defense }}</p>
    <p>special_attack:{{ pokemon.stats.special_attack }}</p>
    <p>special_defense:{{ pokemon.stats.special_defense }}</p>
    <p>speed:{{ pokemon.stats.speed }}</p>

    <div v-for="apiTypes in pokemon.apiTypes">
      <img :src="apiTypes.image" alt="" />
    </div>
  </div>
</template>

<script>
import PokemonService from "../services/PokemonListService.js";
export default {
  data() {
    return {
      pokemon: null,
      id: 1,
    };
  },
  created() {
    PokemonService.getPokemon(this.id)
      .then((response) => {
        // console.log('pokemonData',response.data);
        this.pokemon = response.data;
        // console.log(this.pokemonData);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style lang="css" scoped>
.pokemon_details{
  display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
