<template>
  <ul class="user__list">
    <li 
      v-for="user of users" 
      :key="user.userId"
    >
      <nuxt-link 
        :to="`/${user.userId}`" 
        class="tweet__author-link"
      >
        <div class="wrapper">
          <cite class="tweet__name">{{user.userName}}</cite>
          <cite class="tweet__id">@{{user.userId}}</cite>
        </div>
        <div class="posts-count">
          Твитов: {{user.posts.length}}
        </div>
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['users']
};
</script>

<style scoped>

cite {
   font-style: normal;
   color: #d9d9d9;
   display: block;
 }

  .tweet__name {
   font-weight: bold;
 }

 .tweet__name:hover {
   text-decoration: underline;
 }

 .tweet__id {
   color: rgb(110, 118, 125);
   margin-top: 3px;
 }

 li {
   border-bottom: 1px solid rgb(47, 51, 54);;
 }

 li:hover {
   background-color: rgb(21, 24, 28);
   transition: 0.3s ease;
 }
 

 a {
   display: flex;
   justify-content: space-between;
   padding-left: 20px;
   padding-right: 20px;
   padding-bottom: 20px;
   padding-top: 25px;
   cursor: pointer;
 }



 .posts-count {
   margin-top: 10px;
 }


</style>