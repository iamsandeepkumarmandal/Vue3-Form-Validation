<template>
  <div class="form-group">
    <label class="mb-1">{{ label }}</label>
    <select
      class="form-select"
      :class="{ 'is-invalid': errors.length >= 1, 'is-valid': isValidData }"
      :placeholder="label"
      @change="changeHandler"
      v-bind="$attrs"
      :value="$attrs.modelValue"
    >
      <option value="">Please Select</option>
      <option
        v-for="(option, index) in options"
        :key="label + index"
        :value="option"
      >
        {{ option }}
      </option>
    </select>
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
  name: "BaseSelect",
  props: {
    label: {
      type: String,
      default: null,
    },
    options: {
      type: Array,
      default: () => [],
    },
    // preselectedValue: {
    //   type: String,
    //   default: null,
    // },
    errors: {
      type: Array,
      default: () => [],
    },
    isValidData: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selectedValue: "",
    };
  },
  methods: {
    changeHandler(e: Event) {
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
