<template>
  <section class="powers">
    <div class="powers__content">
      <h2><span style="color: #4143ED;">Давайте сделаем</span> первый шаг<br/> к новому проекту вместе</h2>
      <button @click="$emit('scroll-to-order')">Заказать проект</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
defineEmits(['scroll-to-order'])
</script>

<style scoped lang="scss">
.powers {
  background-color: #EFEFFF;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &__content {
    max-width: 1200px;
    width: 100%;
    padding: 40px 120px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media (max-width: 1024px) {
      padding: 40px 48px;
    }

    @media (max-width: 480px) {
      padding: 20px 16px;
    }

    h2 {
      font-size: 40px;
      line-height: 48px;
      font-weight: 700;
      margin-block-start: 0;
      margin-block-end: 0;
      color: #000331;

      @media (max-width: 480px) {
        font-size: 24px;
        line-height: 30px;
      }
    }
    button {
      width: 228px;
      height: 58px;
      margin: auto;
      border: none;
      cursor: pointer;
      border-radius: 16px;
      background-color: #4143ED;
      color: white;
      font-size: 20px;
      font-weight: 700;
      font-style: 'Raleway', sans-serif;
      line-height: 28px;
      transition: background-color 250ms ease 0s;
      &:hover {
        background-color: #2A2B99;
      }
    }
  }
}
</style>