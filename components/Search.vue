<template>
  <div>
    <h3 class="h3 text-theme text-center bg-white w-full py-2">Peoples you may interested in</h3>
    <div v-if="persons.length > 0">
      <div class="card px-1" v-for="(person,index) in persons" :key="index">
        <div class="card-img">
          <img :src="person.image" :alt="person.name" />
          <div
            class="similarity flex align-center justify-center"
          >{{ person.similarity }}% similarities</div>
        </div>
        <h1 class="h1 pt-2 text-center">{{ person.name }}</h1>
        <p class="card-info pb-2">{{ person.info }}</p>
        <div class="flex align-center justify-center">
          <fa
            :icon="['fa','times']"
            class="icon-close-btn icon-btn flex align-center justify-center text-theme"
          />
          <fa
            :icon="['fa','heart']"
            class="icon-like-btn icon-btn flex align-center justify-center bg-theme text-white"
          />
        </div>
      </div>
    </div>
    <div v-else class="text-center py-5">
      <img :src="require('~/assets/images/no-peoples.svg')" height="300" />
      <h1 class="h1 text-theme">No peoples yet!!!</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      persons: [],
    };
  },
  async beforeMount() {
    const { data } = await this.$axios.get("/persons.json");
    this.persons = data.persons.filter((person) => person.id != 1);
  },
};
</script>

<style scoped>
.card {
  padding: 10px;
  padding-bottom: 30px;
  background-color: white;
  border-radius: 5px;
  margin: 0 10px;
}

.card-img {
  width: 100%;
  position: relative;
}

.similarity {
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  padding: 5px 10px;
  border-radius: 20px;
  color: white;
  background-color: var(--theme-color);
  font-size: 14px;
}

.card-img img {
  min-height: 300px;
  background-color: #eeee;
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 5px;
}

.card-img img:after {
  content: "";
  background-color: #eeee;
  padding: 30px;
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.card:nth-child(n + 1) {
  margin-top: 10px;
}

.card:last-child {
  margin-bottom: 30px;
}

.card-info {
  font-size: 16px;
  color: #d8d8d8;
  text-align: center;
}

.icon-btn {
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
}

.icon-close-btn {
  padding: 15px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.icon-like-btn {
  padding: 15px;
  box-shadow: rgba(255, 65, 100, 0.8) 0px 2px 8px 0px;
}

.icon-btn:nth-child(n + 1) {
  margin-right: 10px;
}
</style>