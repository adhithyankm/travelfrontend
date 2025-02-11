<template>
  <Navbar />
  <div class="login-page">
    <div class="form-container">     
        <h2>Login</h2>
        <form @submit.prevent="handleLogin">
          <label for="name">Name:</label>
          <InputText id="name" v-model="logForm.name" placeholder="Enter your name" />
          <small v-for="(error, index) in vv$.logForm.name.$errors" :key="index">{{ error.$message }}</small>
          <label for="password">Password:</label>
          <InputText id="password" v-model="logForm.password" placeholder="Enter your Password" />
          <small v-for="(error, index) in vv$.logForm.password.$errors" :key="index">{{ error.$message }}</small>
          <button type="submit">Login</button>
        </form>
        <div class="back-button">
          <router-link to="/signin"> <button>Sign In</button></router-link>
        </div>
    </div>
  </div>
  <Footer />
</template>
<script setup>
import { reactive, computed } from "vue"
import { useVuelidate } from "@vuelidate/core"
import { required, helpers, alpha, minLength } from "@vuelidate/validators"
import { useToast } from "primevue/usetoast"
import { useRouter } from "vue-router"
import store from "../storage"
import Navbar from "./Navbar.vue"
import Footer from "./Footer.vue"
const toast = useToast()
const router = useRouter()
const logForm = reactive({
  name: "",
  password: "",
})
const logRules = computed(() => ({
  logForm: {
    name: {
      required: helpers.withMessage("Name is required", required),
      alpha: helpers.withMessage("Name must be in letters", alpha),
    },
    password: {
      required: helpers.withMessage("Password is required", required),
      minLength: helpers.withMessage("Password must be at least 6 characters", minLength(6)),
    },
  },
}))
const vv$ = useVuelidate(logRules, { logForm }, { $autoDirty: true })
const handleLogin = async () => {
  const isValid = await vv$.value.$validate()
  if (!isValid) {
    toast.add({
      severity: "error",
      summary: "Validation Failed",
      detail: "Please fill in the required fields correctly.",
      life: 3000,
    })
    return
  }
  const isAuthenticated = await store.dispatch("login", logForm)
  if (!isAuthenticated) {
    toast.add({
      severity: "error",
      summary: "Login Failed",
      detail: "Invalid credentials. Please try again.",
      life: 3000,
    })
    return
  }
  toast.add({
    severity: "success",
    summary: "Login successful",
    detail: `Welcome back, ${logForm.name}`,
    life: 3000,
  })
  router.push("/")
}
</script>
