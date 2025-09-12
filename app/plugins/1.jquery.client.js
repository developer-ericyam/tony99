import jQuery from "jquery";

export default defineNuxtPlugin(() => {
  if (process.client) {
    window.$ = window.jQuery = jQuery;
    if (!window.$.fn) {
      window.$.fn = jQuery.fn;
    }
  }
});
