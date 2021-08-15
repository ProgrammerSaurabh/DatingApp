<template>
  <div>
    <div class="header">
      <h1 class="h1 text-theme">Likes</h1>
    </div>
    <div v-if="likes.length > 0" class="cards">
      <div class="card cursor-pointer mr-1 mb-2" v-for="(like,index) in likes" :key="index">
        <div class="card-img">
          <img :src="like.image" :alt="like.name" />
          <fa :icon="['fa','heart']" class="like-icon" />
        </div>
        <h5 class="h5 pl-2 pt-1">{{ like.name }}</h5>
        <p class="card-info pl-2 pb-2">{{ like.distance }} km away</p>
      </div>
    </div>
    <div v-else class="text-center py-5">
      <img :src="require('~/assets/images/no-likes.svg')" height="300" />
      <h1 class="h1 text-theme">No matches yet!!!</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      likes: [],
    };
  },
  async beforeMount() {
    const { data } = await this.$axios.get("/likes.json");
    this.likes = data.likes;
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

.cards {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 20px 0px;
}

.card {
  flex-basis: calc(50% - 20px);
  width: 200px;
  background-color: white;
  border-radius: 10px;
}

.card:nth-child(n + 1) {
  margin-right: 10px;
}

.card-img {
  width: 100%;
  height: 200px;
  position: relative;
}

.like-icon {
  position: absolute;
  bottom: -10px;
  right: 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: 15px;
  height: 15px;
  padding: 10px;
  border-radius: 50%;
  font-size: 16px;
  color: var(--theme-color);
  background-color: white;
}

.card-img img {
  min-height: 200px;
  background-color: #eeee;
  width: 100%;
  height: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  object-fit: cover;
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

.card-info {
  font-size: 14px;
  color: #d8d8d8;
}
</style>