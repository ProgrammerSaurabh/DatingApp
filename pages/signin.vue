<template>
  <section class="signin-container">
    <div class="signin-div flex align-center justify-between flex-column h-full">
      <Logo class="text-theme mb-3 mt-5 h-full flex align-center w-full justify-center" />
      <div class="mb-5">
        <p class="mb-3">Sign in to continue</p>

        <div>
          <Button text="Continue with Facebook" class="color-button"></Button>
          <Button text="Use Phone Number" @click="$router.push('/phone')" class="mt-2"></Button>
        </div>

        <div class="mt-3">
          <div class="login-with-text flex align-center justify-center flex-row my-1">
            <div></div>
            <p class="text text-theme">or login with</p>
            <div></div>
          </div>
          <div class="signin-icons flex align-center justify-center">
            <a>
              <fa :icon="['fab','instagram']" />
            </a>
            <a>
              <fa :icon="['fab','twitter']" />
            </a>
            <a>
              <fa :icon="['fab','google-plus']" />
            </a>
          </div>
          <div class="flex align-center justify-between flex-row mt-5 footer-para">
            <p class="cursor-pointer">Terms of Service</p>
            <p class="cursor-pointer">Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: "Signin",
    };
  },
};
</script>

<style scoped>
.signin-container {
  width: 100%;
  height: 100vh;
  background-color: #f6f6f6;
}

.signin-div {
  max-width: 600px;
  margin: 0 auto;
}

p {
  color: black;
  font-size: 18px;
  font-weight: 300;
  text-align: center;
}

.signin-flex-1 > *:nth-child(n + 1) {
  margin: 10px 0px;
}

.text {
  color: var(--theme-color);
  font-size: 12px;
  font-weight: 400;
  margin: 0 0 10px;
  flex-grow: 1;
  padding: 0px;
  width: 100%;
}

.signin-icons > *:nth-child(n + 1) {
  margin: 0px 10px;
}

.signin-icons a {
  background-color: white;
  color: var(--theme-color);
  font-size: 16px;
  font-weight: 400;
  padding: 10px 15px;
  border-radius: 50%;
}

.login-with-text div {
  width: 100%;
  height: 2px;
  background-color: #d0d0d0;
}

.footer-para p {
  font-size: 12px;
}
</style>
