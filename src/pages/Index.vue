<template>
  <Layout>
    <About/>
    <Informations/>
    <Gallery/>
    <Location/>
    <Infos/>
  </Layout>
</template>

<script>
import About from "~/components/About.vue";
import Informations from "~/components/Informations.vue";
import Gallery from "~/components/Gallery.vue";
import Location from "~/components/Location.vue";
import Infos from "~/components/Infos.vue";

export default {
  metaInfo: {
    title: "Startseite"
  },
  components: {
    About,
    Informations,
    Gallery,
    Location,
    Infos
  }
};
</script>
