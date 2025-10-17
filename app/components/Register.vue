<script setup lang="ts">
import type { AuthFormField, FormSubmitEvent } from "@nuxt/ui";
import * as z from "zod";
import { useAuthStore } from "~/stores/auth";

const router = useRouter();
const toast = useToast();
const auth = useAuthStore();

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

const schema = z
    .object({
      name: z.string().min(2, "Name must be at least 2 characters long"),
      email: z.string().email("Invalid email address"),
      password: z.string().min(6, "Password must be at least 6 characters long"),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });

type Schema = z.output<typeof schema>;

async function onSubmit({ data }: FormSubmitEvent<Schema>) {
  try {
    await auth.register({
      name: data.name,
      email: data.email,
      password: data.password,
    });

    toast.add({
      title: "Success",
      description: "Registration successful! Welcome aboard 🎉",
      color: "success",
    });

    router.push("/dashboard");
  } catch (error: any) {
    toast.add({
      title: "Registration Failed",
      description: error?.data?.message || error?.message || "Something went wrong",
      color: "error",
    });
  }
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
