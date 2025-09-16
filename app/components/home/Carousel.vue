<template>
  <a-carousel effect="fade">
    <div class="banner" v-for="item in items">
      <img :key="item.alt" :src="item.src" :alt="item.alt" />
    </div>
  </a-carousel>
</template>

<script setup lang="ts">
import ImgVVV from "~/assets/images/carousel/VVV.jpg";
import ImgMY from "~/assets/images/carousel/MYSDAYs.png";
import ImgCC from "~/assets/images/carousel/CC.png";
import ImgWallet from "~/assets/images/carousel/WALLET.png";
import ImgBanner from "~/assets/images/carousel/tony-banner.webp";

const items = [
  { src: ImgVVV, alt: "VVV" },
  { src: ImgMY, alt: "MYSDAYs" },
  { src: ImgCC, alt: "CC" },
  { src: ImgWallet, alt: "WALLET" },
  { src: ImgBanner, alt: "Tony Banner" },
];
</script>

<style scoped lang="scss">
.banner {
  outline: none;
  img {
    border-radius: 20px;
    position: relative;
    z-index: 0;
    width: 100%;
    height: 275px;
    margin: auto;
    outline: none;
  }
}
</style>
