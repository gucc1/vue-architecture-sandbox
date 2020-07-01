<template>
  <div class="home">
    <span>
      {{ count }}
    </span>
    <increment :on-clicked="increment" />
    <decrement :on-clicked="decrement" />
  </div>
</template>

<script lang="ts">
import { computed, inject, defineComponent } from "@vue/composition-api";
import { CounterKey } from "@/modules/counter";
import Decrement from "@/components/domain/elements/Decrement.vue";
import Increment from "@/components/domain/elements/Increment.vue";

export default defineComponent({
  name: "Home",
  setup() {
    const counter = inject(CounterKey);
    if (!counter) throw new Error(`${CounterKey}がありません`);
    const count = computed(() => counter.count);
    console.log(counter);
    return {
      count,
      increment: counter.increment,
      decrement: counter.decrement
    };
  },
  components: {
    Decrement,
    Increment
  }
});
</script>
