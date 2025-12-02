<template>
  <section class="hero" :style="bgStyle">
    <div class="hero__content" :style="contentStyle">
      <p v-if="subTitle">{{subTitle}}</p>
      <h1 v-html="title"></h1>
      <p v-if="desc" v-html="desc"></p>
      <button
        v-if="showButton"
        @click="$emit('scroll-to-order')"
      >
        Заказать проект
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
defineEmits(['scroll-to-order'])

const props = defineProps<{
  subTitle?: string
  title: string
  desc?: string
  imgSrc: string
  showButton?: boolean
}>()

const showButton = props.showButton ?? false

const bgStyle = computed(() => ({
  backgroundImage: `url(${props.imgSrc})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center top',
  backgroundRepeat: 'no-repeat'
}))

const contentStyle = computed(() => ({
  gap: props.subTitle ? "10px" : "39px"
}))
</script>

<style scoped lang="scss">
.hero {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  animation: bgPan 3s ease-out forwards;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  // @media (max-width: 1440px) {
  //   height: 754px;
  // }

  // @media (max-width: 1024px) {
  //   height: 654px;
  // }

  // @media (max-width: 768px) {
  //   height: 578px;
  // }

  // @media (max-width: 480px) {
  //   height: 364px;
  // }


  &__content {
    position: relative;
    z-index: 2;
    max-width: 1200px;
    padding: 160px 120px;
    padding-top: 196px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 39px;
    text-align: left;

    @media (max-width: 1024px) {
      padding: 160px 48px;
    }

    @media (max-width: 768px) {
      padding: 120px 48px;
    }

    @media (max-width: 480px) {
      padding: 48px 16px;
      padding-top: 104px;
    }

    h1 {
      font-size: 56px;
      line-height: 64px;
      margin-block-start: 0;
      margin-block-end: 0;

      @media (max-width: 480px) {
        font-size: 28px;
        line-height: 36px;
      }
    }

    p {
      font-size: 24px;
      line-height: 30px;
      margin-block-start: 0;
      margin-block-end: 0;

      @media (max-width: 480px) {
        font-size: 16px;
        line-height: 20px;
      }
    }

    button {
      width: 228px;
      height: 58px;
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

      @media (max-width: 480px) {
        width: 195px;
        height: 44px;
        font-size: 16px;
      }
    }
  }
}
@keyframes bgPan {
  from {
    background-position: center top;
  }
  to {
    background-position: center;
  }
}
</style>
