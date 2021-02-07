<template>
  <div>
    <div v-if="todo.editing">
      <input
        type="text"
        class="todo-item-edit"
        v-model="todo.title"
        @keyup.enter="saveEdit()"
        @keyup.esc="cancelEdit()"
        v-focus
      />
    </div>

    <div v-else class="todo-item-label" @dblclick="editTodo()">
      <div v-if="!todo.completed">
        <input type="checkbox" v-model="todo.completed" />
        {{ todo.title }}
      </div>
      <div v-else>
        <del>{{ todo.title }}</del>
      </div>
    </div>

    <div v-if="todo.editing">
      <div class="action-icon">
        <span @click="saveEdit()"><i class="fas fa-check-circle"></i></span>
        <span @click="cancelEdit()"><i class="fas fa-window-close"></i></span>
      </div>
    </div>
    <div v-else class="action-icon">
      <span @click="editTodo()">
        <i class="fas fa-edit"></i>
      </span>
      <span @click="removeTodo(todo.id)">
        <i class="fas fa-trash"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "todo-item",
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },

  methods: {
    removeTodo(id) {
      this.$store.commit("removeTodo", id);
    },
    editTodo() {
      this.todo.titleCached = this.todo.title;
      this.todo.editing = true;
    },
    saveEdit() {
      this.todo.editing = false;
      this.$store.commit("saveEdit", this.todo.id, this.todo);
    },
    cancelEdit() {
      this.todo.title = this.todo.titleCached;
      this.todo.editing = false;
    },
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
};
</script>

<style></style>
