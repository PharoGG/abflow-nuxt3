<template>
  <div class="blog-item">
    <img :src="item.image"/>
    <div class="blog-item__content">
      <div class="blog-item__content--wrapper">
        <div class="blog-item__content--text">
          <h5>{{ item.title }}</h5>
          <p>{{ item.text }}</p>
        </div>
        <div class="blog-item__content--line">
          <p>{{ item.date }}</p>
          <img src="/public/images/icons/link.svg" alt="icon" width="30" height="30"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  item: {
    image: string
    title: string
    text: string
    topic: string
    topicColor: string
    date: string
  }
}>()
</script>

<style scoped lang="scss">
.blog-item {
  background-color: #ffffff;
  border-radius: 16px;
  border: #C2C3F4 1px solid;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }

  img {
    width: 100%;
    height: 160px;
    object-fit: cover;

    &:last-child {
      width: 30px;
      height: 30px;
    }

    @media (max-width: 480px) {
      height: 160px;
    }
  }

  &__content {
    padding: 16px;
    display: flex;
    flex: 1;

    h5 {
      font-size: 16px;
      line-height: 20px;
      font-weight: 700;
      margin: 0;
      color: #1C2445;
    }

    p {
      font-size: 14px;
      line-height: 18px;
      font-weight: 500;
      color: #4B4E68;
      margin: 0;
    }

    &--wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 16px;
      height: 100%;
      width: 100%;

      @media (max-width: 480px) {
        gap: 12px;
      }
    }

    &--text {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    &--line {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      line-height: 20px;

      p {
        font-size: 20px;
        line-height: 28px;
        font-weight: 500;
        color: #4143ED;
      }
    }
  }
}

</style>