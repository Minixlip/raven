# 🛒 Raven E-Commerce Web Application Documentation

## 📁 Project Structure Overview

```
├── app/
│   ├── shop/
│   │   ├── [productName]/page.tsx      # Dynamic route for individual product pages
│   │   ├── layout.tsx                 # Shop layout component
│   │   └── page.tsx                   # Main shop page
│   ├── login/page.tsx                 # Login page
│   ├── register/page.tsx              # Register page
│   ├── profile/page.tsx               # User profile page
│   ├── contact/page.tsx               # Contact form/page
├── components/
│   ├── shop/
│   │   ├── AllItemDisplay.tsx         # Displays all products
│   │   ├── CategoryNavbar.tsx         # Category filter bar
│   │   └── ItemDisplay.tsx            # Single product display component
│   ├── Navigation/                    # Navbar, footer, etc.
│   └── Misc/                          # Cards, chatbot, journal UI, etc.
├── context/
│   ├── AuthContext.tsx                # Authentication context
│   └── CartContext.tsx                # Shopping cart context
├── hooks/
│   ├── useAuthContext.tsx             # Custom auth hook
│   ├── useLogin.tsx                   # Login hook
│   ├── useLogout.tsx                  # Logout hook
│   └── useSignup.tsx                  # Signup hook
├── public/                            # Static assets
├── globals.css                        # Global CSS
├── next.config.js                     # Next.js configuration
├── .env.local                         # Environment variables
```

---

## 🚀 Setup Instructions

### Prerequisites

- Node.js v18+
- npm or yarn
- Vercel CLI (for deployment)

### Local Setup

```bash
# Clone repository
git clone https://github.com/Minixlip/raven.git
cd raven

# Install dependencies
npm install

# Create .env.local file with necessary variables
cp .env.example .env.local

# Start development server
npm run dev
```

### Environment Variables (`.env.local`)

```
NEXT_PUBLIC_API_BASE=http://localhost:4000/api
```

### Build for Production

```bash
npm run build
npm start
```

### Deploying to Vercel

```bash
vercel login
vercel --prod
```

Ensure case sensitivity is preserved in component imports when deploying.

---

## 🧪 API Endpoints (Backend Required)

Assumes a backend (e.g., Express.js) running on `http://localhost:4000`

### 🔎 Get Single Product

**POST** `/api/shop/product`

- **Body**:

```json
{
  "nameOfClothing": "Product Name"
}
```

- **Response**:

```json
{
  "_id": "...",
  "name": "...",
  "price": 25.99,
  "image": "url",
  ...
}
```

---

---

## ⚙️ Additional Configuration

### Absolute Imports

Configure `tsconfig.json` for aliasing:

```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/components/*": ["components/*"],
      "@/app/*": ["app/*"]
    }
  }
}
```

> 🔥 Note: Ensure that import statements match file names **exactly**, including **capitalization**.

---

## 🧩 Technologies Used

- Next.js 15
- React
- TypeScript
- Tailwind CSS (assumed styling)
- Framer Motion (for animations)
- Context API for global state
- Vercel for deployment

---

## 🐛 Troubleshooting

- **Component not found (Vercel):** Likely a casing issue on Linux-based deploys.
- **Fetch errors:** Ensure your backend is running and accessible.
- **Missing env vars:** Check `.env.local` is properly configured.

---

## ✅ To-Do / Improvement Suggestions

- Add loading spinners for better UX
- Error boundaries for API fetches
- Add full CRUD for products
- Use SWR or React Query for caching and smoother UI
- Setup backend API documentation (e.g., Swagger)

---

For questions or help, reach out to the dev team or check the GitHub Issues page.

---

_This document is auto-generated based on current app structure and history._
