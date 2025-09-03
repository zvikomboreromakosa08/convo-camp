<h1 align="center">✨ Convo Camp with Chat & Video Calling ✨</h1>

![Demo App](/frontend/public/screenshot-for-readme.png)

Highlights:

💬 Real-Time Messaging: Supports threaded conversations, message reactions, and pinned messages for improved collaboration.
📂 File Sharing: Upload and share various file types, including images, PDFs, ZIP archives, and more.
📊 Polls: Create polls with multiple options, anonymous participation, suggestions, and comment support.
🔐 Authentication & User Management: Integrated with Clerk for secure authentication and role-based user management.
📨 Direct & Private Communication: Exchange direct messages and create private channels for focused discussions.
📹 Video Conferencing: Enables one-on-one and group video calls with screen sharing and recording functionality.
🎉 Call Reactions: Real-time reactions available during video calls to enhance interaction.
🔧 Background Processing: Powered by Inngest to manage asynchronous jobs and workflows.
🚨 Error Monitoring: Production-grade error tracking and monitoring integrated with Sentry.
🤖 AI Assistance: Code suggestions and improvements provided by CodeRabbit.
🚀 Deployment: Includes configuration for streamlined and free deployment.
🎯 Scalability: Built using Stream and other technologies designed for large-scale applications.
⏳ Additional Features: Includes many more capabilities to support robust collaboration.

---

## 🧪 .env Setup

### Backend (`/backend`)

```
PORT=5001
MONGO_URI=your_mongo_uri_here

NODE_ENV=development

CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
CLERK_SECRET_KEY=your_clerk_secret_key_here

STREAM_API_KEY=your_stream_api_key_here
STREAM_API_SECRET=your_stream_api_secret_here

SENTRY_DSN=your_sentry_dsn_here

INNGEST_EVENT_KEY=your_inngest_event_key_here
INNGEST_SIGNING_KEY=your_inngest_signing_key_here

CLIENT_URL=http://localhost:5173
```

### Frontend (`/frontend`)

```
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
VITE_STREAM_API_KEY=your_stream_api_key_here
VITE_SENTRY_DSN=your_sentry_dsn_here
VITE_API_BASE_URL=http://localhost:5001/api
```

---

## 🔧 Run the Backend

```bash
cd backend
npm install
npm run dev
```

## 💻 Run the Frontend

```bash
cd frontend
npm install
npm run dev
```