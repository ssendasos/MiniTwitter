<template>
  <div class="container">
    <div class="back">
      <a 
        href="" 
        @click.prevent="$router.go(-1)"
      >
        <i class="material-icons back-icon">keyboard_arrow_left</i>
        <span class="back__tweet">Твитнуть</span>
      </a>
    </div>
    <Loader v-if="loading" class="loader" />
    <div v-else class="wrapper">
      <PostItem 
        :tweet="tweet" 
        :user="user" 
        :answerTo="answerTo" 
        :activeUser="activeUser"
      />
      <TweetList 
        :allPosts="tweet.comments" 
        :user="user" 
        :activeUser="activeUser" 
      />
    </div>
  </div>
</template>

<script>
import PostItem from '@/components/PostPage/PostItem'
import TweetList from '@/components/TweetList'
import Loader from '@/components/Loader'
export default {
  data: () => ({
    user: {},
    activeUser: {},
    tweet: {},
    loading: true,
    answerTo: {}
  }),

  async mounted() {
    const postId = +this.$route.params.post
    const userId = this.$route.params.id
    this.user = await this.$store.dispatch('posts/fetchUser', userId)
    this.tweet = await this.$store.dispatch('posts/fetchSelectedPost', {postId, userId})
    this.activeUser = await this.$store.dispatch('posts/fetchUser')
    
    if (this.tweet.isAnswer) {
      const answerToPostId = this.tweet.answerTo.postId
      const answerToUserId = this.tweet.answerTo.userId
      this.answerTo = await this.$store.dispatch('posts/fetchAnswerTo', {answerToPostId, answerToUserId})
    }
    this.loading = false
  },


  components: {
    PostItem,
    TweetList,
    Loader
  }
  
}
</script>

<style scoped>


.loader {
  margin-top: 44px;
}

  .container {
    width: 449px;
  }

  .wrapper {
    height: 1000px;
    overflow-y: scroll;
    margin-top: 44px;
  }

  .wrapper::-webkit-scrollbar {
  width: 0;
}

 .back {
   width: 449px;
   padding-left: 20px;
   padding-right: 18px;
   padding-bottom: 15px;
   border-bottom: 1px solid rgb(47, 51, 54);
   border-right: 1px solid rgb(47, 51, 54);
   position: fixed;
   padding-top: 20px;
   top: 0px;
   background-color: black;
   z-index: 10;
 }
 

 .back__tweet {
   display: inline-block;
   font-size: 18px;
   font-weight: bold;
   position: relative;
   top: -6px;
   margin-left: 10px;
 }

 

</style>