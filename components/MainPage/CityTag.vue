<template>
  <div class="city-tag">
    <div class="city-tag__icon">
      <img :src="icon" alt="Country icon" width="40" height="40" />
    </div>
    <div class="city-tag__text">
      <p class="city-tag__country">{{ country }}</p>
      <p class="city-tag__city">{{ city }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  icon: string
  country: string
  city: string
}>()
</script>

<style scoped lang="scss">
.city-tag {
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-radius: 32px;
  gap: 8px;
  padding: 8px;
  padding-right: 32px;
  width: fit-content;
  box-shadow: 0 4px 20px 0 #4143ED;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }

  &__icon {
    display: flex;
    flex-shrink: 0;
  }

  &__text {
    display: flex;
    flex-direction: column;
  }

  &__country {
    font-size: 12px;
    line-height: 14px;
    font-weight: 600;
    color: #000331;
    opacity: 50%;
    margin: 0;
  }

  &__city {
    font-size: 20px;
    line-height: 26px;
    font-weight: 600;
    color: #000331;
    margin: 0;
    margin-top: auto;
  }
}
</style>
