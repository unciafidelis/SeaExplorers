<template>
  <div id="app"> 
        <NavBar/>
        <LandingPage/>
  </div>
</template>
<script>
import NavBar from "./components/NavBar.vue";
import LandingPage from "./components/LandingPage.vue";
export default {
    name: "app",
    components: { NavBar, LandingPage }
};
</script>