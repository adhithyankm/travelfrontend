<template>
  <Navbar />
  <div class="login-page">
    <div class="form-container">
      <div v-if="signinForm">
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
          <button type="submit" class="p-button main-button p-component" :disabled="loading">
            Sign In
          </button>
        </form>
        <p>Back to <button class="back-button" @click="toggleForm">Login</button></p>
      </div>

      <div v-if="loginForm">
        <h2>Login</h2>
        <form @submit.prevent="handleLogin">
          <label for="name">Name:</label>
          <InputText id="name" v-model="logForm.name" placeholder="Enter your name" />
          <small v-for="(error, index) in vv$.logForm.name.$errors" :key="index">{{ error.$message }}</small>
          <label for="password">Password:</label>
          <InputText id="password" v-model="logForm.password" placeholder="Enter your Password" />
          <small v-for="(error, index) in vv$.logForm.password.$errors" :key="index">{{ error.$message }}</small>
          <button class="main-button" type="submit" :disabled="loading">Login</button>
          <div class="card flex justify-center" v-if="loading">
            <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="8" fill="transparent"
              animationDuration=".5s" aria-label="Custom ProgressSpinner" />
          </div>
        </form>
        <p>Click to <button class="back-button" @click="toggleForm">Sign In</button></p>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import { reactive, computed, ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email, numeric, helpers, alpha, minLength } from "@vuelidate/validators";
import { useToast } from "primevue/usetoast";
import { useRouter } from "vue-router";
import store from "../storage";
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";

const loginForm = ref(true);
const signinForm = ref(false);
const toast = useToast();
const router = useRouter();
const loading = ref(false);

const form = reactive({
  name: "",
  password: "",
  email: "",
  age: null,
  location: "",
});

const logForm = reactive({
  name: "",
  password: "",
});

const toggleForm = () => {
  signinForm.value = !signinForm.value;
  loginForm.value = !loginForm.value;
};

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
}));

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
}));

const v$ = useVuelidate(rules, { form }, { $autoDirty: true });
const vv$ = useVuelidate(logRules, { logForm }, { $autoDirty: true });
const handleSignIn = async () => {
  loading.value = true;
  const isValid = await v$.value.$validate();
  if (!isValid) {
    toast.add({
      severity: "error",
      summary: "Validation Failed",
      detail: "Please correct the errors before submitting.",
      life: 3000,
    });
    loading.value = false;
    return;
  }
  await store.dispatch("signIn", form);
  toast.add({
    severity: "success",
    summary: "Sign in successful",
    detail: `Welcome, ${form.name}`,
    life: 3000,
  });
  loading.value = false;
  router.push("/");
};

const handleLogin = async () => {
  loading.value = true;
  const isValid = await vv$.value.$validate();
  if (!isValid) {
    toast.add({
      severity: "error",
      summary: "Validation Failed",
      detail: "Please fill in the required fields correctly.",
      life: 3000,
    });
    loading.value = false;
    return;
  }
  const isAuthenticated = await store.dispatch("login", logForm);
  if (!isAuthenticated) {
    toast.add({
      severity: "error",
      summary: "Login Failed",
      detail: "Invalid credentials. Please try again.",
      life: 3000,
    });
    loading.value = false;
    return;
  }
  toast.add({
    severity: "success",
    summary: "Login successful",
    detail: `Welcome back, ${logForm.name}`,
    life: 3000,
  });

  loading.value = false;
  router.push("/");
};
</script>
