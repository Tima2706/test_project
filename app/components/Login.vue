<script setup lang="ts">
import type { AuthFormField, FormSubmitEvent } from "@nuxt/ui";
import * as z from "zod";

const router = useRouter();
const toast = useToast();

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
]);

const schema = z.object();

type Schema = z.output<typeof schema>;

async function onSubmit(payload: FormSubmitEvent<Schema>) {
  // try {
  //   if (result.success) {
  //     toast.add({
  //       title: "Success",
  //       description: "Login successful!",
  //       color: "success",
  //     });
  //     router.push("/dashboard");
  //   } else {
  //     toast.add({
  //       title: "Login Failed",
  //       description: result.error || "Invalid credentials",
  //       color: "error",
  //     });
  //   }
  // } catch (error) {
  //   toast.add({
  //     title: "Error",
  //     description: "An unexpected error occurred",
  //     color: "error",
  //   });
  // }
}
</script>

<template>
  <UAuthForm
    title="Sign in to your account"
    description="Welcome back! Please sign in to continue"
    :fields="fields"
    :schema="schema"
    submit-button="Sign In"
    class="max-w-xl"
    @submit="onSubmit"
  />
</template>
