# Texnik Topshiriq (TZ) - Auth va Role-based Navigation

## Loyiha haqida
Nuxt 4 da SSR/SPA rejimda ishlovchi authentication va role-based navigation tizimi yaratish.

## Asosiy vazifalar

### 1. Authentication tizimini to'liq amalga oshirish

#### 1.2 Token boshqaruvi
- Access, Refresh tokenni Cookie da saqlash
- Token expires bo'lganda avtomatik yangilash
- API requestlarda avtomatik Authorization header qo'shish

### 2. Login, Register komponenti (Login.vue, Register.vue) ni tugallash

#### 2.1 Mavjud schema va validatsiyani to'ldirish
```javascript
const schema = z.object({
  email: z.string().email("Email noto'g'ri formatda"),
  password: z.string().min(6, "Parol kamida 6 ta belgidan iborat bo'lishi kerak")
});
```

#### 3 Register.vue da quyidagi maydonlar bo'lishi kerak:
- name (string, required)
- email (string, email, required)
- password (string, min 6, required)
- confirmPassword (string, must match password)

### 4. Middleware yaratish

#### 4.1 Auth middleware
- Foydalanuvchi login qilganligini tekshirish
- Login qilmagan bo'lsa auth sahifasiga yo'naltirish

#### 4.3 Role middleware
- Sahifaga kirish uchun kerakli rolni tekshirish

### 5. Role-based Navigation (Sidebar)

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

#### 5.1 Dynamic menu rendering
- Foydalanuvchi roliga qarab menularni filtrlash
- Menu permissions logic

### 6. API Endpoints (server/api/auth/)

Mavjud endpointlar yaxshilash kerak:

#### 6.1 /api/auth/login
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

#### 6.2 /api/auth/register
Request:
```json
{
  "name": "John Doe",
  "email": "john@example.com", 
  "password": "123456",
  "role": "user"
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

#### 6.3 /api/auth/me
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

#### 6.4 /api/auth/refresh
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

#### 7 Auth Initialization   
- Sahifa yuklanganda User ma'lumotlarini store ga yuklash

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
    },
    {
      "id": 4,
      "name": "Guest User", 
      "email": "guest@mail.com",
      "password": "123456",
      "role": "guest"
    }
  ]
}
```

### 9. SSR/SPA rejimini qo'llab-quvvatlash

### 10. Sahifalar va Route Protection


## Dasturlash me'yorlari

### 1. TypeScript
- Barcha fayllar TypeScript da yozilishi kerak
- Interface va type larni to'g'ri ishlatish
- Iloji bo'lsa Generic type lardan foydalanish

### 2. Vue 3 Composition API
- `<script setup>` sintaksisidan foydalanish
- Reactive variables (`ref`, `reactive`)
- Composables yaratish

### 3. Error Handling
- Try-catch bloklarini ishlatish
- User-friendly error messages
- Network error handling

## Kutilgan natija

1. ✅ To'liq ishlaydigan authentication tizimi
2. ✅ Role-based navigation menu
3. ✅ Token-based authorization
4. ✅ SSR va SPA rejimlarida ishlash
5. ✅ Error handling
6. ✅ TypeScript qo'llab-quvvatlash


**Muhim eslatma:** Topshiriq AIdan foydalanmagan holda qilinishi kerak. Rasmiy hujjatlar (docs) va open-source resurslardan foydalanish mumkin.
