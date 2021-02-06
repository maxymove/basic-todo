<template>
  <div>
    <h1 style="text-align: center">{{ headline }}</h1>
    <add-todo @add:todo="addTodo" />
    <todo-item
      v-for="todo in todosFilter"
      :key="todo.id"
      class="todo-item"
      :todo="todo"
      @remove:todo="removeTodo"
    />

    <todo-list-filter
      @change:filter="changeFilter"
      @clear:todos="clearCompleted"
    />

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
  data() {
    return {
      filter: "all",
      todos: [
        {
          id: 1,
          title: "running",
          completed: true,
          editing: false,
        },
        {
          id: 2,
          title: "sleep",
          completed: false,
          editing: false,
        },
        {
          id: 3,
          title: "eat",
          completed: true,
          editing: false,
        },
      ],
    };
  },

  methods: {
    addTodo(newTodoTitle) {
      const lastId =
        this.todos.length > 0 ? this.todos[this.todos.length - 1].id : 0;
      const newId = lastId + 1;
      this.todos.push({
        id: newId,
        title: newTodoTitle,
        completed: false,
        editing: false,
        titleCached: "",
      });
    },
    removeTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    clearCompleted() {
      this.todos = this.todos.filter((todo) => !todo.completed);
    },
    changeFilter(filter) {
      this.filter = filter;
    },
  },
  computed: {
    itemsRemaining() {
      return this.todos.filter((todo) => !todo.completed).length;
    },
    todosFilter() {
      if (this.filter == "all") {
        return this.todos;
      } else if (this.filter == "active") {
        return this.todos.filter((todo) => !todo.completed);
      } else {
        return this.todos.filter((todo) => todo.completed);
      }
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
