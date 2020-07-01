<template>
  <div class="decrement">
    <base-button :on-clicked="onClicked">
      -
    </base-button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BaseButton from "@/components/gui/parts/BaseButton.vue";

export default Vue.extend({
  name: "Decrement",
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
