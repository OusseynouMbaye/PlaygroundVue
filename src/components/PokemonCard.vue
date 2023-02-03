<template>
  <router-link to="/pokeapp/1">
    <div class="poke_card">
      <article class="poke_card_article">
        <img :class="imgPoke" :src="pokemon.image" alt="" />
        <div class="poke_card_content">
          <h4>{{ pokemon.name }}</h4>
        </div>
      </article>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "PokemonCard",
  data() {
    return {
      imgPoke: "poke_img",
    };
  },
  props: {
    pokemon: Object,
  },
};
</script>

<style lang="css" scoped>
.poke_card {
  display: flex;
}
.poke_card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.poke_card_article {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.poke_card_content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.poke_img {
  border: 2px solid red;
  padding: 10px;
  border-radius: 50px;
  max-width: 50%;
}
</style>
