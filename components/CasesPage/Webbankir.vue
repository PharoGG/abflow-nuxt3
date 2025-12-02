<template>
  <section class="solutions">
    <div class="solutions__content">
      
      <div class="solutions__body">
        <div class="solutions__anchors" v-if="anchors.length && !isMobile">
          <ul>
            <li
              v-for="item in anchors"
              :key="item.id"
              @click="scrollTo(item.id)"
              :class="{ active: activeId === item.id }"
            >
              {{ item.text }}
            </li>
          </ul>
        </div>
        <div class="solutions__texts">
        <div class="solutions__text">
          <h3>Запуск системы A/B тестирования</h3>
          <p>
            Для улучшения клиентского опыта и увеличения эффективности работы сервисов WEBBANKIR внедрили инструменты A/B тестирования.
            С помощью такого тестирования можно проверять гипотезы, например, повысит ли количество повторных займов увеличение
            для клиента суммы первого займа,, вырастет ли конверсия заявок, если упростить форму заявки, снизится ли процент отказов
            по займам, если предоставить клиенту скидку на первый займ, и т.д.<br/><br/> В качестве технологического решения мы выбрали GrowthBook
            - открытую платформу для экспериментов, которая помогает проверять гипотезы и реализовывать культуру принятия решений на
            основе данных. GrowthBook позволяет проводить A/B тесты с различными типами метрик, визуализировать и интерпретировать
            результаты, осуществлять интеграцию с различными источниками данных. Компания получила возможность быстро тестировать
            гипотезы и внедрять те решения, которые показали большую эффективность.
          </p>
        </div>
        <div class="solutions__text">
          <h3>Разработка виртуальной карты для клиентов</h3>
          <p>
            Для удобного совершения платежей в интернете Webbankir решил запустить виртуальную карту для клиентов.
            Виртуальная карта привязана к основному счету клиента и имеет небольшой денежный лимит на оперативные расходы.
            Если персональные данные клиента будут скомпрометированы, деньги на его счете будут защищены. Мы реализовали
            сервис для выпуска и привязки виртуальной карты Best2Pay к личному кабинету пользователя.<br/><br/>
            Мы также проводили тестирования мобильного приложения и личного кабинета в веб-версии, проверяли функциональность, безопасность
            и юзабилити, выявляли ошибки и проводили их анализ. Увеличили качество выпускаемых релизов, что снизило количество негативной обратной
            связи от пользователей. Приложение и личный кабинет стали удобнее для клиентов.
          </p>
        </div>
        <div class="solutions__imageBlock">
          <img src="/public/images/photo/fbk.jpg" alt="photo"/>
          <p>Подпись к картинке</p>
        </div>
        <div class="solutions__text">
          <h3>Внедрение Data Governance</h3>
          <p>
            Персональный подход к клиентам невозможно обеспечить без качественной работы с данными. Как и у других российских компаний,
            у Webbankir был запрос на разработку платформенного решения по управлению данными, которое позволяло бы выстроить полный цикл
            управления данными в организации - визуализировать потоки происхождения данных, отслеживать качество данных, строить модели и
            аналитику любой сложности.<br/><br/>
            Мы выстроили полноценную технологическую практику, которая включала в себя политики и стандарты по работе с данными, управление доступом,
            качество данных, соответствие нормативным требованиям.<br/><br/>
            В качестве инструмента мы выбрали OpenMetadata. Это открытая, универсальная платформа. Мы не только настроили необходимые инструменты,
            но и добавили бизнес-контекст, чтобы каждый стейкхолдер мог легко и быстро получить ту информацию, которая ему нужна в данный момент.
            Мы также провели обучение data-инженеров, чтобы они могли поддерживать работу в дальнейшем. OpenMetadata стала центральной системой
            data-культуры компании. 
          </p>
        </div>
        <div class="solutions__text">
          <h3>Миграция риск-отчётов</h3>
          <p>
            Из-за прекращения поддержки российских компаний со стороны Amazon Web Services компании пришлось выбрать новое хранилище
            данных. Мы разобрали код сборки витрин, корректировали его и мигрировали риск отчеты в новое хранилище.<br/><br/>
            Мы также работали над развитием функционала CRM системы, настроили мониторинг телефонии для своевременного выявления проблем
            с нагрузкой сервиса. Провели проектирование автоматизированного рабочего места для сотрудников контакт центра - омниканального
            решения для работы с клиентами.<br/><br/>
            Мы стали ключевым технологическим партнером WEBBANKIR. Технологичность компании отметил портал Банки.ру - в 2024 году они назвали
            WEBBANKIR победителем в номинации «МФО года — 2024». При выборе победителя учитывались ключевые финансовые показатели, надежность
            , технологичность, а также мнение пользователей о компании и ее продуктах.
          </p>
        </div>
        </div>
      </div>
      <div class="solutions__work">
        <div class="solutions__work--container">
          <div class="solutions__work--cpo">
            <div class="solutions__work--avatar"></div>
            <div class="solutions__work--desc">
              <p>Борис Васильев</p>
              <p>CPO</p>
            </div>
          </div>
          <div class="solutions__work--cpo">
            <div class="solutions__work--avatar"></div>
            <div class="solutions__work--desc">
              <p>Амир Хасанов</p>
              <p>CPO</p>
            </div>
          </div>
        </div>
        <div class="solutions__work--container">
          <div class="solutions__work--direction">автоматизация</div>
          <div class="solutions__work--direction">разработка</div>
          <div class="solutions__work--direction">финтех</div>
          <p>10.10.2025</p>
        </div>
      </div>
      <div class="solutions__about">
        <div class="solutions__about--text">
          <h3>О заказчике</h3>
          <p>
            WEBBANKIR — система моментального электронного кредитования — предоставляет
            онлайн-микрозаймы «под ключ»: от подачи заявки до получения денежных средств без визита
            в офис.
          </p>
        </div>
        <div class="solutions__about--logo">
          <img src="/images/logos/webbankir-natural.png" alt="logo">
        </div>
      </div>
      <div class="solutions__projects">
        <h3>Другие проекты</h3>
        <TransitionGroup name="fade" tag="div" class="solutions__list">
        <MainPageProject
          v-for="(project, index) in projects"
          :key="project.description + index"
          :style="{ transitionDelay: `${index * 10}ms` }"
          :company="project.company"
          :description="project.description"
          :text="project.text"
          :direction="project.direction"
          :slug="project.slug"
        />
      </TransitionGroup>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const anchors = ref<{ id: string; text: string }[]>([])
