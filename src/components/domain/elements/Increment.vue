<template>
  <div class="increment">
    <base-button :on-clicked="onClicked">
      +
    </base-button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BaseButton from "@/components/gui/parts/BaseButton.vue";

export default Vue.extend({
  name: "Increment",
  props: {
    onClicked: {
      type: Function,
      required: true
    }
  },
  components: {
    BaseButton
  }
});
</script>

<style lang="postcss" scoped></style>
