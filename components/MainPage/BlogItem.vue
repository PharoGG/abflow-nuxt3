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
          <p :style="{ backgroundColor: item.topicColor }">{{ item.topic }}</p>
          <p>{{ item.date }}</p>
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
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }

  img {
    width: 100%;
    height: 160px;
    object-fit: cover;

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
        font-size: 12px;
        line-height: 12px;
        font-weight: 500;
        margin: 0;
      }

      p:first-child {
        color: #FFFFFF;
        padding: 2px 8px;
        border-radius: 8px;
      }

      p:last-child {
        color: #000331;
      }
    }
  }
}

</style>