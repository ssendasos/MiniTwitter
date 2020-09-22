<template>
  <div class="main-wrapper">
    <div class="wrapper">
      <Sidebar />
      <main>
        <div class="container">
          <nuxt />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
export default {
  components: {
    Sidebar
  }
}
</script>

<style scoped>
  .wrapper {
    width: 651px;
    position: relative;
    margin: 0 auto;
  }

  main {
    border: 1px solid rgb(47, 51, 54);
    border-top: none;
    padding-top: 20px;
    margin-left: 200px;
  }
</style>
