<template>
  <section class="phone-container">
    <div class="container-sm py-5 px-2">
      <h1 class="text-theme display-2">What's your number?</h1>
      <p
        class="text-justify mt-1"
      >Please enter your valid phone number. We will send you 4-digit code to verify your account.</p>

      <div class="mt-5 flex align-center">
        <select class="custom-select" v-model="code">
          <option v-for="(code,index) in codes" :key="index">{{ code }}</option>
        </select>
        <input
          type="number"
          autofocus
          v-model="phone"
          class="custom-input w-full"
          placeholder="XXXXXXXXXX"
          @keydown.enter="validate"
        />
      </div>
      <div v-show="error" class="error-div">{{ error }}</div>

      <Button text="Continue" class="mt-4 color-button mx-auto" @click="validate"></Button>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: "Phone number",
    };
  },
  data() {
    return {
      codes: ["+91", "+63", "+94", "+60", "+95", "+855"],
      code: "+91",
      phone: "",
      error: null,
    };
  },
  methods: {
    validate() {
      this.error = "";
      if (this.phone.length != 10) {
        return (this.error = "Please enter valid phone number.");
      }

      this.$router.push("/otp");
    },
  },
};
</script>

<style scoped>
.phone-container {
  width: 100%;
  height: 100vh;
  background-color: #f6f6f6;
}

p {
  color: #050505;
  font-size: 16px;
  font-weight: 300;
  max-width: 45ch;
}

.custom-select {
  border: none;
  padding: 5px;
  background-color: transparent;
  border-bottom: 1px solid #d2d2d2;
  font-size: 18px;
  color: var(--theme-color);
}

.custom-input {
  padding: 5px;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #d2d2d2;
  font-size: 20px;
  color: var(--theme-color);
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}

.custom-select:focus {
  outline: none;
}

.custom-input:focus {
  outline: none;
  border-bottom: 1px solid var(--theme-color);
}
</style>
