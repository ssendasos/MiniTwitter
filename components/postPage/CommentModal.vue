<template>
  <div class="modal">
    <div class="modal-overlay">
      <div class="modal-window">
        <div class="modal-header">
          <button class="close-button" @click.prevent="$emit('close-modal')">
            <i class="material-icons md-orange">close</i>
          </button>
        </div>
        <div class="commenting-tweet">
          <div class="tweet__link">
            <nuxt-link 
              :to="`/${tweet.authorId}`" 
              class="tweet__author-link">
              <cite class="tweet__name">{{tweet.userName}}</cite>
              <cite class="tweet__id">@{{tweet.authorId}}</cite>
              <span class="tweet__date">· 3 ч</span>
            </nuxt-link>
          </div>
          <div class="tweet__content">
            <p class="tweet__text" data-link="toPost">{{tweet.textContent}}</p>
          </div>
        </div>
        <div class="new-comment">
          <form @submit.prevent="reply(tweet.authorId, tweet.postId)">
            <textarea 
              v-model="commentContent" 
              class="comment" 
              placeholder="Твитнуть в ответ" 
              required
            ></textarea>
            <button class="reply" type="submit">Ответить</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tweet", "user", 'activeUser'],
  data: () => ({
    commentContent: "",
  }),
  methods: {
    reply(authorId, postId) {
      const newComment = {
        postId: Date.now(),
        textContent: this.commentContent,
        userName: this.activeUser.userName,
        authorId: this.activeUser.userId,
        date: new Date().toJSON(),
        reposts: 0,
        likes: 0,
        liked: false,
        likedBy: [],
        reposted: false,
        repostedBy: [],
        isAnswer: true,
        answers: 0,
        answerTo: {
          userId: authorId,
          postId: postId,
        },
        comments: [],
      };
      try {
        this.$store.dispatch('posts/reply', newComment)
        this.$store.dispatch('posts/countAnswers')
      } catch (error) {}

      this.$emit('close-modal')
      this.commentContent = ""
    },
  },
};
</script>

<style scoped>
.modal .modal-overlay {
  background-color: rgba(110, 118, 125, 0.4);
}

.md-orange {
  color: rgb(255, 173, 31);
}

.modal-window,
.modal-overlay {
  opacity: 1;
  z-index: 10;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0);
}

.modal-window {
  width: 400px;
  border-radius: 10px;
  background-color: #000000;
  margin: 0 auto;
  margin-top: 20px;
  margin-left: 40%;
  z-index: 100;
  padding-bottom: 20px;
}

.modal-header {
  border-bottom: 1px solid rgb(47, 51, 54);
}

.close-button {
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.commenting-tweet {
  padding-bottom: 30px;
  position: relative;
}

.commenting-tweet::before {
  content: "";
  position: absolute;
  width: 2px;
  left: 10px;
  top: 15px;
  height: 100%;
  background-color: rgb(47, 51, 54);
}

.tweet__name {
  font-weight: bold;
}

.tweet__name:hover {
  text-decoration: underline;
}

.tweet__id {
  margin-left: 5px;
  color: rgb(110, 118, 125);
}

.tweet__date {
  color: rgb(110, 118, 125);
}

.tweet__link {
  margin-bottom: 5px;
  padding-left: 25px;
  padding-right: 25px;
  margin-top: 10px;
}

cite {
  font-style: normal;
  color: #d9d9d9;
}

.tweet__content {
  margin-bottom: 8px;
  padding-left: 25px;
  padding-right: 25px;
}

.tweet__text {
  word-break: break-word;
}

textarea {
  width: 87%;
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
  height: 150px;
  margin-left: 25px;
}

textarea:focus {
  outline: none;
  border-color: rgb(255, 173, 31);
}

.reply {
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
  margin-right: 26px;
  outline-offset: inherit;
}

.reply:hover {
  background-color: rgb(233, 156, 28);
}
</style>