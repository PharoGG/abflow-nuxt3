<template>
  <section class="main">
    <div class="main__content">
      <div class="main__tasksection">
        <h2><span style="color: #4143ED;">Задачи,</span> которые мы решаем</h2>
        <div class="main__tasklist">
          <MainPageTaskCard
            v-for="(item, index) in tasks"
            :key="index"
            :icon="item.icon"
            :title="item.title"
            :description="item.description"
          />
        </div>
      </div>
      <div class="main__stacksection">
        <h3>Наш стек</h3>
        <MainPageStackList :stacks="stacks" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const tasks = [
  {
    icon: '/images/icons/tasks/icon1.svg',
    title: 'Разработка ПО',
    description: 'Создание кастомных приложений, веб-платформ, мобильных решений под нужды бизнеса.',
  },
  {
    icon: '/images/icons/tasks/icon2.svg',
    title: 'Интеграция IT-систем',
    description: 'Объединение разнородных систем (CRM, ERP, БД) для их слаженной работы.',
  },
  {
    icon: '/images/icons/tasks/icon3.svg',
    title: 'Облачные решения',
    description: 'Миграция в облако, настройка публичных/частных/гибридных облачных инфраструктур.',
  },
  {
    icon: '/images/icons/tasks/icon4.svg',
    title: 'Автоматизация процессов',
    description: 'Внедрение ERP, CRM, BPM-систем для оптимизации бизнес-операций.',
  },
  {
    icon: '/images/icons/tasks/icon5.svg',
    title: 'Аналитика и Big Data',
    description: 'Внедрение BI-систем, обработка данных, использование AI/ML для прогнозов.',
  },
  {
    icon: '/images/icons/tasks/icon6.svg',
    title: 'Виртуализация и DevOps',
    description: 'Внедрение Docker, Kubernetes, CI/CD-инструментов для ускорения разработки.',
  },
  {
    icon: '/images/icons/tasks/icon7.svg',
    title: 'Цифровая трансформация',
    description: 'Консультации и внедрение цифровых решений для модернизации бизнес-моделей.',
  },
  {
    icon: '/images/icons/tasks/icon8.svg',
    title: 'UI дизайн',
    description: 'Создания привлекательных визуальных решений для сайтов, сервисов и приложений',
  },
  {
    icon: '/images/icons/tasks/icon9.svg',
    title: 'UX проектирование',
    description: 'Разрабатка эффективных, простых и функциональных интерфейсов для процессов любой сложности',
  },
]
const stacks = [
  {
    direction: 'Backend-разработка',
    technologies: ['PHP', 'Golang', 'Java', 'Python']
  },
  {
    direction: 'Frontend-разработка',
    technologies: ['Vue.js', 'React', 'Angular']
  },
  {
    direction: 'Мобильная разработка',
    technologies: ['Flutter', 'Kotlin']
  },
  {
    direction: 'DevOps',
    technologies: ['Docker', 'Kubernetes', 'CI/CD', 'Prometheus', 'Grafana', 'Zabbix', 'Graylog']
  },
  {
    direction: 'Системный анализ',
    technologies: ['ТЗ', 'КД', 'OTAP', 'BRD', 'FRD', 'SRS', 'DFD', 'User Story', 'Use Case', 'BPMN', 'UML', 'RESTful и SOAP API', 'XML', 'ESB', 'Message broker', 'SQL']
  },
  {
    direction: 'QA',
    technologies: ['Postman', 'Soap UI', 'SQL', 'Selenium', 'JMeter', 'TestCase']
  },
  {
    direction: 'Работа с данными',
    technologies: ['Data Governance', 'Open Meta Data', 'Apache Airflow', 'Apache Superset', 'ClickHouse', 'Airbyte', 'GreenPlum', 'PFX', 'DBT', 'Spark']
  }
]
</script>

<style scoped lang="scss">
.main {
  background-color: #EFEFFF;
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
    gap: 48px;

    @media (max-width: 1024px) {
      padding: 40px 48px;
    }

    @media (max-width: 480px) {
      padding: 24px 16px;
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

    h3 {
      font-size: 32px;
      line-height: 40px;
      font-weight: 700;
      margin-block-start: 0;
      margin-block-end: 0;
      color: #000331;

      @media (max-width: 480px) {
        font-size: 18px;
        line-height: 24px;
      }
    }
  }

  &__tasksection {
    display: flex;
    flex-direction: column;
    gap: 40px;

    @media (max-width: 480px) {
      gap: 16px;
    }
  }

  &__stacksection {
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media (max-width: 480px) {
      gap: 12px;
    }
  }

  &__tasklist {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));
    gap: 24px;
    align-items: stretch;
    grid-auto-rows: 1fr;

    @media (max-width: 480px) {
      gap: 12px;
      align-items: none;
      grid-auto-rows: none;
    }
  }
}
</style>