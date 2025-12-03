<template>
  <div>
    <MainPageHeroSection
      title="Технологический<br/>партнер вашего бизнеса"
      desc="Разрабатываем новые продукты, усиливаем конкурентные<br/> преимущества и помогаем пройти ключевые этапы<br/> цифровой трансформации бизнеса"
      img-src="images/heroimg.png"
      :show-button="true"
      @scroll-to-order="scrollToOrder"
    />
    <MainPageMainSection />
    <MainPageProjectsSection />
    <MainPageStepSection @scroll-to-order="scrollToOrder"/>
    <MainPageLogosSection />
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