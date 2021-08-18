<template>
  <section class="otp-container">
    <div class="container-sm py-5 px-2">
      <h1 class="text-theme display-2">Enter Your Code</h1>
      <p class="text-justify mt-1">
        Enter 4-digit code, we have sent to you at
        <span
          class="text-decoration-line h5 pt-1 d-block text-theme cursor-pointer no-break-word"
        >+91 9987666780</span>
      </p>

      <div class="mt-5 flex align-center">
        <input
          type="text"
          class="otp-input"
          autofocus
          v-for="digit in digits"
          :key="digit"
          maxlength="1"
          :ref="`digit-${digit}`"
          @keyup="next(digit)"
          v-model="otp[digit]"
        />
      </div>
      <div v-show="error" class="error-div">{{ error }}</div>

      <div>
        <Button text="Continue" class="mt-4 color-button mx-auto" @click="submit"></Button>
        <div class="flex align-center justify-between flex-row mt-5 footer-para">
          <p class="cursor-pointer">Terms of Service</p>
          <p class="cursor-pointer">Privacy Policy</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: "Otp",
    };
  },
  data() {
    return {
      digits: 4,
      currentField: 1,
      otp: [],
      error: null,
    };
  },
  methods: {
    next(digit) {
      if (digit != this.digits) {
        if (
          this.$refs["digit-" + (digit + 1)] &&
          this.$refs["digit-" + (digit + 1)].length > 0
        ) {
          this.$refs["digit-" + (digit + 1)][0].focus();
          return;
        }
      }
    },
    submit() {
      if (this.otp.join("").length != this.digits) {
        return (this.error = "Please enter " + this.digits + " digit OTP");
      }
      this.$router.push("/profile");
    },
  },
};
</script>

<style scoped>
.otp-container {
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

.otp-input {
  padding: 5px;
  background-color: transparent;
  border: 1px solid #d2d2d2;
  font-size: 26px;
  color: var(--theme-color);
  text-align: center;
}

.otp-input:not(:last-child) {
  margin-right: 5px;
}

.otp-input:focus {
  border: 2px solid var(--theme-color);
}

.footer-para p {
  font-size: 12px;
}
</style>
