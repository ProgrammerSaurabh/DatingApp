<template>
  <section class="profile-container" :class="done ? 'done' : ''">
    <div class="container-sm py-5 px-2">
      <div v-if="!done">
        <div class="steps flex align-center justify-center mb-5">
          <span
            v-for="(stepNo,index) in steps.length"
            :key="index"
            :class="step == stepNo - 1 ? 'bg-theme' : ''"
          ></span>
        </div>
        <div class="flex flex-column justify-center align-center h-full" v-show="step == 0">
          <div class="user-avatar flex align-center justify-center">
            <fa :icon="['fa','user']" />
          </div>
          <div class="text-center mt-4">
            <h1 class="text-theme display-3">Build Your Profile</h1>
            <p
              class="pt-1"
            >Hola is building real dating between real people. Alteast add one photo of yourself.</p>
          </div>
        </div>

        <div class="flex flex-column justify-center h-full" v-show="step == 1">
          <div class="text-center">
            <h1 class="text-theme display-3">Identify Yourself</h1>
            <p class="pt-1">Introduce yourself fill out the details so people know about you.</p>
          </div>

          <div class="mt-4">
            <h6 class="text-theme h6">I am a</h6>
            <div class="options flex align-center pt-1">
              <div
                v-for="(gender,genderIndex) in genders"
                :key="genderIndex"
                class="option cursor-pointer flex justify-center align-center"
                :class="profile.gender == gender ? 'bg-theme text-white' : ''"
                @click="profile.gender = gender"
              >{{gender}}</div>
            </div>
          </div>

          <div class="mt-4">
            <h6 class="text-theme h6">Who are you interested in ?</h6>
            <div class="options flex align-center pt-1">
              <div
                v-for="(interested,interestedIndex) in interesteds"
                :key="interestedIndex"
                class="option cursor-pointer flex justify-center align-center"
                :class="profile.interested == interested ? 'bg-theme text-white' : ''"
                @click="profile.interested = interested"
              >{{interested}}</div>
            </div>
          </div>

          <div class="mt-4">
            <h6 class="text-theme h6">Birthday</h6>
            <div class="flex align-center pt-1 input-group">
              <input type="number" v-model="profile.birth.month" placeholder="MM" />
              <input type="number" v-model="profile.birth.day" placeholder="DD" />
              <input type="number" v-model="profile.birth.year" placeholder="YYYY" />
            </div>
          </div>

          <div class="mt-4">
            <h6 class="text-theme h6">Name</h6>
            <div class="pt-1">
              <input type="text" v-model="profile.name" placeholder="Add your name here" />
            </div>
          </div>
        </div>

        <div class="flex flex-column justify-center h-full" v-show="step == 2">
          <div class="text-center">
            <h1 class="text-theme display-3">Add Recovery Email</h1>
            <p
              class="pt-1"
            >Your email will be used for security purpose, such as helping you get back into your account if you ever forget your password.</p>
          </div>

          <div class="mt-4">
            <h6 class="text-theme h6">Email</h6>
            <div class="pt-1">
              <input type="text" v-model="profile.email" placeholder="Add your security email here" />
            </div>
          </div>
        </div>

        <div class="flex flex-column justify-center h-full" v-show="step == 3">
          <div class="text-center">
            <h1 class="text-theme display-3">Secure Your Account</h1>
            <p class="pt-1">Add a username and password to keep your account safe.</p>
          </div>

          <div class="mt-4">
            <h6 class="text-theme h6">Username</h6>
            <div class="pt-1">
              <input type="text" v-model="profile.username" placeholder="Your username" />
            </div>
          </div>
          <div class="mt-4">
            <h6 class="text-theme h6">Password</h6>
            <div class="pt-1">
              <input type="text" v-model="profile.password" placeholder="Your password" />
            </div>
          </div>
        </div>

        <Button
          :text="steps[step]"
          class="mt-4 color-button mx-auto"
          v-if="step < steps.length - 1"
          @click="nextStep"
        ></Button>
        <Button text="Done" class="mt-4 color-button mx-auto" v-else @click="submit"></Button>
      </div>
      <div v-else>
        <Logo style="color: white" />
        <p>Dear user your account has been created successfully. Continue to start using app.</p>

        <Button @click="$router.push('/home')" text="Continue" class="mx-auto"></Button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: this.updatedTitle,
    };
  },
  computed: {
    updatedTitle() {
      if (this.done) {
        return "Account created";
      }
      return "Profile - Step " + (this.step + 1);
    },
  },
  data() {
    return {
      steps: ["Add Your Photo", "Continue", "Continue", ""],
      genders: ["Male", "Female"],
      interesteds: ["Man", "Woman", "Everyone"],
      step: 0,
      profile: {
        photo: null,
        gender: "Male",
        interested: "Woman",
        birth: {
          month: "",
          day: "",
          year: "",
        },
        name: "",
        email: "",
        username: "",
        password: "",
      },
      done: false,
    };
  },
  methods: {
    nextStep() {
      this.step++;
    },
    submit() {
      this.done = true;
    },
  },
};
</script>

<style scoped>
.profile-container {
  width: 100%;
  height: 100vh;
  background-color: #f6f6f6;
}

.profile-container.done {
  background-color: var(--theme-color);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.profile-container.done p {
  color: white;
  font-size: 18px;
  margin: 0px 0 50px;
  font-weight: 300;
  text-align: center;
}

.steps span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #d2d2d2;
}

.steps span:nth-child(n + 1) {
  margin-right: 5px;
}

.user-avatar {
  width: 64px;
  height: 64px;
  padding: 20px;
  border-radius: 50%;
  background-color: var(--theme-color);
  color: white;
  font-size: 64px;
  overflow: hidden;
}

.options .option {
  width: 50%;
  background: white;
  padding: 10px 20px;
  border-radius: 5px;
}

.options .option:nth-child(n + 1) {
  margin-right: 10px;
}

.input-group > input {
  width: 33%;
}

.input-group > input:nth-child(n + 1) {
  margin-right: 10px;
}
</style>
