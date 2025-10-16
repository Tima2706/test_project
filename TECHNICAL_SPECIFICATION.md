# Texnik Topshiriq (TZ) - Auth va Role-based Navigation

## Loyiha haqida

Nuxt 4 da SSR/SPA rejimda ishlovchi authentication va role-based navigation tizimi yaratish.

## Asosiy vazifalar

### 1. Authentication tizimini to'liq amalga oshirish

### 2. Token boshqaruvi

- Access, Refresh tokenni Cookie da saqlash
- Token expires bo'lganda avtomatik yangilash
- API requestlarda avtomatik Authorization header qo'shish

### 3. Login, Register komponenti (Login.vue, Register.vue) ni tugallash

### 4. Middleware yaratish

### 5. Role-based Navigation (Sidebar) & Route Protection

Menular role bo'yicha ko'rsatilishi kerak:

**Admin role:**

- Home ✅
- Inbox ✅
- Contacts ✅
- Settings ✅
  - General ✅
  - Members ✅
  - Notifications ✅

**Manager role:**

- Home ✅
- Inbox ✅
- Contacts ✅
- Settings ✅
  - General ✅
  - Notifications ✅

**User role:**

- Home ✅
- Inbox ✅
- Settings ✅
  - General ✅
  - Notifications ✅

### API Endpoints

#### Login - /api/auth/login

Request:

```json
{
  "email": "admin@mail.com",
  "password": "123456"
}
```

Response:

```json
{
  "accessToken": "eyJ...",
  "refreshToken": "eyJ...",
  "user": {
    "id": "1",
    "name": "Admin User",
    "email": "admin@mail.com",
    "role": "admin"
  }
}
```

#### Register /api/auth/register

Request:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
```

Response:

```json
{
  "accessToken": "eyJ...",
  "refreshToken": "eyJ...",
  "user": {
    "id": "7",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

#### Get me /api/auth/me

Headers:

```
Authorization: Bearer <access_token>
```

Response:

```json
{
  "user": {
    "id": "1",
    "name": "Admin User",
    "email": "admin@mail.com",
    "role": "admin"
  }
}
```

#### Refresh token /api/auth/refresh

Request:

```json
{
  "refreshToken": "eyJ..."
}
```

Response:

```json
{
  "accessToken": "eyJ..."
}
```

### 8. Test data (db.json)

Mavjud test userlar ✅:

```json
{
  "users": [
    {
      "id": 1,
      "name": "Admin User",
      "email": "admin@mail.com",
      "password": "123456",
      "role": "admin"
    },
    {
      "id": 2,
      "name": "Manager User",
      "email": "manager@mail.com",
      "password": "123456",
      "role": "manager"
    },
    {
      "id": 3,
      "name": "Regular User",
      "email": "user@mail.com",
      "password": "123456",
      "role": "user"
    }
  ]
}
```

## Dasturlash me'yorlari

### 1. TypeScript

- Barcha fayllar TypeScript da yozilishi kerak
- Interface va type larni to'g'ri ishlatish

### 2. Vue 3 Composition API

- `<script setup>` sintaksisidan foydalanish

### 3. Error Handling

- Try-catch bloklarini ishlatish
- Network error handling

## Kutilgan natija

1. ✅ To'liq ishlaydigan authentication tizimi
2. ✅ Role-based navigation menu
3. ✅ Token-based authorization
4. ✅ SSR va SPA rejimlarida ishlash
5. ✅ Error handling
6. ✅ TypeScript qo'llab-quvvatlash

**Muhim eslatma:** Topshiriq AIdan foydalanmagan holda qilinishi kerak. Rasmiy hujjatlar (docs) va open-source resurslardan foydalanish mumkin.
