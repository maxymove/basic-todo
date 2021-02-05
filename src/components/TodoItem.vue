<template>
  <div>
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
        <span @click="saveEdit(todo)"><i class="fas fa-check-circle"></i></span>
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
      this.$emit("remove:todo", id);
    },
  },
};
</script>

<style></style>
