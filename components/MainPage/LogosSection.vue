<template>
  <section class="logos-section">
    <div class="logos-track">
      <div class="logos">
        <img
          v-for="(logo, i) in logos"
          :key="'a' + i"
          :src="logo"
          class="logo"
        />
        <img
          v-for="(logo, i) in logos"
          :key="'b' + i"
          :src="logo"
          class="logo"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const logos = [
  'images/logos/webbankir.svg',
  'images/logos/okb.svg',
  'images/logos/bankkz.svg',
  'images/logos/frilly.svg',
  'images/logos/cyberdom.svg',
  'images/logos/korzinka.svg',
  'images/logos/migkredit.svg',
  'images/logos/denum.svg',
  'images/logos/crif.svg',
  'images/logos/davrbank.svg',
  'images/logos/otpbank.svg',
  'images/logos/ofb.svg',
  'images/logos/asiabank.svg',
  'images/logos/aralash.svg',
  'images/logos/ravex.svg',
  'images/logos/ecofinance.svg',
  'images/logos/sbersolutions.svg',
  'images/logos/devlogo.svg',
  'images/logos/apexbank.svg',
]
</script>

<style scoped lang="scss">
.logos-section {
  background-color: #FFFFFF;
  overflow: hidden;
  width: 100%;
  padding: 40px 0;
}

.logos-track {
  display: flex;
  align-items: center;
  white-space: nowrap;
}

.logos {
  display: flex;
  animation: scroll-left 60s linear infinite;
}

.logo {
  margin: 0 30px;
  flex-shrink: 0;
  width: 120px;
  height: 120px;

  @media (max-width: 480px) {
    margin: 0 16px;
    width: 64px;
    height: 64px;
  }
}

@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
