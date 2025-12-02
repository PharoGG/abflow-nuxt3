<template>
  <div class="partner">
    <img :src="imgSrc" alt="icon"/>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  imgSrc: string
}>()
</script>

<style scoped lang="scss">
.partner {
  background-color: #EFEFFF;
  padding: 60px;
  border-radius: 16px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center; 

  @media (max-width: 480px) {
    padding: 40px;
    gap: 12px;
  }
  // transition: transform 0.3s ease;

  // &:hover {
  //   transform: translateY(-8px);
  // }

  img {
    max-width: 295px;
    max-height: 97px;
    width: 100%;
    object-fit: contain;
  }
}
</style>
