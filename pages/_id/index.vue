<template>
  <div class="component-wrapper">
    <Loader v-if="loading" />
    <div v-else class="container">
      <div class="back">
        <a 
          href="" 
          @click.prevent="$router.go(-1)"
        >
          <i class="material-icons">keyboard_arrow_left</i>
          <div class="wrapper">
            <cite class="back__name">{{user.userId}}</cite>
            <span class="posts-count">{{countPosts}} твита</span>
          </div>
        </a>
      </div>
      <div class="user__info">
        <div class="info">
          <cite class="info__name">{{user.userName}}</cite>
          <cite class="info__id">@{{user.userId}}</cite>
          <div class="follows-info">
            <nuxt-link 
              class="follows" 
              :to='`/${user.userId}/follows`'
            >
              <span class="count">{{user.follows.length}}</span>
              в читаемых 
            </nuxt-link>
            <nuxt-link 
              class="followers" 
              :to='`/${user.userId}/followers`'
            >
              <span class="count">{{user.followers.length}}</span>
              читателей
            </nuxt-link>
          </div>
        </div>
        <div class="button-wrapper">
          <button 
            v-if="activeUser.userId !== user.userId && !user.followed"
            class="follow" 
            @click.prevent="follow(user.userId)"
          >
            Подписаться
          </button>
          <button 
            v-if="activeUser.userId !== user.userId && user.followed"
            class="follow" 
            @click.prevent="follow(user.userId)"
          >
            Отписаться
          </button>
        </div>
      </div>
  
      <div class="feed">
        <TweetList 
          :allPosts="feedPosts"
          :activeUser="activeUser"
          :user="user"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TweetList from '@/components/TweetList'
import Loader from '@/components/Loader'
import {mapGetters} from 'vuex'
export default {
  data: () => ({
    user: {},
    activeUser: {},
    loading: true
  }),

  components: {
    TweetList, Loader
  },

  async mounted() {
    const id = this.$route.params.id
    this.user = await this.$store.dispatch('posts/fetchUser', id)
    this.activeUser = await this.$store.dispatch('posts/fetchUser')
    this.$store.dispatch('posts/countAnswers')
    this.loading = false
  },

  methods: {
    follow(userId) {
      try {
        this.$store.dispatch('posts/follow', userId)
      } catch (error) {
        
      }
    }
  },

  computed: {
    ...mapGetters({
      posts: 'posts/userPosts',
      countPosts: 'posts/countPosts'
    }),

    feedPosts() {
      return this.posts(this.user.userId)
    },

    countPosts() {
      return this.posts(this.user.userId).length
    }
  }

}
</script>

<style scoped>

  .component-wrapper {
    width: 449px;
  }

  

  .back {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    margin-right: 0;
    border-bottom: 1px solid rgb(47, 51, 54);
  }


  a {
    display: flex;
  }

  .posts-count {
    display: block;
    margin-top: 3px;
    font-size: 12px;
    color: rgb(110, 118, 125)
  }

  cite {
    font-size: 18px;
    font-style: normal;
    font-weight: bold;
  }

  .wrapper {
    margin-top: -7px;
    margin-left: 10px;
    padding-bottom: 15px;
  }

  .user__info {
    display: flex;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 50px;
    margin-bottom: 51px;
  }

  .info__id {
    display: block;
    font-size: 14px;
    color: rgb(110, 118, 125);
    font-weight: normal;
    
  }

  .follows-info {
    display: flex;
    margin-top: 20px;
  }

  .follows, .followers {
    font-size: 14px;
    color: rgb(110, 118, 125)
  }

  .follows:hover, .followers:hover {
    text-decoration: underline;
    text-decoration-color: #ffffff;
  }

  .count {
    color: #ffffff;
    font-weight: bold;
    margin-right: 5px;
  }

  .followers {
    margin-left: 10px;
  }

  .button-wrapper {
    height: 47px;
    margin-top: 15px;
  }

  .follow {
  background-color: rgb(255, 173, 31);
  border: none;
  border-radius: 25px;
  color: #fff;
  font-family: inherit;
  font-weight: bold;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 14px;
  cursor: pointer;
  display: block;
  outline-offset: inherit;
}

.follow:hover {
  background-color: rgb(233, 156, 28);
}
</style>