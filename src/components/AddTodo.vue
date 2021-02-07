<template>
  <div>
    <input
      type="text"
      class="todo-input"
      placeholder="what's your goal today"
      v-model="newTodo"
      @keyup.enter="addTodo"
    />
  </div>
</template>

<script>
export default {
  name: "add-todo",
  data() {
    return {
      newTodo: "",
    };
  },
  methods: {
    addTodo() {
      const lastId =
        this.$store.state.todos.length > 0
          ? this.$store.state.todos[this.$store.state.todos.length - 1].id
          : 0;
      const newId = lastId + 1;
      this.$store.commit("addTodo", {
        id: newId,
        title: this.newTodo,
        completed: false,
        editing: false,
        titleCached: "",
      });
      this.newTodo = "";
    },
  },
};
</script>

<style></style>
