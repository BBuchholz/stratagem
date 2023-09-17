<script setup>
import { allCards } from './allCards'
</script>

<template>
  <h1 class="candid">
    "cArds OnThA tAble"
  </h1>
  <p class="candid">
    The definitive way to see all "installed" cards on a particular MCN (Myriad Central Node). Anywhere within the Myriad EcoSysTem try typing "CARDS" to see your available options :)
  </p>
  <div class="card">
    <img src="https://madamadam.s3.us-east-2.amazonaws.com/CARDS-6752_CARD.png">
  </div>
  <p mt-4 text-sm>
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
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');

  .candid {
    font-family: 'Russo One', sans-serif;
    font-size: 20px;
    margin: 40px;
    color: lightgray;
  }

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
