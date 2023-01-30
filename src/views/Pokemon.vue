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
export default {
  components: {
    PokemonCard,
  },
  data() {
    return {
      pokemonData: [
        {
          id: 1,
          pokedexId: 1,
          name: "Bulbizarre",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
          slug: "Bulbizarre",
          stats: {
            HP: 45,
            attack: 49,
            defense: 49,
            special_attack: 65,
            special_defense: 65,
            speed: 45,
          },
        },
        {
          id: 2,
          pokedexId: 2,
          name: "Herbizarre",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
          slug: "Herbizarre",
          stats: {
            HP: 60,
            attack: 62,
            defense: 63,
            special_attack: 80,
            special_defense: 80,
            speed: 60,
          },
        },
      ],
    };
  },
};
</script>

<style lang="css" scoped>
.container {
  display: flex;
    gap: 32px;
}
</style>
