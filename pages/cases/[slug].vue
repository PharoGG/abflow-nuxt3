<template>
  <div>
    <MainPageHeroSection
      subTitle="Кейсы"
      :title="caseName"
      img-src="images/heroimg2.png"
      :show-button="false"
    />
    <component :is="componentName" />
    <MainPageOrderSection/>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const slug = route.params.slug as string
const caseName = slug.toUpperCase()

const caseComponents: Record<string, any> = {
  webbankir: () => import('~/components/CasesPage/Webbankir.vue'),
}

if (!caseComponents[slug]) {
  throw createError({ statusCode: 404, message: 'Case not found' })
}

const componentName = defineAsyncComponent(caseComponents[slug])
</script>
