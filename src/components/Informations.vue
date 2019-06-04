<template>
  <section id="service" class="py-12">
    <div class="w-full">
      <h2 class="text-3xl font-bold font-handwriting">Unsere Leistungen</h2>
    </div>
    <div class="flex flex-wrap justify-center pt-12">
      <div
        class="flex flex-col w-64 h-40 rounded-lg shadow text-xl bg-green-200 m-1 cursor-pointer"
        @click="showModal = true, catID = 'stellplaetze'"
      >
        <div class="flex flex-col items-center">
          <div class="w-full text-right">
            <font-awesome :icon="['fas', 'plus']" size="1x" class="m-2"/>
          </div>
          <div class="flex items-center">
            <font-awesome :icon="['fas', 'bus']" size="2x" class="m-2"/>
            <div class="w-16">
              <Caravan/>
            </div>
          </div>
          <p class="uppercase tracking-widest pt-2 text-center">Stellplätze</p>
        </div>
      </div>
      <div
        class="flex flex-col w-64 h-40 rounded-lg shadow text-xl bg-green-200 m-1 cursor-pointer"
        @click="showModal = true, catID = 'zeltplaetze'"
      >
        <div class="flex flex-col items-center">
          <div class="w-full text-right">
            <font-awesome :icon="['fas', 'plus']" size="1x" class="m-2"/>
          </div>
          <font-awesome :icon="['fas', 'campground']" size="2x"/>
          <p class="uppercase tracking-widest pt-2 text-center">Zeltplätze</p>
        </div>
      </div>
      <div
        class="flex flex-col w-64 h-40 rounded-lg shadow text-xl bg-green-200 m-1 cursor-pointer"
        @click="showModal = true, catID = 'ferienhaeuser'"
      >
        <div class="flex flex-col items-center">
          <div class="w-full text-right">
            <font-awesome :icon="['fas', 'plus']" size="1x" class="m-2"/>
          </div>
          <font-awesome :icon="['fas', 'home']" size="2x"/>
          <p class="uppercase tracking-widest pt-2 text-center">Ferienhäuser</p>
        </div>
      </div>
      <div
        class="flex flex-col w-64 h-40 rounded-lg shadow text-xl bg-green-200 m-1 cursor-pointer"
        @click="showModal = true, catID = 'jahresplaetze'"
      >
        <div class="flex flex-col items-center">
          <div class="w-full text-right">
            <font-awesome :icon="['fas', 'plus']" size="1x" class="m-2"/>
          </div>
          <div class="flex items-center">
            <font-awesome :icon="['fas', 'bus']" size="2x" class="m-2"/>
            <div class="w-16">
              <Caravan/>
            </div>
            <font-awesome :icon="['fas', 'home']" size="2x" class="m-2"/>
          </div>
          <p class="uppercase tracking-widest pt-2 text-center">Jahresplätze</p>
        </div>
      </div>
      <div
        class="flex flex-col w-64 h-40 rounded-lg shadow text-xl bg-green-200 m-1 cursor-pointer"
        @click="showModal = true, catID = 'spielplatz'"
      >
        <div class="flex flex-col items-center">
          <div class="w-full text-right">
            <font-awesome :icon="['fas', 'plus']" size="1x" class="m-2"/>
          </div>
          <div class="w-12">
            <Sliding/>
          </div>
          <p class="uppercase tracking-widest pt-2 text-center">Spielplatz</p>
        </div>
      </div>
      <div
        class="flex flex-col w-64 h-40 rounded-lg shadow text-xl bg-green-200 m-1 cursor-pointer"
        @click="showModal = true, catID = 'sanitaeranlagen'"
      >
        <div class="flex flex-col items-center">
          <div class="w-full text-right">
            <font-awesome :icon="['fas', 'plus']" size="1x" class="m-2"/>
          </div>
          <font-awesome :icon="['fas', 'shower']" size="2x"/>
          <p class="uppercase tracking-widest pt-2 text-center">Sanitäranlagen</p>
        </div>
      </div>
      <div
        class="flex flex-col w-64 h-40 rounded-lg shadow text-xl bg-green-200 m-1 cursor-pointer"
        @click="showModal = true, catID = 'see'"
      >
        <div class="flex flex-col items-center">
          <div class="w-full text-right">
            <font-awesome :icon="['fas', 'plus']" size="1x" class="m-2"/>
          </div>
          <font-awesome :icon="['fas', 'water']" size="2x"/>
          <p class="uppercase tracking-widest pt-2 text-center">See</p>
        </div>
      </div>
      <div
        class="flex flex-col w-64 h-40 rounded-lg shadow text-xl bg-green-200 m-1 cursor-pointer"
        @click="showModal = true, catID = 'grillen'"
      >
        <div class="flex flex-col items-center">
          <div class="w-full text-right">
            <font-awesome :icon="['fas', 'plus']" size="1x" class="m-2"/>
          </div>
          <font-awesome :icon="['fas', 'dumpster-fire']" size="2x"/>
          <p class="uppercase tracking-widest pt-2 text-center">Grillen & offenes Feuer</p>
        </div>
      </div>
      <div
        class="flex flex-col w-64 h-40 rounded-lg shadow text-xl bg-green-200 m-1 cursor-pointer"
        @click="showModal = true, catID = 'hunde'"
      >
        <div class="flex flex-col items-center">
          <div class="w-full text-right">
            <font-awesome :icon="['fas', 'plus']" size="1x" class="m-2"/>
          </div>
          <font-awesome :icon="['fas', 'dog']" size="2x"/>
          <p class="uppercase tracking-widest pt-2 text-center">Hunde</p>
        </div>
      </div>
      <div
        class="flex flex-col w-64 h-40 rounded-lg shadow text-xl bg-green-200 m-1 cursor-pointer"
        @click="showModal = true, catID = 'nahverkehr'"
      >
        <div class="flex flex-col items-center">
          <div class="w-full text-right">
            <font-awesome :icon="['fas', 'plus']" size="1x" class="m-2"/>
          </div>
          <font-awesome :icon="['fas', 'road']" size="2x"/>
          <p class="uppercase tracking-widest pt-2 text-center">Nahverkehr Bus/Bahn</p>
        </div>
      </div>
      <div
        class="flex flex-col w-64 h-40 rounded-lg shadow text-xl bg-green-200 m-1 cursor-pointer"
        @click="showModal = true, catID = 'service'"
      >
        <div class="flex flex-col items-center">
          <div class="w-full text-right">
            <font-awesome :icon="['fas', 'plus']" size="1x" class="m-2"/>
          </div>
          <font-awesome :icon="['fas', 'store']" size="2x"/>
          <p class="uppercase tracking-widest pt-2 text-center">Service</p>
        </div>
      </div>
    </div>
    <!-- MODAL -->
    <Modal
      v-if="showModal"
      @close="showModal = false"
      modalFormat="services"
      :title="services[catID].title"
      :images="services[catID].images"
    >
      <div v-html="services[catID].description"></div>
    </Modal>
    <!-- MODAL END -->
  </section>
</template>

<script>
import services from "~/data/services.yml";
import Modal from "~/components/Modal.vue";
import Caravan from "~/assets/svgs/caravan.svg";
import Sliding from "~/assets/svgs/sliding.svg";

export default {
  data() {
    return {
      services,
      showModal: false,
      catID: ""
    };
  },
  components: {
    Modal,
    Caravan,
    Sliding
  }
};
</script>

<style>
</style>
