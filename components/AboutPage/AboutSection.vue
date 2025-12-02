<template>
  <section class="about">
    <div class="about__content">
      <div class="about__maintext">
        <p>
          Мы не гонимся за рейтингами, не стремимся стать «большими и сложными», а значит, бюрократичными и неповоротливыми.
          Мы исторически фокусировались на финтехе, работали со многими финансовыми организациями в качестве партнера и подрядчика,
          объединили специалистов, в портфолио которых такие бренды, как ВТБ, Сбербанк, Юникредит Банк, Lamoda, AVIS, ABBYY, TraceAir,
          AWATERA и др. Теперь к нам обращаются не только финансовые организации, но и компании из других сфер бизнеса: логистики,
          ритейла, Travel и др. Мы готовы и к высоко нагруженным федеральным проектам, и к локальным историям.
        </p>
        <div class="about__cpo">
          <div class="about__cpo--avatar">
            <!-- <img src="/images/avatar/boris.jpg" width="200" height="200"/> -->
          </div>
          <div class="about__cpo--desc">
            <p>Борис Васильев</p>
            <p>CPO</p>
          </div>
        </div>
      </div>
      <div class="about__subtext">
        <p>За пять лет работы на рынке России и стран СНГ мы стали технологическим партнером ведущих компаний из разных отраслей:
          финтех, ритейл, телеком, travel и др.<br/><br/> Стремительное развитие технологий, изменение законодательства вынуждает компании обновлять
          технологический стек, быстро внедрять новые решения, фокусироваться на скорости и масштабировании. При этом копится бэклог с мелкими
          проблемами, до которых не доходят руки. Большой техдолг — болевая точка, с которой к нам часто обращаются.<br/><br/> Второй популярный
          запрос - отсутствие необходимой экспертизы для работы с теми или иными решениями. Даже самые крупные организации были вынуждены
          оптимизировать штат. Когда возникают новые, а особенно - проектные задачи - их просто некому решать. Также часто компания вынуждена
          отказаться от того или иного подрядчика из-за качества услуг или фокусировки на зарубежном ПО, и нужно быстро наладить работу в
          новых условиях, с чем мы тоже успешно справляемся.
        </p>
      </div>
      <div class="about__team">
        <h3>Команда, которая двигает нас вперёд</h3>
        <div class="about__team--desc">
          <p>
            Для достижения поставленных целей мы собираем самых лучших спецлв в наших основных опер-кластерах с неистовыми
            тим-лид-данжен-мастерами во главе всей этой ванильной вафельной вечеринки
          </p>
          <div class="about__team--block">
            <div>
              <p class="about__team--number">50+</p>
              <p class="about__team--text">сотрудников</p>
            </div>
            <div>
              <p class="about__team--number">40+</p>
              <p class="about__team--text">проектов</p>
            </div>
          </div>
        </div>
      </div>
      <div class="about__partners">
        <h3>Наши партнёры</h3>
        <div class="about__partners--list">
          <AboutPagePartner
            v-for="(item, index) in partners"
            :key="index"
            :imgSrc="item.imgSrc"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const partners = [
  {
    imgSrc: 'images/partners/odoo-logo.png',
  },
  {
    imgSrc: 'images/partners/ivanti-logo.png',
  },
  {
    imgSrc: 'images/partners/elma-logo.png',
  },
]
</script>

<style scoped lang="scss">
.about {
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
      max-width: 788px;
      color: #000331;

      @media (max-width: 792px) {
        max-width: 100%;
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
        font-size: 18px;
        line-height: 24px;
      }
    }
  }

  &__maintext {
    display: flex;
    flex-direction: row;
    gap: 32px;
    width: 100%;
    font-size: 24px;
    line-height: 30px;
    font-weight: 500;
    color: #000331;
    margin: 0;
    

    @media (max-width: 792px) {
      flex-direction: column;
    }

    @media (max-width: 480px) {
      font-size: 16px;
      line-height: 20px;
    }
  }

  &__cpo {
    display: flex;
    flex-direction: column;
    gap: 12px;
    order: 2;

    &--avatar {
      width: 200px;
      height: 200px;
      background-image: url('/images/avatar/boris.jpg');
      border-radius: 24px;
      background-size: cover;
      background-position: center 25%;
    }

    &--desc {
      font-size: 16px;
      line-height: 22px;
      font-weight: 500;
      color: #000331;

      p:last-child {
        font-size: 14px;
        line-height: 18px;
        opacity: 40%;
      }
    }

    @media (max-width: 792px) {
      align-items: center;
      order: -1;
    }
  }

  &__subtext {
    font-size: 20px;
    line-height: 28px;
    font-weight: 500;

    @media (max-width: 480px) {
      font-size: 16px;
      line-height: 20px;
    }
  }

  &__team {
    font-size: 24px;
    line-height: 30px;
    font-weight: 500;

    @media (max-width: 1439px) {
      font-size: 16px;
      line-height: 20px;
    }

    &--desc {
      display: flex;
      flex-direction: row;
      gap: 32px;

      @media (max-width: 1439px) {
        gap: 60px;
      }

      @media (max-width: 768px) {
        gap: 32px;
        flex-direction: column;
      }
    }

    &--block {
      display: flex;
      flex-direction: row;
      gap: 98px;
      order: 2;

      // @media (max-width: 1439px) {
      //   gap: 60px;
      // }

      @media (max-width: 768px) {
        order: 1;
      }

      div {
        width: 100%;
      }
    }

    &--number {
      font-size: 64px;
      line-height: 64px;
      font-weight: 700;
      margin-block-start: 0;
      margin-block-end: 0;
      color: #4143ED !important;
      font-variant-numeric: lining-nums;

      @media (max-width: 480px) {
        font-size: 56px;
        line-height: 64px;
      }
    }

    &--text {
      font-size: 16px;
      line-height: 22px;
      font-weight: 500;
      margin-block-start: 0;
      margin-block-end: 0;

      @media (max-width: 480px) {
        font-size: 16px;
        line-height: 20px;
      }
    }    
  }

  &__partners {
    &--list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
      gap: 8px;

      // @media (max-width: 1024px) {
      //   grid-template-columns: repeat(auto-fit, minmax(298px, 1fr));
      // }

      // @media (max-width: 480px) {
      //   grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      // }
    }
  }
}
</style>