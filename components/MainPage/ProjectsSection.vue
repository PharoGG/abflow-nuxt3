<template>
  <section class="projects">
    <div class="projects__content">
      <h2><span style="color: #4143ED;">Проекты,</span> которыми мы гордимся</h2>
      <TransitionGroup name="fade" tag="div" class="projects__list">
        <MainPageProject
          v-for="(project, index) in visibleProjects"
          :key="project.description + index"
          :style="{ transitionDelay: `${index * 10}ms` }"
          :company="project.company"
          :direction="project.direction"
          :title="project.title"
          :description="project.description"
          :technologies="project.technologies"
          :color="project.color"
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
    company: 'Frilly',
    direction: 'Разработка',
    title: 'Разработка BNPL-сервиса',
    description: 'Разработка c «нуля» BNPL платформы. Интеграция с интернет магазинами, кредиторами и платежными компаниями.',
    technologies: 'PHP / Angular',
    color: '#4143ED'
  },
  {
    company: 'Veelzy',
    direction: 'Разработка',
    title: 'Разработка мобильного приложения',
    description: 'Разработка социального мобильного приложения, которое позволяет построить интересные маршрутов для велосипедистов.',
    technologies: 'Flutter / Python',
    color: '#4143ED'
  },
  {
    company: 'Кибердом',
    direction: 'Разработка',
    title: 'Развитие сервисов',
    description: 'Развитие фич сайта, личного кабинета резидента Кибердома и приложения. Интегсервисоврация с CRM Bitrix, реализация для управления пространством (умный дом)',
    technologies: 'React / Kotlin / Bitrix',
    color: '#4143ED'
  },
  {
    company: 'Webbankir',
    direction: 'Разработка',
    title: 'Внедрение A/B-тестирования',
    description: 'Внедрение инструмента A/B-тестирования GrowthBook, позволяющего проводить эксперименты, и обучение команды заказчика',
    technologies: 'Flutter / Python',
    color: '#4143ED'
  },
  {
    company: 'МигКредит',
    direction: 'Работа с данными',
    title: 'Разработка хранилищя данных',
    description: 'Разработка единого хранилища данных для группы компаний',
    technologies: 's3+airbyte, FX+GreenPlum, DBT+airflow',
    color: '#3DD3F1'
  },
  {
    company: 'Beeline KZ',
    direction: 'Работа с данными',
    title: 'Разработка стратегий скоринговых продуктов',
    description: 'Разработка стратегии развития BIG Data скоринговых продуктов и вывод их на рынок Казахстана',
    technologies: '',
    color: '#3DD3F1'
  },
  {
    company: 'Kupi',
    direction: 'Разработка',
    title: 'Разработка сервиса букинга авиабилетов',
    description: 'Разработка платформы для реализации авиабилетов с ориентацией на аудиторию Средней Азии',
    technologies: 'PHP / Vue.js',
    color: '#4143ED'
  },
  {
    company: 'Bank.kz',
    direction: 'UI/UX',
    title: 'Разработка маркетплейса финуслуг',
    description: 'Участие в разработке маркетплейса для Казахского рынка. UI/UX работы и создание дизайн концептов, мокапов, проектирование интерфейсов',
    technologies: '',
    color: '#F13D9D'
  },
  {
    company: 'Korzinka Go',
    direction: 'Разработка',
    title: 'Разработка мобильного приложения доставки',
    description: 'Онлайн супермаркет в Узбекистане, аналог Яндекс Go. Наша команда занималась доработками приложения доставки (LeBazar)',
    technologies: '',
    color: '#4143ED'
  },
  {
    company: 'ОКБ',
    direction: 'Разработка',
    title: 'Разработка сайта БКИ',
    description: 'Разработка и поддержка сайта крупнейшего Кредитного Бюро в России. Внедрение функций чат-бота',
    technologies: 'Vue.js / Bitrix',
    color: '#4143ED'
  },
  {
    company: '1stOpus',
    direction: 'Тестирование',
    title: 'Приёмочное тестирование МП',
    description: 'Функциональное и интеграционное тестирование мобильного приложения на Android и Apple устройствах',
    technologies: '',
    color: '#F1A33D'
  },
  {
    company: 'СберРешения',
    direction: 'Тестирование',
    title: 'Нагрузочное тестирование сервисов',
    description: 'Проведение нагрузочного тестирования сервиса Мои.Сберрешения. Формирование рекомендаций по оптимизации сервиса',
    technologies: 'K6',
    color: '#F1A33D'
  },
  {
    company: 'Webbankir',
    direction: 'Работа с данными',
    title: 'Внедрение Data Governance',
    description: 'Внедрение инструмента Data Governance — OpenMetaData. Разработка коннекторов, настройка data lineage. Обучение Dataинженеров',
    technologies: '',
    color: '#3DD3F1'
  }
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
    display: flex;
    flex-direction: column;
  }
}
</style>