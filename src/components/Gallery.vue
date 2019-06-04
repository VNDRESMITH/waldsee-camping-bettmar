<template>
  <section id="gallery" class="py-12">
    <h2 class="text-3xl font-bold font-handwriting">Galerie</h2>
    <div class="flex">
      <div class="flex items-center">
        <button
          @click="scrollLeft()"
          class="hidden sm:flex justify-center w-10 h-10 bg-gray-300 rounded-full m-1"
        >
          <font-awesome :icon="['fas', 'chevron-left']" size="1x"/>
        </button>
      </div>
      <div id="galleryContent" class="flex overflow-x-scroll bg-gray-300">
        <div
          v-for="(image,index) in gallery"
          :key="image.index"
          @click="showModal = true, selectedImageID = index"
          class="flex-0-auto rounded-lg shadow-md mr-2 cursor-pointer"
        >
          <g-image :src="'/uploads/'+image.file" class="h-64"/>
        </div>
      </div>
      <div class="flex items-center">
        <button
          @click="scrollRight()"
          class="hidden sm:flex justify-center w-10 h-10 bg-gray-300 rounded-full m-1"
        >
          <font-awesome :icon="['fas', 'chevron-right']" size="1x"/>
        </button>
      </div>
    </div>
    <Modal
      v-if="showModal"
      @close="showModal = false"
      modalFormat="gallery"
      :selectedImageID="selectedImageID"
      :gallery="gallery"
    ></Modal>
  </section>
</template>

<script>
import gallery from "~/data/gallery.yml";
import Modal from "~/components/Modal.vue";
export default {
  data() {
    return {
      gallery,
      showModal: false,
      selectedImageID: 0
    };
  },
  components: {
    Modal
  },
  methods: {
    scrollLeft() {
      document.getElementById("galleryContent").scrollLeft -= 500;
    },
    scrollRight() {
      document.getElementById("galleryContent").scrollLeft += 500;
    }
  }
};
</script>

<style>
#galleryContent {
  -webkit-overflow-scrolling: touch;
}
</style>
