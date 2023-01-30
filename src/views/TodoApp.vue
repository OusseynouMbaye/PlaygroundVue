<template>
  <div class="container">
    <h2>{{ title }}</h2>
    <fa icon="fa-brands fa-twitter" />

    <form @submit.prevent="addTodo">
      <label for="newTodo"></label>
      <input v-model="newTodo" type="text" name="newTodo" id="newTodo" />
      <button type="submit" name="button">Add</button>
      <button @click="allDone" type="button">all Done</button>
    </form>
    <ul class="container">
      <li v-for="todo in todos" :key="todo">
        <input type="checkbox" v-model="todo.done" />
        <span :class="{ done: todo.done }">{{ ` ${todo.title}` }}</span>
        <span @click="remvoveTodo(todo)">
          <fa icon="fa-regular fa-trash-can" :style="{ color: 'red' }" />
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    data() {
    return {
      title: "Todo App",
      newTodo: "", // new todo  : when u add un new todo
      todos: [], // tableau qui va contenir les todo
      msg:"allo"
    };
  },
  methods: {
    addTodo() {
      this.todos.push({
        // id: (new Date().getTime()).toString(36), essaye de mettre un id
        title: this.newTodo,
        done: false,
      });
      this.newTodo = ""; // clear le input une fois je  submit
    },
    remvoveTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    },
    allDone() {
      this.todos.forEach((todo) => {
        todo.done = true;
      });
    },

    useDateForId() {
      var timestamp = new Date().getUTCMilliseconds();
      var now = new Date();

      timestamp = now.getFullYear().toString(); // 2011
      timestamp += (now.getMonth < 9 ? "0" : "") + now.getMonth().toString(); // JS months are 0-based, so +1 and pad with 0's
      timestamp += (now.getDate < 10 ? "0" : "") + now.getDate().toString(); // pad with a 0
      // ... etc... with .getHours(), getMinutes(), getSeconds(), getMilliseconds()
      return timestamp;
    },
  },
};

</script>

<style lang="css" scoped>

.done {
  text-decoration: line-through;
}
li {
  list-style: none;
}</style>
