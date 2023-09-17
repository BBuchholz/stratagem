<script setup>
import { getWxrdFor } from './allWxrds'

const sortedWxrds = ref([
  getWxrdFor('Card'),
  getWxrdFor('Zhone'),
  getWxrdFor('Persona'),
  getWxrdFor('Credit'),
  getWxrdFor('Pass Code'),
  getWxrdFor('Myriad'),
  getWxrdFor('Narrative Context'),
  getWxrdFor('myrKi'),
])
</script>

<template>
  <div class="text-center">
    <h3>Wxrds</h3>
  </div>

  <div v-for="aWxrd in sortedWxrds" :key="aWxrd" class="zhone flex-container">
    <div class="content flex-child">
      <li>
        <em>{{ aWxrd.wxrdValue }}</em> - {{ aWxrd.wxrdDef }}
      </li>
    </div>
  </div>
</template>

<style scoped>
.text-center {
  margin: 40px;
}
a {
    color: aqua;
}

.zhone {
    margin: 40px;
}
.flex-container {
    display: flex;
}

.flex-child {
    flex: 1;
}

.flex-child:first-child {
    margin-right: 20px;
}
</style>
