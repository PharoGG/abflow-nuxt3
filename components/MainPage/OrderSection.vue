<template>
  <section class="order" ref="orderSection">
    <div class="order__content">
      <div class="order__content--text">
        <h2>Свяжитесь с нами</h2>
        <p>Давайте сделаем первый шаг<br/> к новому проекту вместе</p>
      </div>
      <div class="order__content--form">
        <form @submit.prevent="handleSubmit">
          <input type="text" placeholder="Название компании" v-model="form.company" required />
          <input type="text" placeholder="ФИО контактного лица" v-model="form.name" required />
          <input type="email" placeholder="Электронная почта" v-model="form.email" required />
          <textarea placeholder="Комментарий (необязательно)" v-model="form.comment"></textarea>
          <p>Торжественно клянёмся, что соблюдаем политики и заботимся о персональных данных</p>
          <button type="submit">Заказать проект</button>
        </form>
      </div>
    </div>
  </section>
</template>


<script lang="ts" setup>
import { reactive } from 'vue'

const orderSection = ref<HTMLElement | null>(null)

const form = reactive({
  company: '',
  name: '',
  email: '',
  comment: ''
})

function handleSubmit() {
  console.log('Отправлено:', form)
}

defineExpose({ orderSection })
</script>

<style scoped lang="scss">
.order {
  background-color: #000331;
  background-image: url('/images/orderimg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: #000331BF;
    z-index: 1;
  }

  &__content {
    max-width: 1200px;
    width: 100%;
    padding: 80px 120px;
    text-align: left;
    display: flex;
    flex-direction: row;
    gap: 32px;
    z-index: 2;

    @media (max-width: 1024px) {
      padding: 40px 48px;
    }

    @media (max-width: 768px) {
      flex-direction: column;
    }

    @media (max-width: 480px) {
      padding: 24px 16px;
      gap: 24px;
    }

    &--text {
      display: flex;
      flex-direction: column;
      margin-right: auto;

      h2 {
        font-size: 40px;
        line-height: 48px;
        font-weight: 700;
        margin-block-start: 0;
        margin-block-end: 0;
        color: #FFFFFF;

        @media (max-width: 480px) {
          font-size: 24px;
          line-height: 30px;
        }
      }
      p {
        color: #FFFFFF;
        font-size: 24px;
        line-height: 30px;
        font-weight: 500;

        @media (max-width: 480px) {
          font-size: 16px;
          line-height: 20px;
        }
      }
    }

    &--form {
      width: 100%;
      max-width: 624px;

      @media (max-width: 768px) {
        max-width: 672px;
      }

      form {
        display: flex;
        flex-direction: column;
        gap: 16px;

        input,
        textarea {
          background: #ffffff00;
          border: 1px solid #FFFFFF;
          border-radius: 8px;
          padding: 16px;
          font-size: 16px;
          line-height: 22px;
          font-weight: 500;
          color: #FFFFFF;

          @media (max-width: 480px) {
            font-size: 14px;
            line-height: 20px;
          }
        }

        textarea {
          min-height: 100px;
          resize: vertical;
        }

        ::placeholder {
          color: #FFFFFF;
          font-size: 16px;
          line-height: 22px;
          font-weight: 500;

          @media (max-width: 480px) {
            font-size: 14px;
            line-height: 20px;
          }
        }

        button {
          width: 228px;
          height: 52px;
          background-color: #4143ED;
          color: #ffffff;
          border: none;
          padding: 12px 32px;
          font-size: 20px;
          font-weight: 700;
          line-height: 28px;
          border-radius: 16px;
          cursor: pointer;
          transition: background-color 0.3s ease;

          &:hover {
            background-color: #2e30b9;
          }

          @media (max-width: 768px) {
            width: 100%;
          }

          @media (max-width: 480px) {
            height: 44px;
            font-size: 16px;
            line-height: 20px;
          }
        }
        p {
          color: #FFFFFF;
          font-size: 14px;
          line-height: 18px;
          font-weight: 500;

          @media (max-width: 480px) {
            font-size: 12px;
            line-height: 16px;
          }
        }
      }
    }
  }
}
</style>