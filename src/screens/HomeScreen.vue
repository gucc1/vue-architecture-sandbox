<template>
  <home-container>
    <home />
  </home-container>
</template>

<script>
import HomeContainer from "@/components/containers/HomeContainer.vue";
import Home from "@/components/domain/objects/Home.vue";

export default {
  name: "HomeScreen",
  components: { HomeContainer, Home }
};
</script>
