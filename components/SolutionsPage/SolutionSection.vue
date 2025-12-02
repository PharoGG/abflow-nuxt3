<template>
  <section class="solutions">
    <div class="solutions__content">
      <div class="solutions__text">
        <h3>Решаем технологические задачи</h3>
        <p>
          Создаем для бизнеса индивидуальную технологическую стратегию, основанную на глубоком анализе отрасли
          и перспективных тенденциях. Внедряем эффективные решения для бесперебойной работы инфраструктуры,
          проводим компанию через все этапы цифровой трансформации. Так, для WEBBANKIR мы стали ключевым
          технологическим партнером, осуществив как большие, так и точечные задачи: запустили систему A/B тестирований,
          которая даст компании возможность проверять гипотезы клиентского опыта для увеличения эффективности бизнеса.
          Также разработали для них платформенное решение по управлению данными. Для СберРешений провели нагрузочные тестирования,
          сформировали рекомендации по оптимизации сервиса.
        </p>
      </div>
      <div class="solutions__text">
        <h3>Создаем продукты для клиентов</h3>
        <p>
          Для крупнейшей розничной сети Узбекистана Korzinka мы разработали мобильное приложение онлайн-супермаркета.
          В первый год активными пользователями стали 130 тысяч клиентов сети. Для стартапа Veelzy разработали приложение
          для велосипедистов, которое объединяет в себе социальные и навигационные сервисы: пользователь может спланировать
          поездки с учетом погоды, получает бонусы за активность, может видеть передвижения друзей и переписываться с ними.
          Для рекламного агентства разработали AI платформу, позволяющую создавать сайты на основе сгенерированных AI текстов
          и изображений. Для экосистемы ПравоТех сделали систему автоматизации юридических процессов, которая помогает управлять
          делами, проектами, документами, задачами и отчетами в едином интерфейсе.
        </p>
      </div>
      <div class="solutions__text">
        <h3>Разрабатываем финтех проекты</h3>
        <p>
          Финтех - одна из тех сфер, в которой мы обладаем максимальной компетенцией. Наши ключевые сотрудники много лет работали
          в компаниях-лидерах финансовой отрасли. В финтехе мы становимся партнером для банков, МФО и стартапов, связанных с финансами.
          Разработали сайт для нового банка Узбекистана с интеграцией внутренних систем, автоматизацией анкетного сервиса, внедрением
          онлайн-заявок. Организовали единое хранилище данных для группы компаний Мигкредит. Разработали платежный шлюз, позволяющий
          проводить оплату российских услуг и товаров картами, выпущенными за границей.<br/><br/>
          В последние годы активно развивается сфера BNPL (от англ. buy now, pay later — «покупай сейчас, плати потом»). Мы разработали c «нуля»
          BNPL платформу Frilly, которая позволяет клиенту оплачивать покупки частями, а бизнесу - увеличивать продажи и поднимать средний чек.
          Провели интеграцию с интернет магазинами, кредиторами и платежными компаниями. Сделали BNPL сервис для «Denum Плати частями».
          Для стартапа из Нидерландов разработали сервис платежей, позволяющий компаниям проводить платежи для своих клиентов в любой точке мира.<br/><br/>
          Мы также готовы реализовывать нестандартные задачи. Так, мы разработали «под ключ» платформу для проведения розыгрышей Национальной
          лотереи в одной из стран СНГ. Для кибербез-хаба в центре Москвы «Кибердом разработали сайт, приложение и личный кабинет для резидентов,
          реализовали систему управления пространством (умный дом).
        </p>
      </div>
      <div class="solutions__stacksection">
        <h3>Наш стек</h3>
        <MainPageStackList :stacks="stacks" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
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
.solutions {
  background-color: #FFFFFF;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &__content {
    max-width: 1200px;
    width: 100%;
    padding: 60px 120px;
    padding-bottom: 80px;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 60px;

    @media (max-width: 1024px) {
      padding: 40px 48px;
    }

    @media (max-width: 480px) {
      padding: 24px 16px;
      gap: 24px;
    }
    
    p {
      font-size: 20px;
      line-height: 28px;
      font-weight: 500;
      max-width: 788px;
      color: #000331;

      @media (max-width: 792px) {
        max-width: 100%;
      }

      @media (max-width: 480px) {
        font-size: 16px;
        line-height: 20px;
      }
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
      padding-bottom: 24px;

      @media (max-width: 480px) {
        padding-bottom: 12px;
        font-size: 18px;
        line-height: 24px;
      }
    }
  }
}
</style>