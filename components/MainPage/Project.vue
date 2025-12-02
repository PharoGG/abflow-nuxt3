<template>
  <div class="project" @click="goToCase">
    <div class="project__cell">
      <h4 class="project__company">{{ company }}</h4>
      <p class="project__description">{{ description }}</p>
    </div>
    <div class="project__cell">
      <p class="project__text">{{ text }}</p>
    </div>
    <div class="project__cell">
      <div class="project__direction">{{ direction }}</div>
      <div class="project__link">
        <img src="/public/images/icons/link.svg" alt="icon"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()


const props = defineProps<{
  company: string
  description: string
  text: string
  direction: string
  slug?: string | null
}>()

const goToCase = () => {
  if (props.slug) {
    router.push(`/cases/${props.slug}`)
  } else {
    router.push('/404')
  }
}
</script>

<style scoped lang="scss">
.project {
  background-color: #FFFFFF;
  padding: 24px;
  border-radius: 16px;
  border: #C2C3F4 1px solid;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;
  gap: 16px;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
  // transition: border 0.3s ease;

  // &:hover {
  //   border: #4143ED 1px solid;
  // }

  @media (max-width: 480px) {
    padding: 16px;
    gap: 12px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }

  &__cell {
    display: flex;
    flex-direction: column;
    gap: 4px;

    &:last-child {
      width: 100%;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin-top: auto;

      img {
        width: 30px;
        height: 30px;
        display: flex;
        margin: auto;
        object-fit: cover;

        @media (max-width: 480px) {
          width: 26px;
          height: 26px
        }
      }
    }
  }

  // &__link {
  //   width: 30px;
  //   padding: 8px 0;
  //   border: #4143ED 1px solid;
  //   border-radius: 10px;

  //   @media (max-width: 480px) {
  //     width: 24px;
  //     padding: 5px 0;
  //     border-radius: 8px;
  //   }
  // }

  &__company {
    font-size: 20px;
    line-height: 26px;
    font-weight: 700;
    margin: 0;
    color: #000331;

    @media (max-width: 480px) {
      font-size: 16px;
      line-height: 20px;
    }
  }

  &__description {
    margin: 0;
    font-size: 14px;
    line-height: 18px;
    font-weight: 500;
    color: #000331;
    opacity: 40%;
    display: inline-block;

    @media (max-width: 480px) {
      font-size: 12px;
      line-height: 16px;
    }
  }

  &__text {
    margin: 0;
    font-size: 16px;
    line-height: 22px;
    font-weight: 500;
    color: #000331;

    @media (max-width: 480px) {
      font-size: 14px;
      line-height: 20px;
    }
  }

  &__direction {
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
</style>
