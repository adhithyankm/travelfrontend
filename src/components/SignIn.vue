<template>
  <Navbar />
  <div class="form-container">
    <div>
      <h2>Sign In</h2>
      <form @submit.prevent="handleSignIn">
        <label for="name">Name:</label>
        <InputText id="name" v-model="form.name" placeholder="Enter your name" />
        <small v-for="(error, index) in v$.form.name.$errors" :key="index">{{ error.$message }}</small>
        <label for="password">Password:</label>
        <InputText id="password" v-model="form.password" placeholder="Enter your Password" />
        <small v-for="(error, index) in v$.form.password.$errors" :key="index">{{ error.$message }}</small>
        <label for="email">Email:</label>
        <InputText id="email" v-model="form.email" placeholder="Enter your email" />
        <small v-for="(error, index) in v$.form.email.$errors" :key="index">{{ error.$message }}</small>
        <label for="age">Age:</label>
        <InputNumber id="age" v-model="form.age" mode="decimal" placeholder="Enter your age" class="p-inputtext-sm" />
        <small v-for="(error, index) in v$.form.age.$errors" :key="index">{{ error.$message }}</small>
        <label for="location">Location:</label>
        <InputText id="location" v-model="form.location" placeholder="Enter your location" />
        <small v-for="(error, index) in v$.form.location.$errors" :key="index">{{ error.$message }}</small>
        <button type="submit">Sign In</button>
      </form>
      <div class="back-button">
        <router-link to="/login"><button>Login</button></router-link>
      </div>
    </div>
  </div>
  <Footer />
</template>
<script setup>
import { reactive, computed } from "vue"
import { useVuelidate } from "@vuelidate/core"
import { required, email, numeric, helpers, alpha, minLength } from "@vuelidate/validators"
import { useToast } from "primevue/usetoast"
import { useRouter } from "vue-router"
import store from "../storage"
import Navbar from "./Navbar.vue"
import Footer from "./Footer.vue"
const toast = useToast()
const router = useRouter()
const form = reactive({
  name: "",
  password: "",
  email: "",
  age: null,
  location: "",
})
const rules = computed(() => ({
  form: {
    name: {
      required: helpers.withMessage("Name is required", required),
      alpha: helpers.withMessage("Name must be in letters", alpha),
    },
    password: {
      required: helpers.withMessage("Password is required", required),
      minLength: helpers.withMessage("Password must be at least 6 characters", minLength(6)),
    },
    email: {
      required: helpers.withMessage("Email is required", required),
      email: helpers.withMessage("Enter a valid email", email),
    },
    age: {
      required: helpers.withMessage("Age is required", required),
      numeric: helpers.withMessage("Age must be a number", numeric),
    },
    location: { required: helpers.withMessage("Location is required", required) },
  },
}))
const v$ = useVuelidate(rules, { form }, { $autoDirty: true })
const handleSignIn = async () => {
  const isValid = await v$.value.$validate()
  if (!isValid) {
    toast.add({
      severity: "error",
      summary: "Validation Failed",
      detail: "Please correct the errors before submitting.",
      life: 3000,
    })
    return
  }
  await store.dispatch("signIn", form)
  toast.add({
    severity: "success",
    summary: "Sign in successful",
    detail: `Welcome, ${form.name},Login with your Details`,
    life: 3000,
  })
  router.push("/login")
}
</script>