<template>
  <div>
    <h1 style="text-align: center">{{ headline }}</h1>
    <add-todo />
    <todo-item
      v-for="todo in todosFilter"
      :key="todo.id"
      class="todo-item"
      :todo="todo"
    />

    <todo-list-filter />

    <div class="item-remaining">
      <strong>{{ itemsRemaining }} items remaining</strong>
    </div>
  </div>
</template>

<script>
import AddTodo from "./AddTodo.vue";
import TodoItem from "./TodoItem.vue";
import TodoListFilter from "./TodoListFilter.vue";
export default {
  components: { TodoItem, AddTodo, TodoListFilter },
  name: "todo-list",
  props: {
    headline: String,
  },

  methods: {},
  computed: {
    todosFilter() {
      return this.$store.getters.todosFilter;
    },
    itemsRemaining() {
      return this.$store.getters.itemsRemaining;
    },
  },
};
</script>

<style lang="scss">
.todo-input {
  width: 100%;
  padding: 10px 18px;
  font-size: 18px;
  margin-bottom: 16px;
  &:focus {
    outline: 0;
  }
}

.todo-item {
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.remove-item {
  cursor: pointer;
  margin-left: 14px;
  &:hover {
    color: black;
  }
}

.todo-item-edit {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  font-size: 24px;
}

// important css syntax to apply to only the span inside that particular div
div.action-icon > span {
  cursor: pointer;
  margin-left: 25px;
  &:hover {
    color: darkslategrey;
  }
}

.item-button {
  margin-top: 3%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    cursor: pointer;
    color: #2c3e50;
    font-size: 18px;
    background: #ffffff;
    padding: 10px;
    &:hover {
      color: #ffffff !important;
      background: #2c3e50;
      border-color: black !important;
    }
  }
  button:not(:first-of-type) {
    margin-left: 5px;
  }
}

.item-remaining {
  margin-top: 12px;
  text-align: right;
  color: #2c3e50;
  font-size: 18px;
}
</style>
