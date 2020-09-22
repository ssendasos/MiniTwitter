<template>
  <div class="container">
    <div class="back">
      <a 
        href="" 
        @click.prevent="$router.go(-1)"
      >
        <i class="material-icons back-icon">keyboard_arrow_left</i>
        <span class="back__tweet">{{user.userName}}</span>
      </a>
    </div>
    <Loader v-if="loading"/>
    <div v-else>
      <div class="peoples__count">
        Читателей: <span class="count">{{user.followers.length}}</span>
      </div>
      <UsersList :users="user.followers" />
    </div>
  </div>
</template>

<script>
import UsersList from '@/components/usersPage/UsersList'
import Loader from '@/components/Loader'
export default {
  data: () => ({
    user: {},
    loading: true
  }),
  
  async mounted() {
    const userId = this.$route.params.id
    this.user = await this.$store.dispatch('posts/fetchUser', userId)
    this.loading = false;
  },

  components: {
    UsersList,
    Loader
  }
}
</script>

<style scoped>

  .container {
    width: 450px;
  }


  .back {
   padding-left: 20px;
   padding-right: 20px;
   padding-bottom: 15px;
   border-bottom: 1px solid rgb(47, 51, 54)
 }
 

 .back__tweet {
   display: inline-block;
   font-size: 18px;
   font-weight: bold;
   position: relative;
   top: -6px;
   margin-left: 10px;
 }

 .peoples__count {
   border-bottom: 1px solid rgb(47, 51, 54);
   padding-left: 20px;
   padding-right: 20px;
   padding-top: 20px;
   padding-bottom: 20px;
   color: #ffffff;
   font-weight: bold;
 }
</style>