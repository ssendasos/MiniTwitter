<template>
  <div class="container">
    <div class="lds-dual-ring"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

  .container {
    width: 100%;
    border-top: 1px solid rgb(47, 51, 54);
  }
  .lds-dual-ring {
  display: block;
  width: 80px;
  height: 80px;
  margin: 0 auto;
  margin-top: 25px;
  margin-bottom: 20px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>