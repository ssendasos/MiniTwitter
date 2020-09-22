<template>
  <nav>
    <ul class="nav flex-column">
      <li class="nav-item">
        <nuxt-link 
          class="nav-link" 
          :to="`/${user.userId}`"
          active-class="active"
        >
          Профиль
        </nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link 
          class="nav-link" 
          to="/" 
          active-class="active" 
          exact
        >
          Лента
        </nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link 
          class="nav-link" 
          to="/users" 
          active-class="active" 
          exact
        >
          Люди
        </nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link 
          class="nav-link" 
          to="/login" 
          active-class="active" 
          exact
        >
          Логин
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data: () => ({
    user: {}
  }),

  async mounted() {
    this.user = await this.$store.dispatch('posts/fetchUser')
  },
}
</script>

<style scoped>
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  nav {
    padding-left: 20px;
    margin-top: 50px;
    position: fixed;
  }

  a {
    display: block;
    text-decoration: none;
    font-size: 24px;
    padding-bottom: 10px;
    padding-top: 10px;
    padding-left: 10px;
    font-weight: bold;
  }

  li {
    margin-bottom: 10px;
  }
</style>