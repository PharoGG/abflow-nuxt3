<template>
  <section class="team">
    <div class="team__content">
      <h2>Команда, которая двигает нас вперёд</h2>
      <div class="team__text">
        <p class="team__text--main">
          Для достижения поставленных целей мы собираем самых лучших спецов в наших основных опер-кластерах с неистовыми
          тим-лид-данжен-мастерами во главе всей этой ванильной вафельной вечеринки
        </p>
        <div class="team__text--block">
          <div>
            <p class="team__text--number">160+</p>
            <p class="team__text--text">сотрудников</p>
          </div>
          <div>
            <p class="team__text--number">40</p>
            <p class="team__text--text">проектов</p>
          </div>
        </div>
      </div>
      <div class="team__cities">
        <MainPageCityTag
          class="team__city-tag tag--tashkent"
          icon="images/icons/countries/uzbekistan.svg"
          country="Узбекистан"
          city="Ташкент"
        />
        <MainPageCityTag
          class="team__city-tag tag--moscow"
          icon="images/icons/countries/russia.svg"
          country="Россия"
          city="Москва"
        />
        <MainPageCityTag
          class="team__city-tag tag--dubai"
          icon="images/icons/countries/unitedarabemirates.svg"
          country="ОАЭ"
          city="Дубай"
        />
      </div>
    </div>
    <img src="/images/ellipses1.svg" alt="Background Ellipses" class="team__svg" />
     <!-- <div class="team__svg"></div> -->
  </section>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="scss">
.team {
  background-color: #4143ED;
  //background-image: url('/images/ellipses1.svg');
  background-position: center bottom;
  background-repeat: no-repeat;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  overflow: hidden;

  &__svg {
    position: absolute;
    bottom: 0;
    z-index: 0;
    pointer-events: none; // не мешает кликам
    user-select: none;
  }

  &__content {
    max-width: 1200px;
    width: 100%;
    padding: 80px 120px;
    text-align: left;
    display: flex;
    flex-direction: column;
    z-index: 10;

    @media (max-width: 1024px) {
      padding: 40px 48px;
    }

    @media (max-width: 480px) {
      padding: 40px 16px;
      padding-bottom: 24px;
      
    }

    h2 {
      font-size: 40px;
      line-height: 48px;
      font-weight: 700;
      margin-block-start: 0;
      margin-block-end: 0;
      color: #FFFFFF;
      margin-bottom: 60px;

      @media (max-width: 480px) {
        font-size: 24px;
        line-height: 30px;
      }
    }
  }

  &__text {
    display: flex;
    flex-direction: row;
    gap: 100px;

    @media (max-width: 1439px) {
      gap: 60px;
    }

    @media (max-width: 768px) {
      gap: 32px;
      flex-direction: column;
    }

    &--block {
      display: flex;
      flex-direction: row;
      gap: 100px;
      order: 2;

      @media (max-width: 1439px) {
        gap: 60px;
      }

      @media (max-width: 768px) {
        order: 1;
      }
    }

    &--main {
      font-size: 20px;
      line-height: 28px;
      font-weight: 500;
      margin-block-start: 0;
      margin-block-end: 0;
      color: #FFFFFF;
      order: 1;

      @media (max-width: 768px) {
        order: 2;
      }

      @media (max-width: 480px) {
        font-size: 16px;
        line-height: 20px;
      }
    }

    &--number {
      font-size: 80px;
      line-height: 80px;
      font-weight: 700;
      margin-block-start: 0;
      margin-block-end: 0;
      color: #FFFFFF;
      font-variant-numeric: lining-nums;

      @media (max-width: 480px) {
        font-size: 56px;
        line-height: 64px;
      }
    }

    &--text {
      font-size: 20px;
      line-height: 28px;
      font-weight: 500;
      margin-block-start: 0;
      margin-block-end: 0;
      color: #FFFFFF;

      @media (max-width: 480px) {
        font-size: 16px;
        line-height: 20px;
      }
    }    
  }

  &__cities {
    position: relative; 
    width: 100%;
    height: 177px;
    margin-top: 163px;

    @media (max-width: 1024px) {
      margin-top: 63px;
    }

    @media (max-width: 480px) {
      // height: auto;
      // display: flex;
      // flex-direction: column;
      // gap: 24px;
      height: 213px;
      margin-top: 47px;
    }
  }
}

.team__city-tag {
  position: absolute;
}

.tag--tashkent {
  top: 16px;
  left: 36.8%;

  @media (max-width: 768px) {
    top: 16px;
    left: 28.8%;
  }

  @media (max-width: 480px) {
    top: -7px;
    left: 31.8%;
  }
}

.tag--moscow {
  top: 89px;
  left: 17.9%;

  @media (max-width: 768px) {
    top: 89px;
    left: 0;
  }

  @media (max-width: 480px) {
    top: 81px;
  }
}

.tag--dubai {
  top: 140px;
  right: 18.2%;

  @media (max-width: 768px) {
    top: 140px;
    right: 0;
  }

  @media (max-width: 480px) {
    top: 151px;
  }
}
</style>