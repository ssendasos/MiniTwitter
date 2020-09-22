<template>
  <div class="create-post">
    <h2>Создать новый твит</h2>
    <form @submit.prevent="onSubmit">
      <textarea 
        name="tweetContent" 
        v-model="textContent" 
        required
      ></textarea>
      <button type="submit">Твитнуть</button>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    textContent: "",
    activeUser: {},
  }),

  async mounted() {
    this.activeUser = await this.$store.dispatch("posts/fetchUser");
  },

  methods: {
    async onSubmit(evt) {
      const newTweet = {
        postId: Date.now(),
        textContent: this.textContent,
        authorId: this.activeUser.userId,
        userName: this.activeUser.userName,
        date: new Date(),
        reposts: 0,
        likes: 0,
        liked: false,
        likedBy: [],
        reposted: false,
        repostedBy: [],
        isAnswer: false,
        answers: 0,
        answerTo: {},
        comments: [],
      };
      try {
        await this.$store.dispatch("posts/createTweet", newTweet);
      } catch (error) {}
      this.textContent = "";
    },
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
}

textarea {
  width: 100%;
  background-color: transparent;
  color: #fff;
  font-family: inherit;
  font-size: 24px;
  border-radius: 5px;
  padding-left: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  resize: none;
  padding-right: 10px;
  border: 1px solid rgb(47, 51, 54);
  height: auto;
}

textarea:focus {
  outline: none;
  border-color: rgb(255, 173, 31);
}

div {
  padding-left: 20px;
  padding-right: 20px;
}

button {
  background-color: rgb(255, 173, 31);
  border: none;
  border-radius: 25px;
  color: #fff;
  font-family: inherit;
  font-weight: bold;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 9px;
  padding-bottom: 9px;
  font-size: 14px;
  cursor: pointer;
  margin-left: auto;
  display: block;
  margin-top: 10px;
  margin-bottom: 20px;
  outline-offset: inherit;
}

button:hover {
  background-color: rgb(233, 156, 28);
}
</style>