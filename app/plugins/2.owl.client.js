export default defineNuxtPlugin(async (nuxtApp) => {
  const Carousel = (await import("vue-owl-carousel/src/Carousel.vue")).default;
  nuxtApp.vueApp.component("OwlCarousel", Carousel);
});
