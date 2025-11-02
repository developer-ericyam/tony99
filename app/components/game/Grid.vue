<template>
  <div v-if="item" class="grid">
    <div class="banner-wrapper">
      <img :src="`/images/game${item.banner}`" class="banner" />
      <div class="title">{{ item.title }}</div>
    </div>
    <div class="game-grid">
      <GameCard
        v-for="(game, index) in item.data"
        :key="index"
        :name="game.name"
        :logo="`/images/game${game.logo}`"
        :background="`/images/game${game.bg}`"
        :is-coming-soon="game.isComingSoon"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
interface IGameGrid {
  item: any;
}
defineProps<IGameGrid>();
</script>

<style scoped lang="scss">
.grid {
  padding-bottom: 50px;
  .banner-wrapper {
    position: relative;
    .banner {
      width: 100%;
      border-radius: 24px;
    }
    .title {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 6vw;
      font-size: 3vw;
      font-weight: bold;
      color: #323232ff;
    }
  }

  .game-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 13px;
  }
}
</style>
