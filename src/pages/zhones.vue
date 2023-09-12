<script setup>
import { getCardFor } from './myrKiSs/allCards'
</script>

<template>
  <div class="text-center">
    <h3>Zhones</h3>
  </div>

  <div class="zhone">
    <div class="card">
      <img :src="getCardFor('CARDS').image">
    </div>
    <div>
      <a :href="getCardFor('CARDS').siteUrl">
        {{ getCardFor('CARDS').siteName }}
      </a> - {{ getCardFor('CARDS').siteDesc }}
    </div>
  </div>
  <div class="zhone">
    <div class="card">
      <img :src="getCardFor('CGBA').image">
    </div>
    <div>
      <a href="#">
        Coventry Grove Builders Association
      </a> - mature occult content, philosophical explorations that occasionally need to use the safe word... (link on this page intentionally disabled, use CARDS for access)
    </div>
  </div>
  <div class="zhone">
    <div class="card">
      <img :src="getCardFor('SYLFAN').image">
    </div>
    <div>
      <a href="https://sylvan-circle.netlify.app/">
        Sylvan Circle Academy
      </a> - The "Sylfan" philosophy of Sylvan Circle Academy encourages "Self and Circle" thinking with regards to learning and dissemination of learning...
    </div>
  </div>
  <div class="zhone">
    <div class="card">
      <img :src="getCardFor('BUILDER').image">
    </div>
    <div>
      <a href="https://jacobs-salvage.netlify.app/">
        Jacob's Salvage Yard
      </a> - A Coventry Grove site, and thus subject to the MATURE MATERIAL disclaimer. A place to recycle ideas and attachments into the raw components of inspiration and artistic endeavor... We don't throw away anything in Coventry Grove, all are Gathered Back into tha Gratefully Bountiful Gatherlyngs...
    </div>
  </div>
  <div class="zhone">
    <div class="card">
      <img :src="getCardFor('WEWALKS').image">
    </div>
    <div>
      <a href="https://jus-be-u.netlify.app/">
        JusBeU
      </a> - Coventry Grove's little sister site, the more PG rated version of spirituality that keeps it safe and basic. A good place to learn about meditation and affirmations and general wellness without worrying about touching upon the more intense levels dealt with by CG in general...
    </div>
  </div>
  <div class="zhone">
    <div class="card">
      <img :src="getCardFor('BAOLG2').image">
    </div>
    <div>
      <a href="https://baolg.netlify.app/">
        BAOLG
      </a> - Builders Association Ov Layered Generalists, a living, breathing WorkShop PortFolio ov which thaSG (this site) is an extension
    </div>
  </div>
  <div class="zhone">
    <div class="card">
      <img :src="getCardFor('PLAY').image">
    </div>
    <div>
      <a href="https://sonic-circle.netlify.app/">
        Sonic Circle
      </a> - A Place 4 Musicians 2 Play! A non-judgemental, turn based, participation oriented playground for musicians and aspiring musicians of all skill levels and goal orientationsChro
    </div>
  </div>
  <div class="zhone">
    <div class="card">
      <img :src="getCardFor('MCCU').image">
    </div>
    <div>
      <a href="https://mccu.netlify.app/">
        Myriad Central Credit Union
      </a> - "Giving Credit Where Credit Is Due"
    </div>
  </div>
  <div class="zhone">
    <div class="card">
      <img :src="getCardFor('CGBA').image">
    </div>
    <div>
      <a href="#">
        Coventry Grove Credit Union
      </a> - to afford discretion to members of CGBA, a separate Credit Union, with distinct persona registries, is maintained. Address will be given only to members of CGBA, link here is disabled but is mentioned to assure the curious of discretion.
    </div>
  </div>
</template>

<style scoped>
a {
    color: aqua;
}

.zhone {
    margin: 40px;
}
</style>
