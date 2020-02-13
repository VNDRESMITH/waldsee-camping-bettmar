<template>
  <div class="flex flex-col container rounded-lg shadow-lg mx-auto bg-green-100 my-8">
    <header class="flex flex-col sm:flex-row h-full sm:h-64 justify-between items-center">
      <nav class="flex mx-auto text-center sm:text-left sm:w-1/3 sm:pl-12">
        <ul class="flex flex-col uppercase tracking-widest text-lg py-0 py-2">
          <li class="menueLink">
            <a href="/">Startseite</a>
          </li>
          <li class="menueLink">
            <a href="#service">Unsere Leistungen</a>
          </li>
          <li class="menueLink">
            <a href="#gallery">Galerie</a>
          </li>
          <li
            @click="showModal = true, catID = 'preisliste'"
            class="menueLink cursor-pointer"
          >Preisliste</li>
          <li class="menueLink">
            <a href="#contact">Kontakt</a>
          </li>
        </ul>
      </nav>
      <div class="flex flex-col items-center">
        <g-image src="~/assets/images/logo.png" width="319"/>
        <h1 class="slogan pt-2 pl-32 font-handwriting text-xl" v-html="site_infos.slogan"></h1>
      </div>

      <div class="w-full p-4 sm:p-6 sm:w-1/3">
        <ul class="flex flex-col">
          <li class="flex items-center tracking-widest">
            <font-awesome class="p-1 text-green-300" :icon="['fas', 'phone']" size="2x"/>
            <a :href="'tel:'+site_infos.phone">{{site_infos.phone}}</a>
          </li>
          <li class="flex items-center tracking-widest uppercase">
            <font-awesome class="p-1 text-green-300" :icon="['fas', 'envelope']" size="2x"/>
            <!-- <a :href="'mailto:'+site_infos.email"> --> {{site_infos.email}} <!-- </a> -->
          </li>
          <li class="flex items-center tracking-widest uppercase font-bold">
            <font-awesome class="p-1 text-green-300" :icon="['fas', 'clock']" size="2x"/>
            {{site_infos.opening_days}}
          </li>
          <li class="flex items-center tracking-widest uppercase font-bold">
            <font-awesome class="p-1 text-green-300" :icon="['fas', 'calendar-alt']" size="2x"/>
            {{site_infos.opening_hours}}
          </li>
        </ul>
      </div>
      <!-- MODAL -->
      <Modal v-if="showModal" @close="showModal = false" modalFormat="blank">
        <PriceTable/>
      </Modal>
      <!-- MODAL END -->
    </header>

    <content>
      <slot/>
    </content>

    <footer
      id="contact"
      class="flex flex-col sm:flex-row justify-end bg-no-repeat bg-contain bg-bottom text-center sm:text-left"
    >
      <div
        class="flex flex-col sm:flex-row w-full sm:w-3/4 justify-end sm:pl-12 pt-6 text-green-100"
      >
        <div class="w-full sm:w-1/2 flex flex-col">
          <span class="font-bold">{{site_infos.title}}</span>
          Betreiber {{site_infos.owner}}
          <br>
          {{site_infos.adress}}
          <br>
          {{site_infos.plz}}
          <br>
          <br>
          <div class="flex flex-col sm:flex-row">
            <a href="/imprint">Impressum&nbsp;</a>
            <a href="/privacy-policy">Datenschutzerklärung</a>
          </div>
        </div>
        <div class="w-full sm:w-1/2 flex flex-col justify-end">
          <div>
            <!-- <font-awesome class="m-1 text-green-100" :icon="['fab', 'facebook-square']" size="2x"/>
            <font-awesome class="m-1 text-green-100" :icon="['fab', 'instagram']" size="2x"/>-->
            <a
              class="text-sm block"
              target="_blank"
              href="/einverstaendniserklaerung.pdf"
            >Einverständniserklärung (Minderjährige)</a>
            <a
              class="text-sm block"
              target="_blank"
              href="/verantwortung.pdf"
            >Einverständniserklärung (Gruppe)</a>
          </div>
          <p>&copy; {{ new Date().getFullYear() }} Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import site_infos from "~/data/site-infos.yml";
import Modal from "~/components/Modal.vue";
import PriceTable from "~/components/PriceTable.vue";

export default {
  data() {
    return {
      site_infos,
      showModal: false,
      catID: ""
    };
  },
  components: {
    Modal,
    PriceTable
  },
  mounted() {
    let netlifyScript = document.createElement("script");
    netlifyScript.innerText = `if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }`;
    document.body.appendChild(netlifyScript);
    document.body.classList = "font-sans bg-green-200 text-dark-100";
  }
};
</script>


<style>
body {
  @apply font-sans bg-green-200 text-dark-100;
}

header {
  /* background-image: url("../assets/images/abstract1.png"); */
  @apply flex flex-col justify-between items-center h-64 bg-no-repeat;
}

content {
  @apply flex-1;
}

section {
  @apply px-8;
}

footer {
  @apply bg-dark-100;
}
@screen sm {
  footer {
    @apply bg-transparent;
    background-image: url("../assets/images/footer_abstract_bg.png");
  }
}
.menueLink:hover {
  @apply font-bold pl-1 opacity-75;
}

.logo {
  @apply flex justify-center w-1/3;
}

.slogan {
  transform: rotate(-4deg);
}

@screen sm {
  header {
    @apply flex-row;
  }
}
</style>


