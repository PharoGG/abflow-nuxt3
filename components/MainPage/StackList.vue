<template>
  <div class="stacklist">
    <div
      class="stacklist__row"
      v-for="(stack, index) in stacks"
      :key="index"
    >
      <span class="tag tag--direction">{{ stack.direction }}</span>
      <span
        class="tag"
        v-for="(tech, i) in stack.technologies"
        :key="i"
      >
        {{ tech }}
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  stacks: {
    direction: string
    technologies: string[]
  }[]
}>()
</script>

<style scoped lang="scss">
.stacklist {
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (max-width: 480px) {
    gap: 12px;
  }

  &__row {
    display: flex;
    flex-wrap: wrap;
    gap: 2px;
  }
}

.tag {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 8px;
  padding-top: 0;
  border: 1px solid #4143ED;
  color: #4143ED;
  border-radius: 10px;
  font-size: 20px;
  line-height: 28px;
  font-weight: 500;
  white-space: nowrap;

  &--direction {
    background-color: #4143ED;
    color: #FFFFFF;
    border: none;
  }

  @media (max-width: 480px) {
    padding: 4px 6px;
    font-size: 16px;
    line-height: 20px;
  }
}
</style>
