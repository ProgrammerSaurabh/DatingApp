<template>
  <section class="home-container">
    <div class="home-div">
      <Logo style="color: white" />
      <p>Date with Stranger, Make new Friends</p>

      <Button @click="$router.push('/signin')" text="Let's Get Started"></Button>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: "Welcome to Hola",
    };
  },
};
</script>

<style scoped>
.home-container {
  height: 100vh;
  background-color: var(--theme-color);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.home-div {
  max-width: 600px;
  margin: 0 auto;
}

p {
  color: white;
  font-size: 18px;
  margin: 0px 0 50px;
  font-weight: 300;
  text-align: center;
}
</style>
