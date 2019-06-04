<template>
  <section class="py-12">
    <div class="flex flex-col-reverse sm:flex-row items-center">
      <div class="w-full sm:w-3/5">
        <h1 class="text-3xl font-bold text-center font-handwriting pt-2 sm:pt-0">{{about.title}}</h1>
        <p class="text-xl text-center">{{about.description}}</p>
      </div>
      <div class="w-full sm:w-2/5 flex justify-center px-8">
        <div>
          <g-image
            v-if="about.image"
            :src="require('~/assets/images/'+about.image+'')"
            width="400"
            class="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import about from "~/data/about.yml";

export default {
  data() {
    return {
      about
    };
  }
};
</script>

<style>
</style>
