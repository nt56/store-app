# 🛒 Store Project – Full Stack E-commerce Platform

## 🎯 Project Objective

The primary objective of the **Store Project** is to build a modern, scalable, and fully functional full-stack e-commerce web application using **Next.js** and **TypeScript**. The platform aims to provide a seamless and secure online shopping experience for users, with features like product browsing, search, reviews, favorites, cart management, and secure Stripe-based checkout. Additionally, it empowers admins with tools to manage product inventory and monitor user interactions efficiently. This project also serves as a real-world demonstration of advanced web development practices, authentication workflows, UI design with Shadcn UI, and integration with third-party services like Stripe and NextAuth.

## 📌 Overview

The **Store Project** is a fully functional, full-stack e-commerce web application built using **Next.js** and **TypeScript**. It allows users to explore, search, favorite, review, and purchase products, while giving admins full control over product management. The platform supports **Google and GitHub authentication**, **Stripe payments**, and offers a clean, responsive design with **light/dark theme support**.

---

## 🌟 Features

### 👤 User Roles

- **Public Users**: Can view homepage and product listings.
- **Authenticated Users**: Can favorite/share products, add to cart, write reviews, make payments.
- **Admin Users**: Can add, update, and delete products.

### 🧩 Core Functionality

- 🔍 **Search Bar**: Real-time product search.
- ❤️ **Favorites**: Add/remove favorites (for logged-in users).
- 🛒 **Cart System**: Add/remove items from the cart.
- 💬 **Reviews & Ratings**: Authenticated users can rate and review products.
- 💳 **Stripe Integration**: Secure payments and order placement.
- 🌗 **Light/Dark Theme Toggle**: Accessible theme switcher for all users.
- 🔐 **Authentication**: Google and GitHub login/signup using NextAuth.js.

---

## 🛠️ Tech Stack & Libraries

### ⚙️ Frontend & Full Stack

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Shadcn UI**
- **NextAuth.js** for authentication
- **Stripe** for payments
- **Lucide React** for icons

### 📦 Backend

- **Next.js API Routes or Route Handlers**
- **Database**: PostgreSQL or MongoDB
- **ORM**: Prisma (recommended for TypeScript integration)

### ☁️ Deployment

- **Vercel** (Frontend + Serverless API)
- **Stripe Dashboard** for payment configs
- **PlanetScale / MongoDB Atlas** for database

---

## 🧭 Project Approach

1. **Project Structure Setup** with TypeScript and App Router (`src/app`)
2. **Auth System** using NextAuth with Google/GitHub providers
3. **Role-Based Access Control** (Public, Authenticated, Admin)
4. **Admin Dashboard**: Product CRUD functionality
5. **UI Design** using Shadcn UI with Tailwind
6. **Product Features**: Ratings, Reviews, Cart, Favorites
7. **Stripe Payment Integration** with success & cancel routes
8. **Search Functionality** using debounce and filters
9. **Theme Toggle** with persistent state using local storage
10. **Final Testing & Deployment** on Vercel

---

## 🎯 Target Audience

- **Developers** looking for a production-ready e-commerce app template
- **Small Businesses** that want a customizable product showcase + shopping site
- **Interview/Portfolio Projects** for showcasing full-stack Next.js skills