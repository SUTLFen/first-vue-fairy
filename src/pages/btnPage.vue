<template>

  <div>
    <i-btn msg='下载' v-on:btnClick="btnClick"></i-btn>
    <i-btn msg='确定' ></i-btn>
  </div>

</template>
<style></style>

<script>

  import iBtn from '../components/i-btn.vue'

    export default {
      data() {
        return {
        }
      },
      components: {
        'i-btn' : iBtn
      },
      methods: {
        btnClick: function(){
          console.log("click the button !!!");
          alert("点击按钮");
        }
      }
    }
</script>
