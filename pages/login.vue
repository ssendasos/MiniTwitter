<template>
  <div class="container">
    <h1>Войти как:</h1>
    <form @submit.prevent="login">
      <label for="login"></label>
      <input 
        type="text" 
        id="login" 
        v-model="userLogin"
        required
      >
      <h3>Доступные пользователи:</h3>
      <ul>
        <li 
          v-for="user in users" 
          :key="user.userId"
          @click="insert(user.userId)"
        >{{user.userId}}</li>
      </ul>
      <button type="submit">Войти</button>
    </form>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data: () => ({
    userLogin: '',
    isUserChanged: false
  }),

  layout: 'empty',
  
  methods: {
    insert(userId) {
      this.userLogin = userId
    },

    async login() {
      try {
        await this.$store.dispatch('posts/changeUser', this.userLogin)
      } catch (error) {
        
      }
      if (this.userChanged) {
        this.$router.push('/')
      }
    }
  },

  computed: {
    ...mapGetters({
      users: 'posts/users',
      userChange: 'posts/isUserChanged'
    }),
    getUsers() {
      return this.users
    },
    userChanged() {
      return this.userChange
    }
  }

}
</script>

<style scoped>
h1 {
  padding-top: 20px;
  margin-bottom: 20px;
}

.container {
  border: 1px solid rgb(47, 51, 54);
  padding-left: 20px;
  padding-right: 20px;
}

input {
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

input:focus {
  outline: none;
  border-color: rgb(255, 173, 31);
}



h3 {
  margin-top: 20px;
}

ul {
  margin-top: 10px;
}

li {
  margin-bottom: 5px;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
}

li:hover {
  text-decoration: underline;
  text-decoration-color:  rgb(255, 173, 31);
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