<template>
  <div class="section">
    <div class="fgtitle">
      <span class="hot-icon">
        <img src="~/assets/images/marquee/providers/hot-provider.png" />
      </span>
      Providers
    </div>
    <div>
      <ClientOnly>
        <OwlCarousel
          autoplay
          loop
          :dots="false"
          :nav="false"
          :margin="10"
          :slideBy="6"
          :responsive="{
            0: { items: 4 },
            800: { items: 5 },
            1400: { items: 6.5 },
          }"
        >
          <div class="item" v-for="(item, index) in items" :key="index">
            <div class="logo-box">
              <img :src="item.href" />
            </div>
          </div>
        </OwlCarousel>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
const items = [
  new URL("~/assets/images/marquee/providers/1_allbet.png", import.meta.url),
  new URL(
    "~/assets/images/marquee/providers/2_asiagaming.png",
    import.meta.url
  ),
  new URL("~/assets/images/marquee/providers/3_cq9.png", import.meta.url),
  new URL("~/assets/images/marquee/providers/4_evolution.png", import.meta.url),
  new URL("~/assets/images/marquee/providers/5_jili.png", import.meta.url),
  new URL("~/assets/images/marquee/providers/6_joker.png", import.meta.url),
  new URL("~/assets/images/marquee/providers/7_live22.png", import.meta.url),
  new URL("~/assets/images/marquee/providers/8_maxbet.png", import.meta.url),
  new URL("~/assets/images/marquee/providers/9_mega888.png", import.meta.url),
  new URL(
    "~/assets/images/marquee/providers/10_microgaming.png",
    import.meta.url
  ),
  new URL("~/assets/images/marquee/providers/11_netent.png", import.meta.url),
  new URL("~/assets/images/marquee/providers/12_playngo.png", import.meta.url),
  new URL("~/assets/images/marquee/providers/13_playtech.png", import.meta.url),
  new URL(
    "~/assets/images/marquee/providers/14_pragmaticplay.png",
    import.meta.url
  ),
  new URL(
    "~/assets/images/marquee/providers/15_spadegaming.png",
    import.meta.url
  ),
  new URL("~/assets/images/marquee/providers/16_wmcasino.png", import.meta.url),
];
</script>

<style scoped lang="scss">
.section {
  margin: 0 0 30px;

  .fgtitle {
    display: flex;
    align-items: center;
    margin-bottom: 5px;

    .hot-icon {
      margin-right: 7px;

      img {
        height: 25px;
        filter: brightness(8) grayscale(0.5) hue-rotate(101deg) contrast(0.5);
      }
    }
  }

  .logo-box {
    background: linear-gradient(45deg, #e9ce98ff, #c1a447ff);
    padding: 10px 5px;
    border-radius: 10px;
    position: relative;

    img {
      filter: brightness(0.5) contrast(5.5);
      display: block;
      width: 100%;
      max-width: 90%;
      margin: auto;
    }
  }
}
</style>
