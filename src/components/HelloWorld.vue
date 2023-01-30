<script lang="js">
export default{
  data(){
  return{

    msg: String,
    count : 0
  }
}
}
</script>

<template>
  <!-- <h1>{{ msg }}</h1> -->

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>

<style scoped>

</style>
