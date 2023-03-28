import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "@/App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faEye,
  faPowerOff,
  faFeather,
  faImage,
  faEllipsis,
  faThumbsUp,
  faCamera,
  faXmark,
  faUserPlus,
  faGear,
  faCheck,
  faBell,
  faHouse,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";

library.add(
  faEye,
  faPowerOff,
  faFeather,
  faImage,
  faEllipsis,
  faThumbsUp,
  faCamera,
  faXmark,
  faUserPlus,
  faGear,
  faCheck,
  faBell,
  faHouse,
  faUserGroup,
  faFacebookMessenger
);

const app = createApp(App);
const pinia = createPinia();

app.config.performance;
app.use(pinia);
app.use(router);
app.component("fa", FontAwesomeIcon);
app.mount("#app");
