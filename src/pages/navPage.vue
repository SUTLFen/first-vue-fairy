
<template>
    <div>
      <!--<div >-->
        <a v-for="(item, index) in items " :class="['tabTitle', item.actived? 'activeClass': '' ]"
           href="#/navPage"  @click="clickTab(items, index)">{{ item.title }}</a>
      <!--</div>-->

      <tab-content :is='currentTab' keep-alive></tab-content>


    </div>
</template>

<script>
  import iTabContent0 from '../components/tab-content-0.vue'
  import iTabContent1 from '../components/tab-content-1.vue'
  import iTabContent2 from '../components/tab-content-2.vue'

  import tabContent from '../components/tab-content.vue'

  export default {
    data() {
      return {
        items:[
          {title: '小王子', actived: true},
          {title: '小狐狸', actived: false},
          {title: '玫瑰花', actived: false},
        ],
        currentTab: 'iTabContent0'
      }
    },

    components: {
      iTabContent0,
      iTabContent1,
      iTabContent2,
      'tab-content': tabContent
    },

    methods: {
      clickTab: function(items, index){
        console.log("index: " + index)
        this.items.forEach(function(elem){
          elem.actived = false;
        });

        this.items[index].actived = true;
        this.$emit('clickTab');

        this.currentTab = 'iTabContent' + index;
      }
    }
  }
</script>

<style>
  .tabTitle{
    padding : 5px 10px 5px 5px;
  }
  .tab-title .activeClass{
    padding : 5px 10px 5px 5px;
  }

  .activeClass{
    color: red
  }
</style>
