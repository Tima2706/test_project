<script setup lang="ts">
import type { AuthFormField, FormSubmitEvent } from "@nuxt/ui"
import * as z from "zod"
import {useAuthStore} from "~/stores/auth";

const router = useRouter()
const toast = useToast()
const { login } = useAuthStore()

const fields = ref<AuthFormField[]>([
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "Enter your email",
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    placeholder: "Enter your password",
  },
])

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})
type Schema = z.infer<typeof schema>

async function onSubmit(payload: FormSubmitEvent<Schema>) {
  try {
    const result = await login({
      email: payload.data.email,
      password: payload.data.password,
    })

    toast.add({
      title: "Success",
      description: `Welcome back, ${result.user.name}!`,
      color: "success",
    })
    router.push("/dashboard")

  } catch (error: any) {
    toast.add({
      title: "Login Failed",
      description:
          error?.data?.message ||
          error?.message ||
          "Invalid email or password",
      color: "error",
    })
  }
}
</script>

<template>
  <UAuthForm
      title="Sign in to your account"
      description="Welcome back! Please sign in to continue"
      :fields="fields"
      :schema="schema"
      submit-button="Sign In"
      class="max-w-xl mx-auto mt-20"
      @submit="onSubmit"
  />
</template>
