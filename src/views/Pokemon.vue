<template>
  <div class="container">
    <PokemonCard
      v-for="pokemon in pokemonData"
      :key="pokemon.id"
      :pokemon="pokemon"
    />
  </div>
</template>

<script>
import PokemonCard from "../components/PokemonCard.vue";
import PokemonService from "../services/PokemonListService.js";

export default {
  components: {
    PokemonCard,
  },
  data() {
    return {
      pokemonData: null,
    };
  },
  created() {
    PokemonService.getPokemon()
      .then((response) => {
        // console.log('pokemonData',response.data);
        this.pokemonData = response.data;
        // console.log(this.pokemonData);
      })
      .catch((error) => {
        console.log(error);
      });
    fetch("https://my-json-server.typicode.com/OusseynouMbaye/PlaygroundVue/pokemonData")
      .then((response) =>
        console.log(
          "🚀fetch",
          response.json()
        )
      )
      .then((data) => console.log(data));
  },
};
</script>

<style lang="css" scoped>
.container {
  display: flex;
  gap: 32px;
}
</style>
