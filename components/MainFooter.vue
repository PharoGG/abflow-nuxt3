<template>
  <footer class="footer">
    <div class="footer__content">
      <img src="/images/logos/abflowlogo.svg" width="136" height="24"/>
      <p>2025</p>
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
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1024px) {
      padding: 40px 48px;
    }
    @media (max-width: 480px) {
      padding: 24px 16px;
      padding-bottom: 40px;
    }

    P {
      font-size: 20px;
      line-height: 28px;
      font-weight: 500;
      color: #FFFFFF;
      margin: 0;
    }
  }
}
</style>
