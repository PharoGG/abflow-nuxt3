<template>
  <div class="task">
    <img :src="icon" alt="icon" width="40" height="40"/>
    <h4 class="task__title">{{ title }}</h4>
    <p class="task__description">{{ description }}</p>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  icon: string
  title: string
  description: string
}>()
</script>

<style scoped lang="scss">
.task {
  background-color: #EFEFFF;
  padding: 24px;
  border-radius: 16px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  @media (max-width: 480px) {
    padding: 16px;
    gap: 12px;
  }
  
  // transition: transform 0.3s ease;

  // &:hover {
  //   transform: translateY(-8px);
  // }

  &__title {
    font-size: 20px;
    font-weight: 700;
    line-height: 26px;
    margin: 0;
    color: #000331;

    @media (max-width: 480px) {
      font-size: 16px;
      line-height: 20px;
    }
  }

  &__description {
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    margin: 0;
    color:#000331;

    @media (max-width: 480px) {
      font-size: 14px;
      line-height: 20px;
    }
  }
}
</style>
