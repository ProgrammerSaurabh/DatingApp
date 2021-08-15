<template>
  <button @click="$emit('click')" class="button">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.button {
  text-decoration: none;
  background-color: white;
  color: var(--theme-color);
  padding: 0.8rem 3rem;
  border-radius: 10px;
  transition: transform 1s;
  cursor: pointer;
  font-size: 16px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  outline: none;

  width: 100%;
}

.button:focus {
  outline: none;
}

.color-button {
  background-color: var(--theme-color);
  color: white;
}
</style>