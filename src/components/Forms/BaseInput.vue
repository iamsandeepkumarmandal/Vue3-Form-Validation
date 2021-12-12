<template>
  <div class="form-group">
    <label class="mb-1">{{ label }}</label>
    <input
      type="text"
      class="form-control"
      :class="{ 'is-invalid': errors.length >= 1, 'is-valid': isValidData }"
      :placeholder="label"
      @input="inputHandler"
      v-bind="$attrs"
      :value="$attrs.modelValue"
    />
    <div class="invalid-feedback mb-2">
      <span v-for="(error, index) in errors" :key="`error-${label}-${index}`">
        {{ error.$message }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseInput",
  props: {
    label: {
      type: String,
      default: null,
    },
    errors: {
      type: Array,
      default: () => [],
    },
    isValidData: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    inputHandler(e: Event) {
      const target = e.target as HTMLInputElement;
      this.$emit("update:modelValue", target.value);
    },
  },
});
</script>

<style lang="scss">
.invalid-feedback {
  display: block;
  font-size: 12px;
  height: 18px;
}
</style>
