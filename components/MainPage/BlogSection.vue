<template>
  <section class="blog">
    <div class="blog__content">
      <div class="blog__list">
        <MainPageBlogItem
          v-for="(item, index) in news"
          :key="index"
          :item="item"
        />
      </div>
      <a>Больше статей</a>
    </div>
  </section>
</template>

<script lang="ts" setup>
const news = [
  {
    image: 'images/blog/blog1.png',
    title: 'Проверка реестра должников по ИИН',
    text: 'В современном мире, когда все процессы становятся все более автоматизированными и ускоренными, получение займа стало…',
    topic: 'Разработка',
    topicColor: '#4143ED',
    date: '03.10.2023',
  },
  {
    image: 'images/blog/blog2.png',
    title: 'UI/UX тренды 2025 года',
    text: 'Минимализм, микроанимации и кастомные иллюстрации — что будет в моде и почему.',
    topic: 'Дизайн',
    topicColor: '#FF6A3A',
    date: '03.10.2023',
  },
  {
    image: 'images/blog/blog3.png',
    title: 'Как мы помогли стартапу вырасти в 3 раза за 6 месяцев',
    text: 'Кейс о том, как правильная команда и технологии дают кратный рост.',
    topic: 'Бизнес',
    topicColor: '#00B26F',
    date: '03.10.2023',
  },
]
</script>

<style scoped lang="scss">
.blog {
  background-color: #FFFFFF;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &__content {
    max-width: 1200px;
    width: 100%;
    padding: 80px 120px;
    padding-top: 40px;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media (max-width: 1024px) {
      padding: 40px 48px;
    }

    @media (max-width: 480px) {
      padding: 24px 16px;
      gap: 16px;
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

    a {
      width: 147px;
      font-size: 20px;
      line-height: 28px;
      font-weight: 600;
      margin-block-start: 0;
      margin-block-end: 0;
      color: #4143ED;
      cursor: pointer;
      transition: color 0.3s ease;

      &:hover {
        color: #2e30b9;
      }

      @media (max-width: 480px) {
        width: 117px;
        font-size: 16px;
        line-height: 20px;
      }
    }
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(389px, 1fr));
    gap: 16px;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(auto-fit, minmax(298px, 1fr));
    }

    @media (max-width: 480px) {
      grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));
    }
  }

  @media (max-width: 707px) {
  .blog__list > *:nth-child(n + 3) {
    display: grid;
  }
}
}
</style>