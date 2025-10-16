<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header with Login Button -->
    <header class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
          <div class="flex items-center">
            <h1 class="text-2xl font-bold text-primary">Auth Task</h1>
          </div>
          <div class="flex items-center space-x-4">
            <UButton to="/auth" variant="solid" color="primary">
              Login
            </UButton>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Hero Section -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">
          Nuxt 4 Authentication & Role-based Navigation
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          SSR/SPA rejimda ishlovchi authentication tizimi va role-based
          navigation. Test qilish uchun quyidagi user ma'lumotlaridan
          foydalaning.
        </p>
      </div>

      <!-- Test Users Section -->
      <div class="mb-16">
        <h3 class="text-2xl font-bold text-gray-900 mb-8 text-center">
          Test Foydalanuvchilar
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Admin User -->
          <UCard class="hover:shadow-lg transition-shadow">
            <template #header>
              <div class="flex items-center justify-between">
                <h4 class="text-lg font-semibold text-gray-900">Admin User</h4>
                <UBadge color="error" variant="soft">Admin</UBadge>
              </div>
            </template>
            <div class="space-y-2">
              <p class="text-sm text-gray-600">
                <strong>Email:</strong> admin@mail.com
              </p>
              <p class="text-sm text-gray-600">
                <strong>Password:</strong> 123456
              </p>
              <p class="text-xs text-gray-500 mt-2">
                Barcha sahifalarga kirish, foydalanuvchilarni boshqarish
              </p>
            </div>
          </UCard>

          <!-- Manager User -->
          <UCard class="hover:shadow-lg transition-shadow">
            <template #header>
              <div class="flex items-center justify-between">
                <h4 class="text-lg font-semibold text-gray-900">
                  Manager User
                </h4>
                <UBadge color="warning" variant="soft">Manager</UBadge>
              </div>
            </template>
            <div class="space-y-2">
              <p class="text-sm text-gray-600">
                <strong>Email:</strong> manager@mail.com
              </p>
              <p class="text-sm text-gray-600">
                <strong>Password:</strong> 123456
              </p>
              <p class="text-xs text-gray-500 mt-2">
                Jamoani boshqarish, kontaktlar, hisobotlar
              </p>
            </div>
          </UCard>

          <!-- Regular User -->
          <UCard class="hover:shadow-lg transition-shadow">
            <template #header>
              <div class="flex items-center justify-between">
                <h4 class="text-lg font-semibold text-gray-900">
                  Regular User
                </h4>
                <UBadge color="primary" variant="soft">User</UBadge>
              </div>
            </template>
            <div class="space-y-2">
              <p class="text-sm text-gray-600">
                <strong>Email:</strong> user@mail.com
              </p>
              <p class="text-sm text-gray-600">
                <strong>Password:</strong> 123456
              </p>
              <p class="text-xs text-gray-500 mt-2">
                Asosiy funksiyalar, shaxsiy profil
              </p>
            </div>
          </UCard>
        </div>
      </div>

      <!-- Features Section -->
      <div class="mb-16">
        <h3 class="text-2xl font-bold text-gray-900 mb-8 text-center">
          Loyiha Xususiyatlari
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="text-center">
            <div
              class="bg-primary-100 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center"
            >
              <UIcon
                name="i-lucide-shield-check"
                class="w-6 h-6 text-primary-600"
              />
            </div>
            <h4 class="text-lg font-semibold mb-2">JWT Authentication</h4>
            <p class="text-gray-600">
              Access va Refresh token bilan xavfsiz authentication
            </p>
          </div>

          <div class="text-center">
            <div
              class="bg-primary-100 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center"
            >
              <UIcon name="i-lucide-users" class="w-6 h-6 text-primary-600" />
            </div>
            <h4 class="text-lg font-semibold mb-2">Role-based Access</h4>
            <p class="text-gray-600">
              Foydalanuvchi rollariga qarab sahifalar va menular
            </p>
          </div>

          <div class="text-center">
            <div
              class="bg-primary-100 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center"
            >
              <UIcon name="i-lucide-monitor" class="w-6 h-6 text-primary-600" />
            </div>
            <h4 class="text-lg font-semibold mb-2">SSR/SPA Support</h4>
            <p class="text-gray-600">
              Server-side va Client-side rendering qo'llab-quvvatlash
            </p>
          </div>

          <div class="text-center">
            <div
              class="bg-primary-100 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center"
            >
              <UIcon
                name="i-lucide-refresh-cw"
                class="w-6 h-6 text-primary-600"
              />
            </div>
            <h4 class="text-lg font-semibold mb-2">Auto Token Refresh</h4>
            <p class="text-gray-600">
              Token muddati tugaganda avtomatik yangilanish
            </p>
          </div>

          <div class="text-center">
            <div
              class="bg-primary-100 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center"
            >
              <UIcon name="i-lucide-code" class="w-6 h-6 text-primary-600" />
            </div>
            <h4 class="text-lg font-semibold mb-2">TypeScript</h4>
            <p class="text-gray-600">
              Type-safe development bilan ishonchli kod
            </p>
          </div>
        </div>
      </div>

      <!-- API Endpoints Section -->
      <div class="mb-16">
        <h3 class="text-2xl font-bold text-gray-900 mb-8 text-center">
          API Endpoints
        </h3>
        <div class="bg-white rounded-lg shadow-sm border p-6">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 class="text-lg font-semibold mb-4 text-gray-900">
                Authentication
              </h4>
              <div class="space-y-3">
                <div class="flex items-center space-x-3">
                  <UBadge color="success" variant="solid" size="sm"
                    >POST</UBadge
                  >
                  <code class="text-sm bg-gray-100 px-2 py-1 rounded"
                    >/api/auth/login</code
                  >
                </div>
                <div class="flex items-center space-x-3">
                  <UBadge color="success" variant="solid" size="sm"
                    >POST</UBadge
                  >
                  <code class="text-sm bg-gray-100 px-2 py-1 rounded"
                    >/api/auth/register</code
                  >
                </div>
                <div class="flex items-center space-x-3">
                  <UBadge color="info" variant="solid" size="sm">GET</UBadge>
                  <code class="text-sm bg-gray-100 px-2 py-1 rounded"
                    >/api/auth/me</code
                  >
                </div>
                <div class="flex items-center space-x-3">
                  <UBadge color="success" variant="solid" size="sm"
                    >POST</UBadge
                  >
                  <code class="text-sm bg-gray-100 px-2 py-1 rounded"
                    >/api/auth/refresh</code
                  >
                </div>
              </div>
            </div>
            <div>
              <h4 class="text-lg font-semibold mb-4 text-gray-900">
                Role-based Routes
              </h4>
              <div class="space-y-2">
                <p class="text-sm text-gray-600">
                  <strong>Admin:</strong> Home, Inbox, Contacts, Settings
                  (General/Members/Notifications), Users Management, Reports
                </p>
                <p class="text-sm text-gray-600">
                  <strong>Manager:</strong> Home, Inbox, Contacts, Settings
                  (General/Notifications), Team Management
                </p>
                <p class="text-sm text-gray-600">
                  <strong>User:</strong> Home, Inbox, Settings
                  (General/Notifications), Profile
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- API Examples Section -->
      <div class="mb-16">
        <h3 class="text-2xl font-bold text-gray-900 mb-8 text-center">
          API Request/Response Misollari
        </h3>

        <!-- Login API Example -->
        <div class="mb-8">
          <h4 class="text-xl font-semibold text-gray-900 mb-4">1. Login API</h4>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- Request -->
            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UBadge color="success" variant="solid" size="sm"
                    >POST</UBadge
                  >
                  <span class="font-semibold">/api/auth/login</span>
                </div>
              </template>
              <div>
                <p class="text-sm font-semibold mb-2 text-gray-700">
                  Request Body:
                </p>
                <pre
                  class="bg-gray-50 p-3 rounded text-xs overflow-x-auto"
                ><code>{
  "email": "admin@mail.com",
  "password": "123456"
}</code></pre>
              </div>
            </UCard>

            <!-- Response -->
            <UCard>
              <template #header>
                <span class="font-semibold text-green-600">Response (200)</span>
              </template>
              <div>
                <p class="text-sm font-semibold mb-2 text-gray-700">
                  Success Response:
                </p>
                <pre
                  class="bg-gray-50 p-3 rounded text-xs overflow-x-auto"
                ><code>{
  "accessToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
  "refreshToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
  "user": {
    "id": 1,
    "name": "Admin User",
    "email": "admin@mail.com",
    "role": "admin"
  }
}</code></pre>
              </div>
            </UCard>
          </div>
        </div>

        <!-- Register API Example -->
        <div class="mb-8">
          <h4 class="text-xl font-semibold text-gray-900 mb-4">
            2. Register API
          </h4>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- Request -->
            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UBadge color="success" variant="solid" size="sm"
                    >POST</UBadge
                  >
                  <span class="font-semibold">/api/auth/register</span>
                </div>
              </template>
              <div>
                <p class="text-sm font-semibold mb-2 text-gray-700">
                  Request Body:
                </p>
                <pre
                  class="bg-gray-50 p-3 rounded text-xs overflow-x-auto"
                ><code>{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}</code></pre>
              </div>
            </UCard>

            <!-- Response -->
            <UCard>
              <template #header>
                <span class="font-semibold text-green-600">Response (201)</span>
              </template>
              <div>
                <p class="text-sm font-semibold mb-2 text-gray-700">
                  Success Response:
                </p>
                <pre
                  class="bg-gray-50 p-3 rounded text-xs overflow-x-auto"
                ><code>{
  "accessToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
  "refreshToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
  "user": {
    "id": 7,
    "name": "John Doe", 
    "email": "john@example.com",
    "role": "user"
  }
}</code></pre>
              </div>
            </UCard>
          </div>
        </div>

        <!-- Me API Example -->
        <div class="mb-8">
          <h4 class="text-xl font-semibold text-gray-900 mb-4">
            3. Get User Info (/me) API
          </h4>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- Request -->
            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UBadge color="info" variant="solid" size="sm">GET</UBadge>
                  <span class="font-semibold">/api/auth/me</span>
                </div>
              </template>
              <div>
                <p class="text-sm font-semibold mb-2 text-gray-700">Headers:</p>
                <pre
                  class="bg-gray-50 p-3 rounded text-xs overflow-x-auto"
                ><code>{
  "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..."
}</code></pre>
              </div>
            </UCard>

            <!-- Response -->
            <UCard>
              <template #header>
                <span class="font-semibold text-green-600">Response (200)</span>
              </template>
              <div>
                <p class="text-sm font-semibold mb-2 text-gray-700">
                  Success Response:
                </p>
                <pre
                  class="bg-gray-50 p-3 rounded text-xs overflow-x-auto"
                ><code>{
  "user": {
    "id": 1,
    "name": "Admin User",
    "email": "admin@mail.com",
    "role": "admin"
  }
}</code></pre>
              </div>
            </UCard>
          </div>
        </div>

        <!-- Refresh Token API Example -->
        <div class="mb-8">
          <h4 class="text-xl font-semibold text-gray-900 mb-4">
            4. Refresh Token API
          </h4>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- Request -->
            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UBadge color="success" variant="solid" size="sm"
                    >POST</UBadge
                  >
                  <span class="font-semibold">/api/auth/refresh</span>
                </div>
              </template>
              <div>
                <p class="text-sm font-semibold mb-2 text-gray-700">
                  Request Body:
                </p>
                <pre
                  class="bg-gray-50 p-3 rounded text-xs overflow-x-auto"
                ><code>{
  "refreshToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..."
}</code></pre>
              </div>
            </UCard>

            <!-- Response -->
            <UCard>
              <template #header>
                <span class="font-semibold text-green-600">Response (200)</span>
              </template>
              <div>
                <p class="text-sm font-semibold mb-2 text-gray-700">
                  Success Response:
                </p>
                <pre
                  class="bg-gray-50 p-3 rounded text-xs overflow-x-auto"
                ><code>{
  "accessToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..."
}</code></pre>
              </div>
            </UCard>
          </div>
        </div>

        <!-- Error Response Examples -->
        <div class="mb-8">
          <h4 class="text-xl font-semibold text-gray-900 mb-4">
            5. Error Response Misollari
          </h4>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- 401 Unauthorized -->
            <UCard>
              <template #header>
                <span class="font-semibold text-red-600">401 Unauthorized</span>
              </template>
              <div>
                <p class="text-sm font-semibold mb-2 text-gray-700">
                  Noto'g'ri credentials:
                </p>
                <pre
                  class="bg-red-50 p-3 rounded text-xs overflow-x-auto"
                ><code>{
  "statusCode": 401,
  "statusMessage": "Invalid credentials"
}</code></pre>
              </div>
            </UCard>

            <!-- 400 Bad Request -->
            <UCard>
              <template #header>
                <span class="font-semibold text-red-600">400 Bad Request</span>
              </template>
              <div>
                <p class="text-sm font-semibold mb-2 text-gray-700">
                  Majburiy maydon yo'q:
                </p>
                <pre
                  class="bg-red-50 p-3 rounded text-xs overflow-x-auto"
                ><code>{
  "statusCode": 400,
  "statusMessage": "Email and password are required"
}</code></pre>
              </div>
            </UCard>
          </div>
        </div>
      </div>

      <!-- Getting Started Section -->
      <div class="text-center">
        <h3 class="text-2xl font-bold text-gray-900 mb-4">Boshlash</h3>
        <p class="text-gray-600 mb-8 max-w-2xl mx-auto">
          Yuqoridagi test foydalanuvchi ma'lumotlaridan birini tanlab, tizimga
          kiring va rolga mos menu va sahifalarni ko'ring.
        </p>
        <UButton to="/auth" size="lg" variant="solid" color="primary">
          Tizimga Kirish
        </UButton>
      </div>
    </main>
  </div>
</template>
