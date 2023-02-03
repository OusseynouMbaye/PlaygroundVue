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
    PokemonService.getPokemons()
      .then((response) => {
        // console.log('pokemonData',response.data);
        this.pokemonData = response.data;
        // console.log(this.pokemonData);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style lang="css" scoped>
.container {
  display: flex;
  gap: 32px;
}
</style>
