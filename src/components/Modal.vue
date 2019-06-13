<template>
  <div
    class="flex justify-center items-center fixed inset-0 z-50 w-screen h-screen bg-gray-50"
    v-if="modalFormat == 'blank'"
  >
    <div class="flex flex-col max-w-6xl max-h-70 bg-green-100 rounded-lg shadow-lg">
      <div class="text-right">
        <button @click="$emit('close')" class="p-4">
          <font-awesome :icon="['fas', 'times']" size="2x"/>
        </button>
      </div>
      <div class="overflow-y-auto">
        <slot></slot>
      </div>
    </div>
  </div>

  <div
    class="flex justify-center items-center fixed inset-0 z-50 w-screen h-screen bg-gray-50"
    v-else-if="modalFormat == 'services'"
  >
    <div class="flex flex-col max-w-6xl max-h-85 bg-green-100 rounded-lg shadow-lg pt-1 pb-4">
      <div class="text-right">
        <button @click="$emit('close')" class="pr-3">
          <font-awesome :icon="['fas', 'times']" size="2x"/>
        </button>
      </div>
      <div class="overflow-y-auto">
        <h3 class="text-3xl text-center font-bold font-handwriting">{{ title }}</h3>
        <div class="text-xl p-12">
          <slot></slot>
        </div>
        <div class="flex flex-wrap justify-center">
          <div v-for="image in images" :key="image.index">
            <g-image
              :src="require('!!assets-loader?width=500!~/../static/uploads/'+image+'')"
              class="p-2"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    class="flex flex-col fixed inset-0 z-50 w-screen h-screen bg-gray-50"
    v-else-if="modalFormat == 'gallery'"
  >
    <div class="relative text-right">
      <button
        @click="$emit('close')"
        class="h-8 w-8 flex justify-center m-2 absolute top-0 right-0 bg-gray-50 rounded-full text-gray-400"
      >
        <font-awesome :icon="['fas', 'times']" size="1x"/>
      </button>
    </div>

    <div class="h-full flex flex-col justify-center items-center">
      <g-image
        :src="require('!!assets-loader!~/../static'+gallery.data[arrImageID].file+'')"
        class="max-h-85 object-contain"
      />
      <div
        v-if="gallery.data[arrImageID].description"
        class="flex justify-center m-2 bg-gray-400 text-lg tracking-widest rounded-full px-4 py-1"
      >{{gallery.data[arrImageID].description}}</div>
      <div class="flex flex-wrap justify-center items-center">
        <button
          type="button"
          :class="[{'cursor-not-allowed opacity-50' : arrImageID == 0},'w-10 h-10 flex justify-center items-center bg-gray-300 rounded-full p-2 m-2']"
          @click="previousImage()"
        >
          <font-awesome :icon="['fas', 'chevron-left']" size="1x"/>
        </button>
        <!-- <span
          v-for="(image,index) in gallery"
          :key="image.index"
          :class="[{ 'font-bold bg-gray-600' : arrImageID == index, 'bg-gray-500' : arrImageID != index } , 'flex justify-center items-center w-8 h-8 text-lg m-1 rounded-full']"
        >{{index+1}}</span>-->
        <div class="bg-gray-300 rounded-full p-2">
          {{showActiveImageID}} /
          {{imagesCount}}
        </div>

        <button
          type="button"
          :class="[{'cursor-not-allowed opacity-50' : showActiveImageID >= imagesCount},'w-10 h-10 flex justify-center items-center bg-gray-300 rounded-full p-2 m-2']"
          @click="nextImage()"
        >
          <font-awesome :icon="['fas', 'chevron-right']" size="1x"/>
        </button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ["modalFormat", "selectedImageID", "gallery", "title", "images"],
  data() {
    return {
      imagesCount: 0,
      arrImageID: this.selectedImageID,
      showActiveImageID: this.selectedImageID + 1
    };
  },
  methods: {
    previousImage() {
      if (this.arrImageID > 0) {
        this.arrImageID--;
        this.showActiveImageID--;
      }
    },
    nextImage() {
      if (this.arrImageID < this.imagesCount - 1) {
        this.arrImageID++;
        this.showActiveImageID++;
      }
    },
    keyup(e) {
      // console.log(e);
      if (e.key == "ArrowRight") {
        if (this.arrImageID < this.imagesCount - 1) {
          this.arrImageID++;
          this.showActiveImageID++;
        }
      }
      if (e.key == "ArrowLeft") {
        if (this.arrImageID > 0) {
          this.arrImageID--;
          this.showActiveImageID--;
        }
      }
      if (e.key == "Escape") {
        this.$emit("close");
      }
    }
  },
  mounted() {
    document.body.classList.add("overflow-hidden");
    window.addEventListener("keyup", this.keyup);
    if (this.modalFormat == "gallery")
      this.imagesCount = this.gallery.data.length;
  },
  destroyed() {
    document.body.classList.remove("overflow-hidden");
  }
};
</script>

<style></style>
