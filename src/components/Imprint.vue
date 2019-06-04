<template>
  <div class="w-2/3 mx-auto">
    <h2 class="text-4xl py-8">Impressum</h2>
    <h2 class="text-xl">{{$site.pages[0].frontmatter.site_infos.title}}</h2>
    <br>
    {{$site.pages[0].frontmatter.site_infos.owner}}
    <br>
    {{$site.pages[0].frontmatter.site_infos.adress}}
    <br>
    {{$site.pages[0].frontmatter.site_infos.plz}}
    <br>
    <br>
    Telefon: {{$site.pages[0].frontmatter.site_infos.phone}}
    <br>
    E-Mail: {{$site.pages[0].frontmatter.site_infos.email}}
    <br>
    <br>
    Inhaltlich Verantwortlicher gem. § 55 II RStV: {{$site.pages[0].frontmatter.site_infos.owner}}
    <h3 class="text-3xl py-8">Design, Konzept & Umsetzung:</h3>
    <a href="http://www.blvcksmith.de" target="_blank">
      <img class="w-1/4" alt="BLVCKSMITH Logo" :src="$withBase('/blvcksmith-logo.svg')">
    </a>
    <p>
      BLVCKSMITH Code / Design
      <br>Andre Schmidt
      <br>Deilmisser Str. 2a
      <br>31036 Eime
    </p>
  </div>
</template>

<script>
export default {};
</script>


