<script setup lang="ts">
import type { AuthFormField, FormSubmitEvent } from "@nuxt/ui";
import * as z from "zod";

const router = useRouter();
const toast = useToast();

const fields = ref<AuthFormField[]>([
  {
    name: "name",
    type: "text",
    label: "Full Name",
    placeholder: "Enter your full name",
  },
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
  {
    name: "confirmPassword",
    type: "password",
    label: "Confirm Password",
    placeholder: "Confirm your password",
  },
]);

const schema = z.object();

type Schema = z.output<typeof schema>;

async function onSubmit(payload: FormSubmitEvent<Schema>) {
  // try {
  //   if (result.success) {
  //     toast.add({
  //       title: "Success",
  //       description: "Registration successful! Welcome!",
  //       color: "success",
  //     });
  //     router.push("/dashboard");
  //   } else {
  //     toast.add({
  //       title: "Registration Failed",
  //       description: result.error || "Registration failed",
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
    title="Create your account"
    description="Fill in the details below to create your new account"
    :fields="fields"
    :schema="schema"
    submit-button="Create Account"
    class="max-w-xl"
    @submit="onSubmit"
  />
</template>
