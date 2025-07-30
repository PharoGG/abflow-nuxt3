<template>
  <div class="project">
    <div class="project__cell">
      <h4 class="project__company">{{ company }}</h4>
      <p class="project__direction" :style="{ backgroundColor: color }">{{ direction }}</p>
    </div>
    <div class="project__cell">
      <h4 class="project__title">{{ title }}</h4>
      <p class="project__description">{{ description }}</p>
    </div>
    <div class="project__cell" v-if="technologies">
      <div class="project__technologies">{{ technologies }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  company: string
  direction: string
  title: string
  description: string
  technologies?: string
  color: string
}>()
</script>

<style scoped lang="scss">
.project {
  display: grid;
  grid-template-columns: 1.2fr 3.3fr 1fr;
  gap: 16px;
  padding: 24px 0;
  border-bottom: 1px solid #C2C3F4;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
    border: none;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 480px) {
    padding: 16px 0;
    gap: 12px;
  }

  &__cell {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__company {
    font-size: 20px;
    line-height: 26px;
    font-weight: 700;
    margin: 0;
    color: #000331;

    @media (max-width: 480px) {
      font-size: 16px;
      line-height: 20px;
    }
  }

  &__direction {
    margin: 0;
    font-size: 14px;
    line-height: 18px;
    font-weight: 50;
    padding: 2px 8px;
    background: #4143ED;
    color: #FFFFFF;
    border-radius: 10px;
    display: inline-block;
    width: fit-content;

    @media (max-width: 480px) {
      font-size: 12px;
      line-height: 16px;
    }
  }

  &__title {
    margin: 0;
    font-size: 20px;
    line-height: 26px;
    font-weight: 600;
    color: #4143ED;

    @media (max-width: 480px) {
      font-size: 16px;
      line-height: 20px;
    }
  }

  &__description {
    margin: 0;
    font-size: 16px;
    line-height: 22px;
    font-weight: 500;
    color: #000331;

    @media (max-width: 480px) {
      font-size: 14px;
      line-height: 20px;
    }
  }

  &__technologies {
    margin: 0;
    font-size: 16px;
    line-height: 22px;
    font-weight: 500;
    color: #000331;
  }
}
</style>
