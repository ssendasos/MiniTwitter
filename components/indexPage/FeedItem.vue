<template>
  <client-only>
    <div class="tweet__item">
      <a
        class="wrapper"
        href
        data-link="toPost"
        @click.prevent="toPost(tweet.postId, tweet.authorId, $event)"
      >
        <div class="tweet__link" data-link="toPost">
          <a
            v-if="tweet.isAnswer && !(repostedBy || tweet.reposted)"
            :to="`/${tweet.answerTo.userId}/${tweet.answerTo.postId}`"
            class="answer__link"
          >{{tweet.authorId === activeUser.userId ? 'Вы ответили' : tweet.userName + ' ответил(а)'}}</a>
          <a
            v-if="repostedBy || tweet.reposted"
            data-link="toPost"
            href
            class="answer__link"
          >{{repostedBy ? `${repostedBy.userName} ретвитнул(а)` : 'Вы ретвитнули'}}</a>
          <a 
            :to="`/${tweet.authorId}`" 
            class="tweet__author-link"
          >
            <cite class="tweet__name">{{tweet.userName}}</cite>
            <cite class="tweet__id">@{{tweet.authorId}}</cite>
            <span class="tweet__date" data-link="toPost">
              <span class="dot">·</span>
              {{tweet.date | dateFilter}}
            </span>
          </a>
          <button
            v-if="(this.$route.path === '/' || this.$route.path === `/${activeUser.userId}`)
               && tweet.authorId === activeUser.userId"
            class="delete"
            type="button"
            @click.prevent="deletePost(tweet.authorId, tweet.postId)"
          >
            <i class="material-icons darkGray md-18">clear</i>
          </button>
        </div>

        <div class="tweet__content">
          <p class="tweet__text" data-link="toPost">{{tweet.textContent}}</p>
        </div>

        <div class="tweet__buttons">
          <a
            class="tweet__comments"
            href
            data-link="toPost"
            @click.prevent="toPost(tweet.postId, tweet.authorId, $event)"
          >
            <i class="material-icons md-18 darkGray" data-link="toPost">mode_comment</i>
            <span class="comments__count" data-link="toPost">{{tweet.answers}}</span>
          </a>

          <button class="tweet__reposts" @click="onRepost(tweet.postId, tweet.authorId, $event)">
            <i class="material-icons md-18" :class="tweet.reposted ? 'reposted' : 'darkGray'">reply</i>
            <span
              class="reposts__count"
              :class="tweet.reposted ? 'reposted' : 'darkGray'"
            >{{tweet.reposts}}</span>
          </button>

          <button class="tweet__likes" @click="onLike(tweet.postId, tweet.authorId)">
            <i
              class="material-icons md-18"
              :class="tweet.liked ? 'liked' : 'darkGray'"
            >favorite_border</i>
            <span class="likes__count" :class="tweet.liked ? 'liked' : 'darkGray'">{{tweet.likes}}</span>
          </button>

          <button class="tweet__share">
            <i class="material-icons darkGray md-18">reply_all</i>
          </button>
        </div>
      </a>
    </div>
  </client-only>
</template>

<script>
export default {
  props: ["tweet", "activeUser", "user"],
  data: () => ({
    repostedBy: {},
  }),

  async mounted() {
    const postId = this.tweet.postId;
    const userId = this.tweet.authorId;
    const tweet = this.tweet;
    const activeUser = this.activeUser;
    const repostedBy = this.repostedBy;
    if (this.$route.path !== `/${activeUser.userId}`) {
      await this.$store.dispatch("posts/fetchRepostsState", { userId, postId });
      await this.$store.dispatch("posts/fetchLikesState", { userId, postId });
    }

    if (this.$route.path === `/${activeUser.userId}` || this.$route.path === '/') {
      if (!tweet.reposted) {
      this.repostedBy = activeUser.follows.find((u) =>
        tweet.repostedBy.find((u2) => u.userId === u2.userId)
      );
      } else {
        this.repostedBy = undefined;
      }
    } else {
      const user = this.user
      if (tweet.repostedBy.find(u => u.userId === user.userId)) {
        this.repostedBy = user
      } else {
        this.repostedBy = undefined
      }
    }
  },

  methods: {
    onLike(postId, userId) {
      try {
        this.$store.dispatch("posts/like", { postId, userId });
      } catch (error) {}
    },

    onRepost(postId, userId, event) {
      try {
        this.$store.dispatch("posts/repost", { postId, userId });
      } catch (error) {}
    },

    toPost(postId, userId, event) {
      if (event.target.dataset.link === "toPost") {
        this.$router.push(`/${userId}/${postId}`);
      }
    },

    deletePost(userId, postId) {
      try {
        this.$store.dispatch("posts/deletePost", { userId, postId });
      } catch (error) {}
    },
  },
};
</script>

<style scoped>
.md-18 {
  font-size: 18px;
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
  display: block;
  padding-left: 30px;
  padding-right: 29px;
  padding-top: 8px;
  padding-bottom: 8px;
}

.wrapper:hover {
  background-color: rgb(21, 24, 28);
  transition: 0.3s ease;
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

.tweet__item:hover .delete {
  opacity: 1;
  transition: 0.3s ease;
}

.dot {
  margin-left: 3px;
  margin-right: 5px;
  font-weight: bold;
}

.tweet__id {
  margin-left: 2px;
  color: rgb(110, 118, 125);
}

.tweet__date {
  color: rgb(110, 118, 125);
}

.delete {
  display: block;
  border: none;
  background-color: transparent;
  margin-top: -22px;
  position: relative;
  top: 4px;
  margin-left: auto;
  opacity: 0;
}

.delete:hover {
  opacity: 1;
}

.tweet__link {
  margin-bottom: 5px;
}

cite {
  font-style: normal;
  color: #d9d9d9;
}

.tweet__content {
  margin-bottom: 8px;
}

.tweet__text {
  word-break: break-word;
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
}

button span,
.comments__count {
  color: rgb(110, 118, 125);
  margin-left: 7px;
  position: relative;
  top: -4px;
  font-size: 12px;
}

.answer__link {
  display: block;
  font-size: 12px;
  color: rgb(110, 118, 125);
  margin-top: 5px;
  margin-bottom: 5px;
}

.answer__link:hover {
  text-decoration: underline;
}

.liked {
  color: rgb(224, 36, 94);
}

.reposted {
  color: rgb(23, 191, 99);
}
</style>