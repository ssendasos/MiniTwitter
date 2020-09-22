<template>
  <div class="container">
    <div class="back">
      <a 
        href="" 
        @click.prevent="$router.go(-1)"
      >
        <i class="material-icons back-icon">keyboard_arrow_left</i>
        <span class="back__tweet">Люди</span>
      </a>
    </div>
    <Loader v-if="loading"/>
    <div v-else>
      <div class="peoples__count">
        Доступно людей: <span class="count">{{users.length}}</span>
      </div>
      <UsersList :users="users" />
    </div>
  </div>
</template>

<script>
import UsersList from '@/components/usersPage/UsersList'
import Loader from '@/components/Loader'
import {mapGetters} from 'vuex'
export default {
  data: () => ({
    loading: true
  }),
  
  mounted() {
    this.loading = false;
  },

  computed: {
    ...mapGetters({
      getUsers: 'posts/users'
    }),

    users() {
      return this.getUsers
    }
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