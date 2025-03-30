<template>
  <nav>
    <!-- <router-link :key="items.name" v-for="items in menu" :to="items.to">{{ items.name }}</router-link><br>
    <router-link :key="items.name" v-for="items in menu" :to="items.to">{{ items.name }}</router-link><br> -->
  </nav>
  <aside>

  </aside>
 <router-view></router-view>
</template>

<script>
  export default{
    data() {
      return {
        menu:[
          {name:"Home",to:"/"},
          {name:"About",to:"/about"},
          {name:"Dashboard",to:"/dashboard"},
        ]
      }
    },
  }
</script>

<style src="./Css/style.css"></style>
