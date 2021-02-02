<template>
  <div>
    <input
      type="text"
      class="todo-input"
      placeholder="Don't be lazy!"
      v-model="newTodo"
      @keyup.enter="addTodo"
    />
    <div v-for="todo in todos" :key="todo.id" class="todo-item">
      <div v-if="todo.editing">
        <input
          type="text"
          class="todo-item-edit"
          v-model="todo.title"
          @keyup.enter="saveEdit(todo)"
          @keyup.esc="cancelEdit(todo)"
          v-focus
        />
      </div>
      <div v-else class="todo-item-label" @dblclick="editTodo(todo)">
        {{ todo.title }}
      </div>

      <div v-if="todo.editing">
        <div class="action-icon">
          <span @click="saveEdit(todo)"
            ><i class="fas fa-check-circle"></i
          ></span>
          <span @click="cancelEdit(todo)"
            ><i class="fas fa-window-close"></i
          ></span>
        </div>
      </div>
      <div v-else class="action-icon">
        <span @click="editTodo(todo)">
          <i class="fas fa-edit"></i>
        </span>
        <span @click="removeTodo(todo.id)">
          <i class="fas fa-trash"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "todo-list",
  data() {
    return {
      newTodo: "",
      todos: [
        {
          id: 1,
          title: "running",
          completed: false,
          editing: false,
        },
        {
          id: 2,
          title: "sleep",
          completed: false,
          editing: false,
        },
      ],
    };
  },
  directives: {
    // will force focus when enter editing mode
    focus: {
      // directive definition
      inserted: function(el) {
        el.focus();
      },
    },
  },
  methods: {
    addTodo() {
      const lastId =
        this.todos.length > 0 ? this.todos[this.todos.length - 1].id : 0;
      const id = lastId + 1;
      this.todos.push({
        id: id,
        title: this.newTodo,
        completed: false,
        editing: false,
        titleCached: "",
      });
      this.newTodo = "";
    },
    removeTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    editTodo(todo) {
      todo.titleCached = todo.title;
      todo.editing = true;
    },
    saveEdit(todo) {
      todo.editing = false;
    },
    cancelEdit(todo) {
      todo.title = todo.titleCached;
      todo.editing = false;
      this.todoCached = "";
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

// important css syntax to apply to only the span inside that particular div
div.action-icon > span {
  cursor: pointer;
  margin-left: 5px;
  &:hover {
    color: blue;
  }
}
</style>
