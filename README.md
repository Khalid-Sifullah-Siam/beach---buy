# Beach & Buy - Summer eCommerce Platform

A modern summer eCommerce platform where users can explore and purchase seasonal products like sunglasses, summer outfits, skincare, beach accessories, and more. Users can browse products, view details, and place orders after authentication.

## Purpose

**Beach & Buy** is a full-stack eCommerce web application built for summer shopping enthusiasts. The platform provides a seamless experience for users to discover trendy summer products, manage their profiles, and securely authenticate using email/password or Google OAuth. The project demonstrates modern web development practices with Next.js, authentication, database integration, and responsive UI design.

## Live URL

[Coming Soon](#) - Deploy using Vercel or Netlify

## Key Features

### Product Management

- Browse all summer products with responsive grid layout
- View detailed product information including images, pricing, ratings, and stock status
- Related products suggestions based on categories
- Product categories: Accessories, Electronics, Clothing, Footwear

### Authentication System

- Email/Password registration and login with validation
- Google OAuth integration for social login
- Protected routes for authenticated users only
- Session management with Better Auth
- Profile update functionality (name & profile picture)

### User Profile

- View personal information (name, email, profile photo)
- Update profile information with real-time preview
- Secure session management

### Modern UI/UX

- Responsive design (mobile, tablet, desktop)
- Slide-up mobile menu with smooth animations
- Toast notifications for success/error messages
- Lottie animations on auth pages
- DaisyUI components with Tailwind CSS
- Hero section with auto-sliding carousel
- Popular products showcase
- Summer care tips section
- Top brands display

### Shopping Experience

- Product listing with sorting options
- Quantity selector on product details
- Add to cart functionality with toast feedback
- Related products recommendations

### Information Pages

- Privacy Policy
- Terms of Service
- Returns Policy

## NPM Packages Used

### Core Framework

| Package   | Version | Purpose                        |
| --------- | ------- | ------------------------------ |
| next      | latest  | React framework for production |
| react     | latest  | UI library                     |
| react-dom | latest  | DOM rendering                  |

### Authentication

| Package                    | Version | Purpose                         |
| -------------------------- | ------- | ------------------------------- |
| better-auth                | latest  | Authentication library          |
| @better-auth/mongo-adapter | latest  | MongoDB adapter for Better Auth |
| mongodb                    | latest  | MongoDB driver                  |

### UI & Styling

| Package        | Version | Purpose                        |
| -------------- | ------- | ------------------------------ |
| daisyui        | latest  | Tailwind CSS component library |
| tailwindcss    | latest  | Utility-first CSS framework    |
| lottie-react   | latest  | Lottie animation support       |
| @herooui/react | latest  | HeroUI components              |

### Database

| Package | Version | Purpose               |
| ------- | ------- | --------------------- |
| mongodb | latest  | NoSQL database driver |
