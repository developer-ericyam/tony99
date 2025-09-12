<template>
  <div style="margin-bottom: 30px">
    <div v-if="title" class="fgtitle">
      <span>
        <ClientOnly>
          <img class="icon" v-if="icon" :src="icon.href" alt="icon" />
        </ClientOnly>
      </span>
      {{ title }}
    </div>
    <ClientOnly>
      <OwlCarousel
        class="owl-component"
        autoplay
        loop
        :margin="10"
        :dots="false"
        :nav="false"
        :autoplaySpeed="2000"
        :smartSpeed="2000"
        :slideTransition="'linear'"
        :autoplayTimeout="2000"
        :responsive="{
          0: { items: 4 },
          800: { items: 5 },
          1400: { items: 6.5 },
        }"
      >
        <div class="item" v-for="(item, index) in items" :key="index">
          <div class="tumbox">
            <div class="gname">{{ item.name }}</div>
            <img :src="item.src.href" :alt="item.alt" />
          </div>
        </div>
      </OwlCarousel>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
interface IMarquee {
  title?: string;
  icon?: URL;
  items: { name: string; src: URL; alt: string }[];
}
defineProps<IMarquee>();
</script>

<style scoped lang="scss">
.fgtitle {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  .icon {
    height: 25px;
    filter: brightness(8) grayscale(0.5) hue-rotate(101deg) contrast(0.5);
    margin-right: 7px;
  }
}
.owl-component {
  padding: 5px 0;
  .tumbox {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    text-align: center;
    transition: 0.3s;
    cursor: pointer;
    padding: 3px;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      margin: 0px;
      border-radius: inherit;
      background: linear-gradient(
        1deg,
        #bb8200 20%,
        #ffe7a2 41%,
        #573800 49%,
        #ffdb9a 98%,
        gold 100%
      );
    }

    .gname {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 4%;
      font-size: 13px;
      cursor: pointer;
    }
  }
}
</style>
