<template>
  <div ref="el" class="game-card" :class="{ cs: isComingSoon }">
    <img :src="background" />
    <div class="p-detail">
      <div v-show="!isHovered">
        <img v-if="!isComingSoon" :src="logo" />
        <p>Play anytime, anywhere!</p>
      </div>
      <div v-show="isHovered">
        <h3>{{ name }}</h3>
        <button class="playnowbtn" @click="emits('click')">
          {{ isComingSoon ? "Coming Soon" : "Play Now" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useElementHover } from "@vueuse/core";

interface IGameCard {
  background: string;
  logo: string;
  name: string;
  isComingSoon?: boolean;
}
defineProps<IGameCard>();
const emits = defineEmits<{ click: [] }>();

const el = ref<HTMLElement | null>(null);
const isHovered = useElementHover(el);
</script>

<style scoped lang="scss">
.game-card {
  flex: 0 0 32.5%;
  position: relative;
  transform: scale(1);
  transition: all 0.2s ease;

  &.cs {
    > img {
      filter: grayscale(1);
    }
  }

  &:hover {
    transition: all 0.2s ease;
    transform: scale(1.03);
  }

  img {
    width: 100%;
  }
  .p-detail {
    position: absolute;
    top: 50%;
    margin-right: 47%;
    margin-left: 5%;
    left: 0px;
    transform: translateY(calc(-50% + 20px));
    text-align: center;
    width: 45%;

    h3 {
      margin-top: 20px;
      margin-bottom: 10px;
      line-height: 1.1;
      font-size: 24px;
      font-weight: bold;
      color: #e9ce98ff;
    }

    p {
      color: #fff1d9;
      font-weight: bold;
      margin: 0 0 10px;
    }

    .playnowbtn {
      cursor: pointer;
      font-size: 16px;
      color: #fff;
      text-transform: uppercase;
      line-height: 16px;
      background: #00000000;
      padding: 10px 20px;
      border-radius: 100px;
      outline: 0px;
      border: 2px solid #fff;
      transition: all 0.2s ease;

      &:hover {
        background: #f9e575;
        border: 2px solid #f9e575;
        color: #000;
      }
    }
  }
}
</style>
