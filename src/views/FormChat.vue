<template>
  <div class="container">
    <input v-model="message" placeholder="Enter a message" @keydown.enter="sendMessage" />
    <button @click="sendMessage">Send</button>
    <p v-for="msg in messages" :key="msg">{{ msg }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      messages: [],
      websocket: null,
    };
  },
  mounted() {
    this.websocket = new WebSocket('ws://localhost:8765/');
    this.websocket.onmessage = this.handleMessage;
  },
  methods: {
    handleMessage(event) {
      const message = event.data;
      console.log('Received message from server:', message);
      this.messages.push(message);
    },
    sendMessage() {
      if (this.message) {
        // console.log('Sending message:', this.message);
        this.websocket.send(this.message);
        this.message = '';
      }
    },
  },
};
</script>