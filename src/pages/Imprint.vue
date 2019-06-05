<template>
  <Layout>
    <div class="w-2/3 mx-auto">
      <h2 class="text-4xl py-8">Impressum</h2>
      <h2 class="text-xl">{{site_infos.title}}</h2>
      <br>
      {{site_infos.owner}}
      <br>
      {{site_infos.adress}}
      <br>
      {{site_infos.plz}}
      <br>
      <br>
      Telefon: {{site_infos.phone}}
      <br>
      E-Mail: {{site_infos.email}}
      <br>
      <br>
      Inhaltlich Verantwortlicher gem. § 55 II RStV: {{site_infos.owner}}
      <h3 class="text-3xl py-8">Design, Konzept & Umsetzung:</h3>
      <a href="http://www.blvcksmith.de" target="_blank">
        <g-image alt="BLVCKSMITH Logo" src="~/assets/images/blvcksmith-logo.svg" width="300"/>
      </a>
      <p>
        BLVCKSMITH Code / Design
        <br>Andre Schmidt
        <br>Deilmisser Str. 2a
        <br>31036 Eime
      </p>
    </div>
  </Layout>
</template>

<script>
import site_infos from "~/data/site-infos.yml";

export default {
  data() {
    return {
      site_infos
    };
  }
};
</script>

<style>
</style>
