# Glassofy India — Luxury Architectural Glass & Smart LED Mirrors

Official web application for **Glassofy India** (Vadodara, Gujarat), premier manufacturers of bespoke Smart LED Mirrors with a 2-Year Warranty, Frameless Shower Enclosures, Acoustic Office Partitions, Architectural Aluminium Systems, and Designer Glass Nameplates.

---

## 🌟 Key Highlights

- **Luxury Aesthetics**: Dark navy & warm gold architectural palette with glassmorphism, fluid micro-interactions, and responsive design.
- **Smart Showcase**: Clean, authentic hero showcase featuring verified Glassofy craftsmanship from Vadodara workshops.
- **Complete Gujarat Projects Portfolio**: Showcase of real commercial and residential installations across **Vasna-Bhayli, Ahmedabad, Bharuch, Palej, Surat, and Vadodara** with photos and on-site video walkthroughs.
- **Full Catalog Gallery**: High-resolution gallery powered by `yet-another-react-lightbox` with filtering across LED Mirrors, Shower Cubicles, Partitions, Nameplates, and Railings.
- **Instant Inquiry Engine**: Direct WhatsApp quick links & integrated Nodemailer email API with branded HTML notifications to both the admin team and customer.
- **Vercel Serverless Ready**: Configured with `vercel.json` SPA rewrites and serverless function `/api/send-email`.

---

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite 5, Tailwind CSS
- **Routing**: React Router v6 (SPA with full client-side routing)
- **Icons & Animation**: Lucide React, Framer Motion
- **Lightbox**: `yet-another-react-lightbox`
- **Backend / Email API**: Node.js, Express, Nodemailer (Gmail SMTP)
- **Deployment**: Vercel (Frontend + Serverless API Functions)

---

## 🚀 Local Development Setup

### 1. Clone the Repository
```bash
git clone https://github.com/admintechofay-a11y/GLASSOFY-INDIA.git
cd GLASSOFY-INDIA
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in the root directory:
```env
# Gmail SMTP Configuration for Nodemailer
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=admin.techofay@gmail.com
SMTP_PASS=vatlfruxzkezdszy

# Notification Email Recipients (comma-separated)
NOTIFICATION_RECIPIENTS=info.glassofyindia@gmail.com,admin.techofay@gmail.com

# Server Port (for express server)
PORT=5000
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 5. Run Full Node.js Production Server Locally
```bash
npm run build
npm start
```
Starts Express server on [http://localhost:5000](http://localhost:5000).

---

## ⚡ Deployment to Vercel (Step-by-Step)

### Step 1: Import Project to Vercel
1. Log in to [Vercel](https://vercel.com).
2. Click **"Add New..."** → **"Project"**.
3. Select your GitHub repository: `admintechofay-a11y/GLASSOFY-INDIA` and click **Import**.

### Step 2: Configure Project Settings
- **Framework Preset**: `Vite` (automatically detected)
- **Root Directory**: `./` (default)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Step 3: Add Environment Variables
Under the **Environment Variables** section in Vercel, add each of the following keys:

| Key | Value | Description |
|---|---|---|
| `SMTP_HOST` | `smtp.gmail.com` | Gmail SMTP host |
| `SMTP_PORT` | `465` | SSL SMTP port |
| `SMTP_SECURE` | `true` | Secure SSL connection |
| `SMTP_USER` | `admin.techofay@gmail.com` | Sender Gmail address |
| `SMTP_PASS` | `vatlfruxzkezdszy` | Gmail 16-character App Password |
| `NOTIFICATION_RECIPIENTS` | `info.glassofyindia@gmail.com,admin.techofay@gmail.com` | Lead notification emails |

### Step 4: Click Deploy
Click **Deploy**. Vercel will build the frontend assets into `dist/` and automatically expose the `/api/send-email` serverless function.

---

## 🏢 Experience Centers & Showrooms

- **Showroom 1**: A-1, Beside Fatehgunj Police Station, Old Channi Road, Vadodara – 390002
- **Showroom 2 (M&M Glass)**: GF 12, Dar Al Ashraf, Police Chowki, Phulwadi Char Rasta, Opp. Chhani Bridge, TP 13, Chhani Jakatnaka, Vadodara – 390002
- **Direct Phone**: +91 94125 97560 / +91 9359339000
- **Email**: info.glassofyindia@gmail.com

---

© 2026 Glassofy India. All Rights Reserved.
