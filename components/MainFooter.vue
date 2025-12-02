<template>
  <footer class="footer">
    <div class="footer__content">
      <img src="/images/logos/abflowlogo.svg" width="208" height="16"/>
      <!-- <div>
        <a>Искусственный интеллект</a>
        <a>Big data</a>
        <a>Облака</a>
      </div>
      <div>
        <a>Разработка</a>
        <a>Интеграция</a>
        <a>Автоматизация</a>
        <a>Аналитика</a>
        <a>UX проектирование</a>
      </div>
      <div>
        <a>Контакты</a>
        <a>Наши документы</a>
      </div> -->
      <p>© 2025 ABFLOW</p>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.footer {
  background-color: #000331;
  color: #ffffff;
  

  &__content {
    display: flex;
    gap: 16px;
    padding: 40px 120px;
    padding-bottom: 80px;
    align-items: baseline;
    justify-content: space-between;

    @media (max-width: 1024px) {
      padding: 40px 48px;
    }
    @media (max-width: 480px) {
      padding: 24px 16px;
      padding-bottom: 40px;
    }

    P {
      font-size: 16px;
      line-height: 22px;
      font-weight: 500;
      color: #FFFFFF;
      margin: 0;
    }

    a {
      font-size: 16px;
      line-height: 22px;
      font-weight: 500;
      color: #FFFFFF;
      margin: 0;
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
  }
}
</style>
