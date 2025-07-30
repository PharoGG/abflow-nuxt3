<template>
  <div>
    <MainPageHeroSection @scroll-to-order="scrollToOrder"/>
    <MainPagePowersSection />
    <MainPageMainSection />
    <MainPageProjectsSection />
    <MainPageLogosSection />
    <MainPageStepSection @scroll-to-order="scrollToOrder"/>
    <MainPageTeamSection />
    <MainPageBlogSection />
    <MainPageOrderSection ref="orderRef"/>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'default'
})

const orderRef = ref()

const scrollToOrder = () => {
  orderRef.value?.$el?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style></style>