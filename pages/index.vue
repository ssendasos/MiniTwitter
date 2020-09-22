<template>
  <div>
    <CreatePost />
    <Loader v-if="loading" />
    <TweetList 
      v-else 
      :allPosts="posts"
      :activeUser="activeUser" 
    />
    
  </div>
</template>

<script>
import CreatePost from "@/components/indexPage/CreatePost";
import TweetList from "@/components/TweetList";
import Loader from "@/components/Loader";
import {mapGetters, mapActions} from 'vuex'
export default {
  components: {
    CreatePost,
    TweetList,
    Loader,
  },

  data: () => ({
    loading: true,
    activeUser: {}
  }),

  async mounted() {
    this.activeUser = await this.$store.dispatch('posts/fetchUser')
    this.$store.dispatch("posts/countAnswers");
    this.loading = false;
  },

  computed: {
    ...mapGetters({
      getPosts: 'posts/feedPosts'
    }),

    posts() {
      return this.getPosts
    }
  }
};
</script>

<style scoped>
</style>
