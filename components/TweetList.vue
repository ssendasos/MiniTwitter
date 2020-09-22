<template>
    <ul class="tweets__list">
      <li>
        <FeedItem 
          v-for="tweet in allPosts" 
          :key="tweet.id" 
          :tweet="tweet"
          :activeUser="activeUser"
          :user="user" 
        />
      </li>
    </ul>
</template>

<script>
import FeedItem from '@/components/indexPage/FeedItem'
export default {
  props: ['allPosts', 'user', 'activeUser'],

  components: {
    FeedItem
  },
}
</script>

<style scoped>
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 449px;
  }

  
</style>