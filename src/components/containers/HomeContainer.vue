<template>
  <div>
    <slot />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { provide, defineComponent } from "@vue/composition-api";
import counterStore, { CounterKey } from "@/modules/counter";

export default defineComponent({
  name: "HomeContainer",
  setup() {
    provide(CounterKey, counterStore());
    return {};
  }
});
</script>
