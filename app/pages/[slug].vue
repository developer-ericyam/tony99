<template>
  <div>
    <template v-if="!!gameItem">
      <GameGrid :item="gameItem" />
      <HomeSectionProviders />
    </template>
    <div class="seo-container">
      <ContentWordpress />
    </div>
  </div>
</template>

<script setup lang="ts">
import { games } from "~/utils/data";

const route = useRoute();
const localePath = useLocalePath();

const gameItem = computed(() => {
  return games.find((game) => localePath(game.path) === route.path);
});
</script>

<style scoped lang="scss">
.seo-container {
  background: #c3a64c;
  padding: 20px;
  border-radius: 20px;
  color: #323232ff;
}
</style>
