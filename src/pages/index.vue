<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
const user = useUserStore()
const anyMyrKi = $ref(user.savedMyrKi)

const router = useRouter()
function go() {
  if (anyMyrKi) {
    router.push(`/myrKiSs/${encodeURIComponent(anyMyrKi)}`)
    user.setNewMyrKi(anyMyrKi)
  }
}

const { t } = useI18n()
</script>

<template>
  <div>
    <div py-4 />

    <TheInput
      v-model="anyMyrKi"
      placeholder="enter passcode..."
      autocomplete="false"
      @keydown.enter="go"
    />
    <label class="hidden" for="input">P4SSC0DE REQU1R3D 4 ENTRY</label>

    <div>
      <button
        m-3 text-sm btn
        :disabled="!anyMyrKi"
        @click="go"
      >
        {{ t('button.go') }}
      </button>
    </div>
    <p>
      <em text-sm opacity-75>Welcome 2 thaStrataGem, thee official NewsLetter ovTha Myriad Ecosystem</em>
    </p>
    <img alt="Stratagem logo" :src="isDark ? '/thaStrataGem_LOGO_DARK.png' : '/thaStrataGem_LOGO_LIGHT.png'">
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

<style>
img {
  max-width: 100%;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0px;
  margin-bottom: 20px;
}
</style>
