<template>
  <header class="site-header">
    <div class="container">
      <div class="logo">
        <a href="/">
          <img src="/images/logos/abflowlogo.svg" width="136" height="24"/>
        </a>        
      </div>

      <nav :class="{ open: isMenuOpen }" class="nav">
        <a href="/solutions" @click="closeMenu">Решения</a>
        <a href="/cases"@click="closeMenu">Кейсы</a>
        <a href="/about" @click="closeMenu">О нас</a>
        <a @click="closeMenu">Контакты</a>
        <a>+7 (495) 123 4565</a>
      </nav>

      <button class="burger" :class="{ open: isMenuOpen }" @click="toggleMenu">
        <span :class="{ open: isMenuOpen }" />
        <span :class="{ open: isMenuOpen }" />
        <span :class="{ open: isMenuOpen }" />
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style lang="scss">
.site-header {
  background: #00033100;
  //padding: 24px 0;
  position: absolute;
  width: 100%;
  top: 0;
  z-index: 1000;

  .container {
    max-width: 100%;
    margin: 0 auto;
    padding: 24px 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 480px) {
      padding: 28px 16px;
    }
  }

  // .logo {
  //   padding: 0 32px;
  // }

  .nav {
    display: flex;
    gap: 40px;

    a {
      text-decoration: none;
      color: white;
      font-weight: 500;
      transition: color 0.2s ease;
      cursor: pointer;

      &:hover {
        color: #007bff;
      }

      &:last-child {
        padding-left: 90px;
      }
    }

    @media (max-width: 768px) {
      position: absolute;
      top: 100%;
      right: 0;
      background: white;
      flex-direction: column;
      gap: 16px;
      padding: 16px 24px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
      display: none;

      &.open {
        display: flex;
      }
    }
  }

  .burger {
    display: none;
    background: none;
    border: none;
    flex-direction: column;
    gap: 7px;
    cursor: pointer;
    z-index: 1001;

    span {
      width: 24px;
      height: 2px;
      background: white;
      transition: 0.3s ease;
    }

    span.open:nth-child(1) {
      transform: rotate(45deg) translateY(7px);
    }

    span.open:nth-child(2) {
      opacity: 0;
    }

    span.open:nth-child(3) {
      transform: rotate(-45deg) translateY(-7px);

    }

    @media (max-width: 768px) {
      display: flex;
    }
  }
  .burger.open {
    gap: 3px;
  }
}
</style>
