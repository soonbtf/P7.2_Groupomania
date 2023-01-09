import { createApp } from "vue";
import { createPinia } from "pinia";
import VueClickOutsideElement from "vue-click-outside-element";
import App from "@/App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faPenToSquare,
  faPowerOff,
  faFeather,
  faImage,
  faXmark,
  faEllipsis,
  faThumbsUp,
  faEye,
  faTrashCan,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faEye,
  faPenToSquare,
  faTrashCan,
  faPowerOff,
  faFeather,
  faImage,
  faXmark,
  faEllipsis,
  faThumbsUp,
  faCamera
);

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(VueClickOutsideElement);
app.component("fa", FontAwesomeIcon);
app.mount("#app");
