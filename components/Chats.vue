<template>
  <div>
    <div class="header">
      <h1 class="h1 text-theme">Chats</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chats: [],
      persons: [],
    };
  },
  async beforeMount() {
    const { data: chats } = await this.$axios.get("/chats.json");
    const { data: persons } = await this.$axios.get("/persons.json");
    this.chats = chats.chats;
    this.persons = persons.persons;
  },
};
</script>

<style scoped>
.header {
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}
</style>