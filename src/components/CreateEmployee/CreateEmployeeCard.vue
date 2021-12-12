<template>
  <div class="card create-employee">
    <div class="card-body">
      <BaseInput
        label="First Name"
        v-model="v$.formData.firstname.$model"
        :errors="v$.formData.firstname.$errors"
        :isValidData="!v$.formData.firstname.$invalid"
      />
      <BaseInput
        label="Last Name"
        v-model="v$.formData.lastname.$model"
        :errors="v$.formData.lastname.$errors"
        :isValidData="!v$.formData.lastname.$invalid"
      />
      <BaseInput
        label="Email"
        v-model="v$.formData.email.$model"
        :errors="v$.formData.email.$errors"
        :isValidData="!v$.formData.email.$invalid"
        type="email"
      />
      <BaseSelect
        label="Sex"
        v-model="v$.formData.sex.$model"
        :errors="v$.formData.sex.$errors"
        :isValidData="!v$.formData.sex.$invalid"
        :options="sex"
        class="text-capitalize"
      />
      <div class="text-center">
        <button
          type="button"
          :disabled="v$.$invalid"
          class="btn btn-primary btn-lg"
          @click="clickHandler"
        >
          Create Employee
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";

import BaseInput from "@/components/Forms/BaseInput.vue";
import BaseSelect from "@/components/Forms/BaseSelect.vue";

export default defineComponent({
  name: "CreateEmployeeCard",
  components: {
    BaseInput,
    BaseSelect,
  },
  setup() {
    return { v$: useVuelidate() };
  },
  watch: {
    formData: {
      handler(value) {
        this.$emit("formData", value);
      },
      deep: true,
      immediate: true,
    },
  },
  data() {
    return {
      sex: ["male", "female"],
      formData: {
        firstname: "",
        lastname: "",
        email: "",
        sex: "",
      },
    };
  },
  validations() {
    return {
      formData: {
        firstname: { required, minLength: minLength(4) },
        lastname: { required, minLength: minLength(4) },
        email: { required, email },
        sex: { required },
      },
    };
  },
  methods: {
    clickHandler() {
      if (this.v$.$invalid) {
        return;
      }
      console.log(this.formData);
    },
  },
});
</script>
