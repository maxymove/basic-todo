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
      this.$emit("add:todo", this.newTodo);
      this.newTodo = "";
    },
  },
};
</script>

<style></style>
