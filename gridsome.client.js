import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPhone,
  faEnvelope,
  faClock,
  faCalendarAlt,
  faInfo,
  faPlus,
  faBus,
  faCampground,
  faHome,
  faShower,
  faWater,
  faDumpsterFire,
  faDog,
  faRoad,
  faStore,
  faTimes,
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faPhone,
  faEnvelope,
  faClock,
  faCalendarAlt,
  faInfo,
  faPlus,
  faBus,
  faCampground,
  faHome,
  faShower,
  faWater,
  faDumpsterFire,
  faDog,
  faRoad,
  faStore,
  faTimes,
  faFacebookSquare,
  faInstagram,
  faChevronLeft,
  faChevronRight
);

export default function(Vue) {
  Vue.component("font-awesome", FontAwesomeIcon);
}
