<template>
  <section class="projects">
    <div class="projects__content">
      <h3>Наши проекты</h3>
      <TransitionGroup name="fade" tag="div" class="projects__list">
        <MainPageProject
          v-for="(project, index) in visibleProjects"
          :key="project.description + index"
          :style="{ transitionDelay: `${index * 10}ms` }"
          :company="project.company"
          :description="project.description"
          :text="project.text"
          :direction="project.direction"
        />
      </TransitionGroup>
      <button @click="showAll = !showAll">
        {{ showAll ? 'Скрыть проекты' : 'Все проекты' }}
      </button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'

const showAll = ref(false)

const visibleProjects = computed(() => {
  return showAll.value ? projects : projects.slice(0, 6)
})

const projects = [
  {
    company: 'Beeline Казахстан',
    description: 'Цифровой оператор связи, 11 млн клиентов',
    text: 'Разработали стратегию развития скоринговых продуктов, которые позволяют клиентам подтвердить свою личность для получения банковских кредитов.',
    direction: 'телеком',
  },
  {
    company: 'Korzinka GO',
    description: 'Крупнейшая розничная сеть Узбекистана',
    text: 'Разработали мобильное приложение онлайн-супермаркета Korzinka Go, которое позволяет делать покупки, не выходя из дома.',
    direction: 'ретейл',
  },
  {
    company: 'Объединенное кредитное бюро',
    description: 'Крупнейшее бюро кредитных историй в России',
    text: 'Разработали сайт, с помощью которого компания предоставляет своим клиентам высокоэффективные сервисы по оценке рисков, управлению кредитным портфелем и противодействию мошенничеству.',
    direction: 'финтех',
  },
  {
    company: 'СберРешения',
    description: 'Лидер в области аутсорсинга бизнес-процессов и финансового консалтинга в России и СНГ',
    text: 'Провели независимый аудит отказоустойчивости сервиса.',
    direction: 'консалтинг',
  },
  {
    company: 'Bank.kz',
    description: 'Финансовый портал Казахстана',
    text: 'Приняли участие в разработке маркетплейса для рынка Казахстана, провели UI/UX работы, создали дизайн концепты, мокапы, проектирование интерфейсов портала.',
    direction: 'финтех',
  },
  {
    company: 'Veelzy',
    description: 'Персональный помощник для планирования безопасных, удобных и полезных велосипедных поездок',
    text: 'Разработка приложения для велосипедистов, которое объединяет в себе социальные и навигационные сервисы: пользователь может спланировать поездки с учетом погоды, получает бонусы за активность, может видеть передвижения друзей и переписываться с ними.',
    direction: 'тревел',
  },
  {
    company: 'Frilly',
    description: 'Сервис покупок частями',
    text: 'Разработали c «нуля» BNPL платформу, которая позволяет клиенту оплачивать покупки частями, а бизнесу - увеличивать продажи и средний чек. Провели интеграцию с интернет магазинами, кредиторами и платежными компаниями.',
    direction: 'финтех',
  },
  {
    company: 'Кибердом',
    description: 'Кибербез-хаб в центре Москвы',
    text: 'Разработали сайт, приложение и личный кабинет для резидентов Кибердома, реализовали систему управления пространством (умный дом).',
    direction: 'стартап',
  },
  {
    company: 'DCS TRAMACO',
    description: 'Логистическая компания для транспортировки фруктов и овощей, Словения',
    text: 'Разработка приложения для логистической компании, позволяющая клиентам отслеживать свои грузы и статус их доставки.',
    direction: 'логистика',
  },
  {
    company: 'ПравоТех',
    description: 'Экосистема сервисов для юристов',
    text: 'Разработали специализированное приложение Case.one для юристов, систему автоматизации юридических процессов, которая помогает управлять делами, проектами, документами, задачами и отчетами в едином интерфейсе.',
    direction: 'автоматизация',
  },
  {
    company: 'Экофинанс',
    description: 'Инновационная финансовая компания',
    text: 'Реализовали сопровождение ИТ-инфраструктуры, разработали систему решений инцидентов, модуль досрочных погашений, обеспечили интеграцию новых продуктов с сервисами компании.',
    direction: 'финтех',
  },
]
</script>

<style scoped lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: all 0.5s cubic-bezier(0.33, 1, 0.68, 1);
  transform-origin: bottom center;
}

.fade-enter-from {
  opacity: 0;
  transform: scale(0.8) translateY(40px);
}
.fade-enter-to {
  opacity: 1;
  transform: scale(1) translateY(0);
}

.fade-leave-from {
  opacity: 1;
  transform: scale(1) translateY(0);
}
.fade-leave-to {
  opacity: 0;
  transform: scale(0.8) translateY(40px);
}
.projects {
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
    gap: 24px;

    @media (max-width: 1024px) {
      padding: 40px 48px;
    }

    @media (max-width: 480px) {
      padding: 24px 16px;
      padding-bottom: 40px;
      gap: 24px;
    }

    h3 {
      font-size: 32px;
      line-height: 40px;
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
      padding: 12px 32px;
      border: 1px solid #4143ED;
      border-radius: 16px;
      background-color: #FFFFFF;
      color: #4143ED;
      cursor: pointer;
      font-size: 20px;
      line-height: 28px;
      font-weight: 700;
      transition: all 250ms ease 0s;

      &:hover {
        border-color: #2A2B99;
        color: #2A2B99;
      }

      @media (max-width: 480px) {
        font-size: 16px;
        line-height: 20px;
      }
    }
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    column-gap: 8px;
    row-gap: 24px;
    align-items: stretch;
    grid-auto-rows: auto;

    @media (max-width: 480px) {
      align-items: none;
      grid-auto-rows: none;
    }
  }
}
</style>