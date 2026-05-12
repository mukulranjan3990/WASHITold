# WAshIT 🌊 

**The Futuristic AI-Powered Laundry Ecosystem**

WAshIT is a premium, high-converting SaaS + Marketplace platform that connects customers with laundry businesses using cutting-edge AI and seamless logistics. Designed to rival the UI/UX standards of global tech giants like Zomato, Uber, Stripe, and Apple, WAshIT transforms laundry from a chore into a luxury experience.

![WAshIT Platform Overview](https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=2070&auto=format&fit=crop)

---

## 🌟 Key Features

### 1. **Ultra-Premium UI/UX**
- **Magnetic Interactions**: Custom cursor mechanics and physics-based button interactions.
- **Glassmorphism**: Beautiful, translucent layers mimicking the aesthetic of iOS.
- **Cinematic Parallax**: 3D spatial scrolling and deep Framer Motion animations.

### 2. **Multi-Role Portals**
- **Customer Dashboard**: Real-time Uber-style tracking maps, active order timelines, and wallet management (WAshIT Cash).
- **Partner Dashboard (SaaS)**: B2B interface for laundry businesses to manage inventory, staff, and revenue analytics.

### 3. **Smart Booking Engine**
- Seamless multi-step booking flow.
- AI-driven dynamic pricing based on fabric type and urgency.
- Real-time address and timeslot scheduling.

### 4. **AI Integration (Conceptualized)**
- **Fabric Recognition API**: Automated categorization of garments (Delicate vs. Daily Wear).
- **Stain Analysis**: Smart detection for pre-treatment routing.
- **Logistics AI**: Dynamic rider routing to ensure 15-minute pickup windows.

---

## 🚀 Tech Stack

- **Frontend Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Deployment**: GitHub Pages (Static Export)

---

## 💻 Running Locally

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mukulranjan3990/WASHIT.git
   cd WASHIT
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **View the app:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗️ Architecture & Branching Strategy

- `main`: The production-ready branch. Code pushed here triggers an automated GitHub Actions deployment to GitHub Pages.
- `feature`: The active development branch. All new UI/UX updates, component additions, and backend integrations are built and tested here before merging.

---

## 🌐 Deployment Details

The site is configured as a Static Export (`output: 'export'`) and uses a specialized GitHub Actions pipeline (`deploy.yml`) to deploy the `/out` directory directly to GitHub Pages. 

*Note: The `next.config.mjs` utilizes `trailingSlash: true` to prevent 404 routing errors on static hosts when hard-refreshing dynamic paths like `/dashboard`.*

---

*Designed and engineered for a billion-dollar market scale.* 🚀
