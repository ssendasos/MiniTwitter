<template>
  <div class="container">
    <FeedItem 
      :tweet="answerTo" 
      :activeUser="activeUser" 
      :user="user" 
      v-if="tweet.isAnswer" 
    />
    <div class="tweet__item">
      <CommentModal
        :tweet="tweet"
        :user="user"
        :activeUser="activeUser"
        v-if="isCommenting"
        @close-modal="isCommenting = false"
      />
      <div class="wrapper">
        <div class="tweet__link">
          <nuxt-link 
            :to="`/${user.userId}`"
            class="tweet__author-link"
          >
            <cite class="tweet__name">{{user.userName}}</cite>
            <cite class="tweet__id">@{{user.userId}}</cite>
          </nuxt-link >
        </div>

        <div class="tweet__content">
          <p class="tweet__text">{{tweet.textContent}}</p>
          <span class="tweet__date">{{tweet.date | dateFilter('longdate')}}</span>
        </div>

        <div class="tweet__buttons">
          <a 
            class="tweet__comments" 
            @click.prevent="isCommenting = true"
          >
            <i class="material-icons fontSize darkGray">mode_comment</i>
            <span class="comments__count">{{tweet.answers}}</span>
          </a>

          <button 
            class="tweet__reposts" 
            @click="onRepost(tweet.postId, tweet.authorId)"
          >
            <i
              class="material-icons fontSize"
              :class="tweet.reposted ? 'reposted' : 'darkGray'"
            >reply</i>
            <span
              class="reposts__count"
              :class="tweet.reposted ? 'reposted' : 'darkGray'"
            >{{tweet.reposts}}</span>
          </button>

          <button 
            class="tweet__likes" 
            @click="onLike(tweet.postId, tweet.authorId)"
          >
            <i
              class="material-icons fontSize"
              :class="tweet.liked ? 'liked' : 'darkGray'"
            >favorite_border</i>
            <span 
              class="likes__count" 
              :class="tweet.liked ? 'liked' : 'darkGray'"
            >{{tweet.likes}}</span>
          </button>

          <button class="tweet__share">
            <i class="material-icons darkGray fontSize">reply_all</i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommentModal from "@/components/postPage/CommentModal";
import FeedItem from "@/components/indexPage/FeedItem";
export default {
  props: ["tweet", "user", "answerTo", 'activeUser'],
  data: () => ({
    isCommenting: false,
  }),


  methods: {
    onLike(postId, userId) {
      try {
        this.$store.dispatch("posts/like", { postId, userId });
      } catch (error) {}
    },

    onRepost(postId, userId) {
      try {
        this.$store.dispatch("posts/repost", { postId, userId });
      } catch (error) {}
    },

    toUser(id) {
      this.$router.push("/" + id);
    },

    toPost(postId, userId) {
      this.$router.push(`/${userId}/${postId}`);
    },
  },

  components: {
    CommentModal,
    FeedItem,
  },
};
</script>

<style scoped>
.container {
  width: 450px;
}

.fontSize {
  font-size: 23px;
}

.tweet__text {
  word-break: break-word;
}

.tweet__item {
  width: 100%;
  border-top: 1px solid rgb(47, 51, 54);
  border-left: none;
  border-right: none;
}

.tweet__item:last-child {
  border-bottom: 1px solid rgb(47, 51, 54);
}

.wrapper {
  padding-top: 8px;
  padding-bottom: 15px;
}

.tweet__text {
  font-size: 21px;
  margin-bottom: 8px;
}

div {
  font-size: 14px;
}

.tweet__name {
  font-weight: bold;
}

.tweet__name:hover {
  text-decoration: underline;
}

.tweet__id {
  color: rgb(110, 118, 125);
  margin-top: 3px;
}

.tweet__date {
  color: rgb(110, 118, 125);
}

.tweet__link {
  margin-bottom: 10px;
  padding-left: 30px;
  padding-right: 30px;
}

cite {
  font-style: normal;
  color: #d9d9d9;
  display: block;
}

.tweet__content {
  margin-bottom: 8px;
  padding-left: 10px;
  padding-right: 10px;
}

.material-icons.darkGray {
  color: rgb(110, 118, 125);
}

button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.tweet__buttons {
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-top: 1px solid rgb(47, 51, 54);
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 15px;
}

button span,
.comments__count {
  color: rgb(110, 118, 125);
  margin-left: 7px;
  position: relative;
  top: -7px;
  font-size: 12px;
}

.liked {
  color: rgb(224, 36, 94);
}

.reposted {
  color: rgb(23, 191, 99);
}
</style>