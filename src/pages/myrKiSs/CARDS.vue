<script setup>
import { ref } from 'vue'

const allCards = ref([
  {
    passCode: 'BAOLG2',
    wxrdtype: '',
    localDescription: 'Builders Association Ov Layered Generalists',
    uuid: '',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/BAOLG-0c83.png',
  },
  {
    passCode: 'BUILDER',
    wxrdtype: '',
    localDescription: '',
    uuid: '',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/BUILDER-2f53.png',
  },
  {
    passCode: 'CGBA',
    wxrdtype: '',
    localDescription: 'Coventry Grove Builders Association',
    uuid: '',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/CGBA-13c9.png',
  },
  {
    passCode: 'MCCU',
    wxrdtype: '',
    localDescription: 'Myriad Central Credit Union - Giving Credit Where Credit Is Due',
    uuid: '',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/MCCU-adec_CARD.png',
  },
  {
    passCode: 'PANDAEMONIC',
    wxrdtype: '',
    localDescription: '',
    uuid: '',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/PANDAEMONIC-02ea_CARD.png',
  },
  {
    passCode: 'PLAY',
    wxrdtype: '',
    localDescription: 'A Place 4 Musicians 2 Play',
    uuid: '',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/PLAY-4249.png',
  },
  {
    passCode: 'SYLFAN',
    wxrdtype: '',
    localDescription: 'Sylvan Circle Academy',
    uuid: '',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/SYLFAN-857a_CARD.png',
  },
  {
    passCode: 'SYW5',
    wxrdtype: '',
    localDescription: '',
    uuid: '',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/SYW5-ac89_CARD.png',
  },
  {
    passCode: 'WEWALKS',
    wxrdtype: '',
    localDescription: '',
    uuid: '',
    image: 'https://madamadam.s3.us-east-2.amazonaws.com/WEWALKS-9071_20230821_115243_0000.png',
  },
])
</script>

<template>
  <h1>"cArds OnThA tAble"</h1>
  <p mt-4 text-sm>
    The definitive way to see all "installed" cards on a particular MCN (Myriad Central Node). Anywhere within the Myriad EcoSysTem try typing "CARDS" to see your available options :)
  </p>
  <div class="card">
    <img src="https://madamadam.s3.us-east-2.amazonaws.com/CARDS-6752_CARD.png">
  </div>
  <p mt-4 text-sm>
    <span opacity-75>Recently attempts:</span>
    <ul>
      <li v-for="aCard in allCards" :key="aCard">
        <div>
          <RouterLink :to="`/myrKiSs/${aCard.passCode}`" replace>
            {{ aCard.passCode }}
            <div class="card">
              <img :src="aCard.image">
            </div>
          </RouterLink>
        </div>
      </li>
    </ul>
  </p>

  <!-- <p>
    Wxrds
  </p>

  <StepInStone
    v-for="wxrd in testWxrds"
    :key="wxrd.uuid"
    :uuid="wxrd.uuid"
    :wxrdvalue="wxrd.wxrdvalue"
    :wxrdtype="wxrd.wxrdtype"
    :content="wxrd.content"
    :related="wxrd.related"
    :image="wxrd.image"
  /> -->
</template>

<style>
  .card {
    max-width: 50%;
    height: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    margin-bottom: 50px;
    border: 5px;
    border-color: white;
    border-style: solid;
    border-radius: 1%;
  }
</style>
