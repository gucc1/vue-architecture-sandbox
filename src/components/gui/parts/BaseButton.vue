<template>
  <button class="button"><slot /></button>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "BaseButton",
  props: {
    onClicked: {
      type: Function,
      required: true
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="postcss" scoped></style>
