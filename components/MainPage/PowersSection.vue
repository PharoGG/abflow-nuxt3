<template>
  <section class="powers">
    <div class="powers__content">
      <h2>Наши суперсилы</h2>
      <div class="powers__list">
        <MainPagePower
          v-for="(item, index) in powers"
          :key="index"
          :icon="item.icon"
          :title="item.title"
          :description="item.description"
          :color="item.color"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const powers = [
  {
    icon: 'images/icons/powers/icon1.svg',
    title: 'Разработка',
    description: 'Реализация проектов под ключ любой сложности. Усиление проектной команды. Работы с техническим долгом',
    color: '#4143ED'
  },
  {
    icon: 'images/icons/powers/icon2.svg',
    title: 'Работа с данными',
    description: 'Создание различных хранилищ и систем управления данными. Консалтинг в области BIG Data и построения моделей',
    color: '#00CAF2'
  },
  {
    icon: 'images/icons/powers/icon3.svg',
    title: 'Аналитика и аудит',
    description: 'Проведение анализа и аудита текущего состояния IT ландшафта или ПО. Разбор и описание legacy кода',
    color: '#2EE58A'
  },
  {
    icon: 'images/icons/powers/icon4.svg',
    title: 'Контроль качества & QA',
    description: 'Настройка и реализация мониторинга сервисов. Внедрение систем логирования. Проведение различных видов тестирования',
    color: '#F1A33D'
  },
  {
    icon: 'images/icons/powers/icon5.svg',
    title: 'Внедрение решений',
    description: 'Внедрение различных коробочных решений и их кастомизация под заказчика. Системы принятия решений, АБС, ITSM, CRM и прочие платформы от различных вендоров',
    color: '#F13D9D'
  }
]
</script>

<style scoped lang="scss">
.powers {
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
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 40px;

    @media (max-width: 1024px) {
      padding: 40px 48px;
    }

    @media (max-width: 480px) {
      padding: 24px 16px;
      padding-bottom: 40px;
      gap: 24px;
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
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 64px 32px;

    @media (max-width: 1024px) {
      gap: 48px 32px;
    }

    @media (max-width: 480px) {
      gap: 32px;
    }
  }
}
</style>