const activeId = ref<string | null>(null)
const isMobile = ref(false)

onMounted(() => {
  const checkMobile = () => {
    isMobile.value = window.innerWidth < 792
  }
  checkMobile()
  window.addEventListener('resize', checkMobile)

  const headings = document.querySelectorAll('.solutions__text h3')
  anchors.value = Array.from(headings).map((el, index) => {
    const id = `section-${index + 1}`
    el.setAttribute('id', id)
    return {
      id,
      text: el.textContent || ''
    }
  })

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          activeId.value = e.target.id
        }
      })
    },
    { threshold: 0.4 }
  )

  anchors.value.forEach(a => {
    const el = document.getElementById(a.id)
    if (el) observer.observe(el)
  })
})

const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (!el) return
  window.scrollTo({
    top: el.offsetTop + 210,
    behavior: 'smooth'
  })
}

const projects = [
  {
    company: 'Beeline Казахстан',
    description: 'Цифровой оператор связи, 11 млн клиентов',
    text: 'Разработали стратегию развития скоринговых продуктов, которые позволяют клиентам подтвердить свою личность для получения банковских кредитов.',
    direction: 'телеком',
    slug: null,
  },
  {
    company: 'Korzinka GO',
    description: 'Крупнейшая розничная сеть Узбекистана',
    text: 'Разработали мобильное приложение онлайн-супермаркета Korzinka Go, которое позволяет делать покупки, не выходя из дома.',
    direction: 'ретейл',
    slug: null,
  },
  {
    company: 'Объединенное кредитное бюро',
    description: 'Крупнейшее бюро кредитных историй в России',
    text: 'Разработали сайт, с помощью которого компания предоставляет своим клиентам высокоэффективные сервисы по оценке рисков, управлению кредитным портфелем и противодействию мошенничеству.',
    direction: 'финтех',
    slug: null,
  },
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

  &__body {
    display: grid;
    grid-template-columns: 1fr 380px;
    grid-auto-flow: column;
    gap: 32px;
    position: relative;

    @media (max-width: 1200px) {
      grid-template-columns: 1fr 230px;
    }

    @media (max-width: 1024px) {
      grid-template-columns: 1fr 180px;
    }

    @media (max-width: 792px) {
      grid-template-columns: 1fr; 
    }
  }

  &__texts {
    grid-column: 1;
    display: flex;
    flex-direction: column;
    gap: 60px;

    @media (max-width: 480px) {
      gap: 24px;
    }
  }

  &__anchors {
    top: 60px;
    right: 40px;
    width: 100%;
    max-width: 380px;

    position: sticky;
    height: fit-content;
    align-self: flex-start;
    grid-column: 2;

    @media (max-width: 792px) {
      display: none;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    li {
      cursor: pointer;
      font-size: 20px;
      line-height: 28px;
      font-weight: 500;
      color: #00033180;
      transition: 0.2s ease;

      @media (max-width: 1200px) {
        font-size: 18px;
        line-height: 24px;
      }

      @media (max-width: 1024px) {
        font-size: 16px;
        line-height: 20px;
      }

      &.active {
        color: #4143ED;
      }

      &:hover {
        color: #4143ED;
      }
    }
  }

  &__imageBlock {
    display: flex;
    flex-direction: column;
    gap: 16px;

    img {
      border-radius: 16px;
      max-width: 518px;
      width: 100%;
      height: 295px;
      object-fit: cover;
    }

    p {
      font-size: 14px;
      line-height: 18px;
      font-weight: 500;
      color: #00000080;

      @media (max-width: 480px) {
        font-size: 12px;
        line-height: 16px;
      }
    }
  }

  &__work {
    display: flex;
    flex-direction: column;
    gap: 16px;

    &--container {
      display: flex;
      flex-direction: row;
    }

    &--container:first-child {
      gap: 24px;
    }

    &--container:last-child {
      align-items: center;
      gap: 2px;
      flex-wrap: wrap;

      p {
        font-size: 16px;
        line-height: 22px;
        font-weight: 500;
        padding-left: 16px;

        @media (max-width: 480px) {
          font-size: 14px;
          line-height: 20px;
          padding-left: 8px;
        }
      }
    }

    &--cpo {
      display: flex;
      flex-direction: row;
      gap: 8px;
    }

    div > div:first-child > &--avatar {
      width: 40px;
      height: 40px;
      background-image: url('/images/avatar/boris.jpg');
      border-radius: 24px;
      background-size: cover;
      background-position: center 25%;
    }

    div > div:last-child > &--avatar {
      width: 40px;
      height: 40px;
      background-image: url('/images/avatar/amir.jpg');
      border-radius: 24px;
      background-size: cover;
      background-position: center 25%;
    }

    &--desc {
      display: flex;
      flex-direction: column;

      p:first-child {
        font-size: 16px;
        line-height: 22px;
        font-weight: 500;
      }

      p:last-child {
        font-size: 14px;
        line-height: 18px;
        font-weight: 500;
        opacity: 40%;
      }
    }

    &--direction {
      border: #4143ED 1px solid;
      border-radius: 10px;
      padding: 2px 8px;
      font-size: 20px;
      line-height: 28px;
      font-weight: 500;
      color: #4143ED;

      @media (max-width: 480px) {
        font-size: 16px;
        line-height: 20px;
        border-radius: 8px;
      }
    }
  }

  &__about {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 32px;
    padding: 32px;
    border-radius: 16px;
    background-color: #EFEFFF;

    @media (max-width: 792px) {
      flex-direction: column;
    }

    @media (max-width: 480px) {
      gap: 16px;
      padding: 16px;
    }

    &--text {
      display: flex;
      flex-direction: column;

      @media (max-width: 792px) {
        order: 1;
      }

      h3 {
        order: 1;
        padding-bottom: 16px;
      }

      p {
        order: 3;
      }
    }

    &--logo {
      background-color: #FFFFFF;
      border-radius: 16px;
      padding: 51.5px 19px;

      @media (max-width: 792px) {
        order: 2;
        margin: auto;
      }

      img {
        max-width: 292px;
        width: 100%;

        @media (max-width: 792px) {
          max-width: 100%;
        }
      }
    }
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 8px;
    align-items: stretch;
    grid-auto-rows: auto;

    @media (max-width: 480px) {
      align-items: none;
      grid-auto-rows: none;
    }
  }
}
</style>