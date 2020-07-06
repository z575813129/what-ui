import wbutton from "./wbutton";

wbutton.install = function(Vue) {
  Vue.component('wbutton', wbutton)
  if (typeof window && window.Vue) {
    window.Vue.use(wbutton)
  }
}
