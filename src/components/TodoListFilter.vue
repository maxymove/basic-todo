<template>
  <div class="item-button">
    <div>
      <button @click="changeFilter('all')">All</button>
      <button @click="changeFilter('active')">Active</button>
      <button @click="changeFilter('completed')">Completed</button>
    </div>
    <div>
      <button @click="clearCompleted">Clear Completed</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeFilter(filter) {
      this.$emit("change:filter", filter);
    },
    clearCompleted() {
      this.$emit("clear:todos");
    },
  },
};
</script>

<style></style>
