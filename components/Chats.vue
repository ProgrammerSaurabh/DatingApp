<template>
  <div class="h-full">
    <div class="header flex align-center">
      <fa
        :icon="['fa','chevron-left']"
        class="cursor-pointer"
        v-if="chatUser != null"
        @click="chatUser = null;"
      />
      <h1
        class="h1 text-theme flex-grow-1 text-center"
      >{{ chatUser ? getPersonName(chatUser.user) : 'Chats'}}</h1>
    </div>
    <div v-if="!chatUser">
      <div v-if="chats.length > 0">
        <div
          class="chat-card flex align-center"
          v-for="(chat,index) in chats"
          :key="index"
          @click="chatUser = chat;chatIndex = index"
        >
          <div class="chat-card-img">
            <img :src="getPersonImage(chat.user)" :alt="getPersonName(chat.user)" />
            <span class="chat-card-status" :class="chat.online ? 'online' : ''"></span>
          </div>
          <div class="chat-card-user flex-grow-1 ml-2">
            <div class="flex align-center justify-between">
              <h3>{{ getPersonName(chat.user) }}</h3>
              <small class="text-muted">{{ getLatestChat(chat).time }}</small>
            </div>
            <h6
              :class="getLatestChat(chat).from == 1 ? '' : 'text-muted'"
              class="chat-card-user-text"
            >{{ getLatestChat(chat).content }}</h6>
          </div>
        </div>
      </div>
      <div v-else class="text-center py-5">
        <img :src="require('~/assets/images/no-chats.svg')" height="300" />
        <h1 class="h1 text-theme">No chats yet!!!</h1>
      </div>
    </div>
    <div v-else class="m-3 chats">
      <div class="chat-container">
        <div v-for="(chat,index) in chatUser.chats" :key="index" class="chat-div flex align-center">
          <div v-if="chat.to == 1" class="chat-card-img chat-content-img">
            <img :src="getPersonImage(chatUser.user)" :alt="getPersonName(chatUser.user)" />
          </div>
          <div
            class="flex-grow-1 ml-2 flex align-center justify-between"
            :class="chat.to == 1 ? '' : 'flex-row-reverse'"
          >
            <div class="chat-content" :class="chat.to == 1 ? 'to' : 'from'">
              <h4>{{ chat.content }}</h4>
            </div>
            <small class="text-muted" :class="chat.to == 1 ? 'ml-2' : 'mr-2'">{{ chat.time }}</small>
          </div>
        </div>
      </div>
      <div class="chat-input bg-white flex align-center px-2 p-1">
        <fa :icon="['fa','paperclip']" class="text-muted cursor-pointer" />
        <input
          v-model="message"
          @keydown.enter="submit"
          type="text"
          class="text-black"
          autofocus
          placeholder="Type message here."
        />
        <fa :icon="['fa','paper-plane']" @click="submit" class="pl-1 text-theme cursor-pointer" />
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      chats: [],
      persons: [],
      chatUser: null,
      chatIndex: null,
      message: "",
    };
  },
  watch: {
    chatUser() {
      if (this.chatUser != null) {
        this.scrollToBottom();
      }
    },
  },
  async beforeMount() {
    const { data: chats } = await this.$axios.get("/chats.json");
    const { data: persons } = await this.$axios.get("/persons.json");
    this.chats = chats.chats;
    this.persons = persons.persons;
  },
  methods: {
    getPersonImage(id) {
      const { image } = this.persons.find((person) => person.id == id);
      return image;
    },
    getPersonName(id) {
      const { name } = this.persons.find((person) => person.id == id);
      return name;
    },
    getLatestChat(chat) {
      return Array.from(chat.chats).pop();
    },
    scrollToBottom() {
      setTimeout(() => {
        if (this.chatIndex != null) {
          this.$el.querySelector(".chat-container").scrollTop =
            this.$el.querySelector(".chat-container").scrollHeight;
        }
      }, 1000);
    },
    submit() {
      this.chats[this.chatIndex].chats.push({
        to: this.chatUser.user,
        from: 1,
        content: this.message,
        time: moment().format("hh:mm A"),
      });

      this.message = "";
      this.scrollToBottom();
    },
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

.chat-card {
  padding: 10px;
  background-color: white;
  border-radius: 10px;
  margin: 10px;
  cursor: pointer;
}

img {
  max-width: 100%;
}

.chat-card-user h3 {
  font-weight: 500;
}

.chat-card-user small {
  font-weight: 400;
  font-size: 12px;
}

.chat-card-user-text {
  color: #bebebe;
  font-weight: 400;
  font-size: 14px;
}

.chat-card-img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: relative;
}

.chat-content-img {
  width: 36px;
  height: 36px;
}

.chat-card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.chat-card-status {
  position: absolute;
  bottom: 0px;
  right: 5px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #e2e2e2;
  display: block;
  border: 2px solid white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.chat-card-status.online {
  background-color: #62d83e;
}

.chats {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  min-height: 88%;
}

.chat-container {
  min-height: 75vh;
  max-height: 75vh;
  overflow-y: auto;
}

.chat-container::-webkit-scrollbar {
  width: 3px;
}
.chat-container::-webkit-scrollbar-track {
  background: transparent;
}
.chat-container::-webkit-scrollbar-thumb {
  background: transparent;
}

.chat-content {
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-grow: 1;
  margin: 10px 0px;
}

.chat-content.to {
  background-color: white;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}

.chat-content.from {
  background-color: var(--theme-color);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  color: white;
}
</style>