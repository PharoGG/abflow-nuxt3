<template>
  <div class="do">
    <img src="/public/images/icons/paragraph_icon.svg" alt="icon" width="18" height="18"/>
    <p>{{ text }}</p>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  text: string
}>()
</script>

<style scoped lang="scss">
.do {
  display: flex;
  flex-direction: row;
  gap: 12px;
  width: 100%;

  img {
    height: 28px;
  }

  p {
    font-size: 20px;
    line-height: 28px;
    font-weight: 500;

    @media (max-width: 480px) {
      font-size: 16px;
      line-height: 20px;
    }
  }
}
</style>