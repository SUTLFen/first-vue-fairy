<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <button v-on:click="btnClick">{{ msg }}</button>
</template>

<style></style>

<script>
    export default {
      props:{
        msg:{
          type: String,
          default: 'download'
        }
      },
      data() {
            return {msg: 'vue模板页'}
      },
      methods: {

        btnClick: function(){
          console.log("hello click");
          this.$emit("btnClick");
        }
      }
    }
</script>
