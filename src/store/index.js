import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
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
  },
  getters: {
    todosFilter(state) {
      if (state.filter == "all") {
        return state.todos;
      } else if (state.filter == "active") {
        return state.todos.filter((todo) => !todo.completed);
      } else {
        return state.todos.filter((todo) => todo.completed);
      }
    },
    itemsRemaining(state) {
      return state.todos.filter((todo) => !todo.completed).length;
    },
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    removeTodo(state, id) {
      state.todos = state.todos.filter((todo) => todo.id != id);
    },
    saveEdit(state, id, updatedTodo) {
      // is this bad practice???
      state.todos.map((todo) => (todo.id == id ? updatedTodo : todo));
    },
    changeFilter(state, filter) {
      state.filter = filter;
    },
    clearCompleted(state) {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },
  },
});

Vue.$store = store;
export default store;
