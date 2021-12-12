<template>
  <div class="container">
    <h1 class="text-center mb-4">Form Validation</h1>
    <div class="row">
      <div class="col-8">
        <CreateEmployeeCard @formData="formData = $event" />
      </div>
      <div class="col-4">
        <div class="card create-employee">
          <div class="card-body">
            <p class="text-center">
              Here we are using Vue3 with TypeScript along with vuelidate for
              the validation
            </p>
            <pre class="mb-0">{{ formData }}</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CreateEmployeeCard from "@/components/CreateEmployee/CreateEmployeeCard.vue";

export default defineComponent({
  name: "CreateEmployee",
  components: {
    CreateEmployeeCard,
  },
  data() {
    return {
      formData: null,
    };
  },
});
</script>
