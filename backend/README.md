# NexCall 🎥

NexCall is a full-stack, real-time video calling platform built with **WebRTC** for peer-to-peer video/audio streaming and **Socket.IO** for signaling and live chat. It supports instant meeting rooms, screen sharing, in-call chat, and per-user meeting history — all backed by a MERN-style stack (MongoDB, Express, React, Node.js).

> Inspired by tools like Google Meet, built as a learning/portfolio project to demonstrate WebRTC signaling, real-time communication, and full-stack auth.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Clone the Repo](#clone-the-repo)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Environment Variables](#environment-variables)
- [API Reference](#api-reference)
  - [Register](#1-register-user)
  - [Login](#2-login-user)
  - [Add Meeting to History](#3-add-meeting-to-history)
  - [Get Meeting History](#4-get-meeting-history)
- [Real-Time Events (Socket.IO)](#real-time-events-socketio)
- [WebRTC Call Flow](#webrtc-call-flow)
- [Database Models](#database-models)
- [Deployment](#deployment)
- [Security Notes](#security-notes)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- 🔐 **Authentication** — Register/login with hashed passwords (bcrypt) and token-based sessions.
- 🎦 **Peer-to-peer video/audio calls** — Powered by native `RTCPeerConnection` (WebRTC), no third-party media server.
- 🖥️ **Screen sharing** — Toggle between camera and screen share mid-call.
- 💬 **Live in-call chat** — Real-time text messaging scoped to each meeting room.
- 🕓 **Meeting history** — Every joined meeting is logged per user and retrievable later.
- 🚪 **Instant rooms** — Join any call by sharing a room/meeting code, no pre-scheduling needed.
- 🌐 **Guest access** — Users can join a call via code without necessarily registering (auth used mainly for history tracking).

---

## Tech Stack

**Frontend**

- React 18 (Create React App)
- React Router v6
- Material UI (MUI) + Emotion for styling
- Axios for HTTP requests
- Socket.IO Client
- Native WebRTC APIs (`RTCPeerConnection`, `getUserMedia`, `getDisplayMedia`)

**Backend**

- Node.js + Express 4
- Socket.IO (signaling server)
- MongoDB + Mongoose (ODM)
- bcrypt (password hashing)
- Node's built-in `crypto` module (token generation)
- http-status (clean status codes)

**Deployment (as configured in the code)**

- Backend → Render
- Frontend → Netlify

---

## Architecture

```
┌────────────────┐        REST API (Axios)        ┌───────────────────┐
│                │ ──────────────────────────────▶ │                   │
│  React Client  │  /api/v1/users/*                │   Express Server  │
│  (Netlify)     │ ◀────────────────────────────── │   (Render)        │
│                │                                  │                   │
└───────┬────────┘                                  └─────────┬─────────┘
        │                                                     │
        │        Socket.IO (signaling + chat)                │
        │ ◀─────────────────────────────────────────────────▶│
        │                                                     │
        │                                             ┌───────▼────────┐
        │                                             │    MongoDB     │
        │                                             │  (Users /      │
        │       Direct P2P media stream               │   Meetings)    │
        │◀═══════════════════════════════════════════▶│                │
   (Peer A)         WebRTC (audio/video/screen)   (Peer B)
```

**How a call connects:**

1. Both clients connect to the Socket.IO server and emit `join-call` with a room ID.
2. The server tracks which socket IDs belong to which room (in-memory `connections` map) and broadcasts `user-joined` to everyone in that room.
3. Each client creates an `RTCPeerConnection`, generates SDP offers/answers and ICE candidates, and exchanges them with peers **through the Socket.IO server** via a generic `signal` event (the server just relays it — it never touches the actual audio/video).
4. Once signaling completes, video/audio (and optionally screen share) flow **directly between browsers** (peer-to-peer), not through the server.
5. Chat messages are also relayed through Socket.IO (`chat-message` event) and cached in memory per room so late joiners get the message history for that session.

---

## Project Structure

```
NexCall-main/
├── backend/
│   ├── src/
│   │   ├── app.js                     # Express app entry point, DB connection, server bootstrap
│   │   ├── controllers/
│   │   │   ├── socketManager.js       # Socket.IO connection + signaling + chat logic
│   │   │   └── user.controller.js     # Auth + meeting history logic
│   │   ├── models/
│   │   │   ├── user.model.js          # Mongoose User schema
│   │   │   └── meeting.model.js       # Mongoose Meeting schema
│   │   └── routes/
│   │       └── users.routes.js        # /api/v1/users/* route definitions
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── contexts/
    │   │   └── AuthContext.jsx        # Auth state + API calls (register/login/history)
    │   ├── pages/
    │   │   ├── landing.jsx            # Landing/marketing page
    │   │   ├── authentication.jsx     # Login/Register UI
    │   │   ├── home.jsx               # Dashboard — join/create a meeting
    │   │   ├── history.jsx            # Past meeting list
    │   │   └── VideoMeet.jsx          # Core video call room (WebRTC + Socket.IO)
    │   ├── utils/
    │   │   └── withAuth.jsx           # HOC to protect routes
    │   ├── environment.js             # Backend base URL (dev/prod switch)
    │   └── App.js                     # Routes
    └── package.json
```

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

| Tool    | Version (recommended)                                                           |
| ------- | ------------------------------------------------------------------------------- |
| Node.js | v18+                                                                            |
| npm     | v9+                                                                             |
| MongoDB | Local instance or a free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster |
| Git     | Any recent version                                                              |

### Clone the Repo

```bash
git clone https://github.com/samratujjwal/NexCall.git
cd NexCall-main
```

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/` (see [Environment Variables](#environment-variables) below), then run:

```bash
# Development (auto-restarts with nodemon)
npm run dev

# Production
npm start
```

By default the server listens on **`http://localhost:8000`**. You should see:

```
MONGO Connected DB HOst: <your-cluster-host>
LISTENIN ON PORT 8000
```

### Frontend Setup

Open a second terminal:

```bash
cd frontend
npm install
npm start
```

The React dev server will start on **`http://localhost:3000`**.

> ⚠️ The frontend currently points to a hardcoded backend URL in `src/environment.js` (`IS_PROD` flag switches between the deployed Render URL and `localhost:8000`). For local development, set `IS_PROD = false` so the app talks to your local backend. See the [Security Notes](#security-notes) section for a recommended `.env`-based fix.

Once both servers are running, visit **`http://localhost:3000`** in your browser.

---

## Environment Variables

The current codebase has the MongoDB connection string **hardcoded directly in `backend/src/app.js`**, which is not safe for a public repository (see [Security Notes](#security-notes)). The recommended setup below decouples secrets into a `.env` file.

**`backend/.env`**

```env
PORT=8000
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/<db-name>
```

Then update `app.js` to use it:

```js
import dotenv from "dotenv";
dotenv.config();
// ...
await mongoose.connect(process.env.MONGO_URI);
app.set("port", process.env.PORT || 8000);
```

(Install with `npm install dotenv` if you adopt this pattern.)

**`frontend/.env`**

```env
REACT_APP_BACKEND_URL=http://localhost:8000
```

And in `src/environment.js`:

```js
const server = process.env.REACT_APP_BACKEND_URL || "http://localhost:8000";
export default server;
```

---

## API Reference

Base URL: `http://localhost:8000/api/v1/users` (or your deployed backend URL)

All requests/responses use `application/json`.

### 1. Register User

Creates a new user account with a bcrypt-hashed password.

**Endpoint**

```
POST /api/v1/users/register
```

**Request Body**

```json
{
  "name": "Ujjwal Maurya",
  "username": "ujjwal45",
  "password": "SuperSecret123"
}
```

**Success Response** — `201 Created`

```json
{
  "message": "User Registered"
}
```

**Error Response** — `302 Found` (user already exists)

```json
{
  "message": "User already exists"
}
```

**Error Response** — `500 Internal Server Error`

```json
{
  "message": "Something went wrong <error details>"
}
```

---

### 2. Login User

Authenticates a user and returns a session token (a random hex string, stored on the user document and used for subsequent authenticated requests).

**Endpoint**

```
POST /api/v1/users/login
```

**Request Body**

```json
{
  "username": "ujjwal45",
  "password": "SuperSecret123"
}
```

**Success Response** — `200 OK`

```json
{
  "token": "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2"
}
```

**Error Response** — `404 Not Found`

```json
{
  "message": "User Not Found"
}
```

**Error Response** — `401 Unauthorized`

```json
{
  "message": "Invalid Username or password"
}
```

> The frontend stores this token in `localStorage` (`localStorage.setItem("token", ...)`) and sends it as a query param / body field on subsequent requests instead of an `Authorization` header. See [Security Notes](#security-notes) for suggested hardening (JWT + auth middleware).

---

### 3. Add Meeting to History

Logs a meeting code against the authenticated user, called automatically when a user joins a room.

**Endpoint**

```
POST /api/v1/users/add_to_activity
```

**Request Body**

```json
{
  "token": "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2",
  "meeting_code": "abcxyz-123-meet"
}
```

**Success Response** — `201 Created`

```json
{
  "message": "Added code to history"
}
```

**Error Response** — `200 OK` (with error message body — see [Security Notes](#security-notes) on error-handling consistency)

```json
{
  "message": "Something went wrong <error details>"
}
```

---

### 4. Get Meeting History

Retrieves every meeting a given user has joined, with fields `user_id`, `meetingCode`, and `date` per record.

**Endpoint**

```
GET /api/v1/users/get_all_activity?token=<user_token>
```

**Query Parameters**

| Param   | Type   | Required | Description                              |
| ------- | ------ | -------- | ---------------------------------------- |
| `token` | string | ✅       | The session token returned from `/login` |

**Success Response** — `200 OK`

```json
[
  {
    "_id": "665f1c2e8a1b2c3d4e5f6789",
    "user_id": "ujjwal45",
    "meetingCode": "abcxyz-123-meet",
    "date": "2026-06-20T10:15:30.000Z",
    "__v": 0
  },
  {
    "_id": "665f1c9e8a1b2c3d4e5f6790",
    "user_id": "ujjwal45",
    "meetingCode": "team-standup-01",
    "date": "2026-06-21T09:00:00.000Z",
    "__v": 0
  }
]
```

---

## Real-Time Events (Socket.IO)

The signaling server lives in `backend/src/controllers/socketManager.js`. All video/chat coordination happens over these events:

| Event          | Direction                 | Payload                          | Purpose                                                                                                                                        |
| -------------- | ------------------------- | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `join-call`    | Client → Server           | `path` (room/meeting code)       | Client joins a call room. Server adds the socket to an in-memory room map.                                                                     |
| `user-joined`  | Server → Clients          | `(socketId, allSocketIdsInRoom)` | Broadcast to everyone in the room when a new peer joins, so existing peers can initiate WebRTC offers.                                         |
| `signal`       | Client ↔ Server ↔ Client  | `(toSocketId, message)`          | Generic relay for WebRTC SDP offers/answers and ICE candidates. The server doesn't inspect `message`, just forwards it.                        |
| `chat-message` | Client → Server → Clients | `(data, sender)`                 | Broadcasts a chat message to every socket in the sender's current room; also cached in memory so late joiners receive the room's chat history. |
| `user-left`    | Server → Clients          | `socketId`                       | Broadcast when a peer disconnects, so remaining clients can clean up that peer's video tile.                                                   |
| `disconnect`   | Client → Server           | —                                | Built-in Socket.IO event; server removes the socket from its room and notifies remaining peers.                                                |

**Example client-side usage (simplified from `VideoMeet.jsx`):**

```js
socket.emit("join-call", window.location.href);

socket.on("user-joined", (id, clients) => {
  // create a new RTCPeerConnection for each new client
});

socket.on("signal", (fromId, message) => {
  // apply remote SDP / ICE candidate to the matching RTCPeerConnection
});

socket.emit(
  "signal",
  targetSocketId,
  JSON.stringify({ sdp: peerConnection.localDescription }),
);

socket.emit("chat-message", "Hello everyone!", username);
socket.on("chat-message", (data, sender, socketIdSender) => {
  // append to chat UI
});
```

> ⚠️ Note: CORS for Socket.IO is currently hardcoded to `https://nexcall45.netlify.app` in `socketManager.js`. If you deploy your own frontend, update the `origin` field (ideally via an environment variable) or local development will be blocked by CORS.

---

## WebRTC Call Flow

1. **Media capture** — `navigator.mediaDevices.getUserMedia({ video, audio })` grabs the local camera/mic stream (screen share uses `getDisplayMedia`).
2. **Peer connection setup** — On `user-joined`, a new `RTCPeerConnection` is created per remote peer using a public STUN server config (`peerConfigConnections` in `VideoMeet.jsx`).
3. **Offer/Answer exchange** — SDP offers and answers are created locally and sent to the other peer via the `signal` socket event (the backend just relays them).
4. **ICE candidates** — As candidates are discovered locally, they're also sent via `signal` so both browsers can find the best network path.
5. **Stream attachment** — Once negotiation completes, the remote `MediaStream` is attached to a `<video>` element for that peer.
6. **Cleanup** — On `user-left` / `disconnect`, the corresponding `RTCPeerConnection` is closed and its video tile removed.

---

## Database Models

**User** (`backend/src/models/user.model.js`)

| Field      | Type   | Notes                           |
| ---------- | ------ | ------------------------------- |
| `name`     | String | required                        |
| `username` | String | required, unique                |
| `password` | String | required, stored as bcrypt hash |
| `token`    | String | set on successful login         |

**Meeting** (`backend/src/models/meeting.model.js`)

| Field         | Type   | Notes                       |
| ------------- | ------ | --------------------------- |
| `user_id`     | String | the joining user's username |
| `meetingCode` | String | required                    |
| `date`        | Date   | defaults to `Date.now`      |

---

## Deployment

As configured in the codebase:

- **Backend** → deployed on [Render](https://render.com) (`https://nexcall-wz90.onrender.com` referenced in `frontend/src/environment.js`)
- **Frontend** → deployed on [Netlify](https://netlify.com) (`https://nexcall45.netlify.app` referenced in the Socket.IO CORS config), with a `_redirects` file already included for SPA routing.

To deploy your own copy:

1. Push `backend/` to Render (or Railway/Fly.io) as a Node web service. Set `MONGO_URI` and `PORT` as environment variables there.
2. Push `frontend/` to Netlify/Vercel. Set the build command to `npm run build` and publish directory to `build/`.
3. Update `frontend/src/environment.js` (or its `.env` equivalent) to point at your deployed backend URL.
4. Update the Socket.IO `cors.origin` in `socketManager.js` to your deployed frontend URL.

---

## Security Notes

A few things worth fixing before treating this as production-ready, since this is a public GitHub repo:

1. **🔴 Rotate your database credentials.** The MongoDB Atlas connection string (including username/password) is currently hardcoded in `backend/src/app.js`. Since this file is committed to a public repository, that password should be considered compromised — rotate it in Atlas and switch to the `.env` approach described above immediately.
2. **Move all secrets to environment variables** — DB URI, port, CORS origin — instead of hardcoding them in source.
3. **Consider real auth tokens (JWT)** — the current token is a random hex string with no expiry, stored in `localStorage`, and passed as a request body/query param rather than an `Authorization: Bearer <token>` header. JWTs with expiry + refresh would be more robust.
4. **Consistent error status codes** — some catch blocks in `user.controller.js` return `200 OK` (default) with an error message body instead of a proper `4xx`/`5xx` status, which makes client-side error handling harder.
5. **CORS origin should be configurable**, not hardcoded to a single Netlify URL, so local development and other deployments aren't blocked.

---

## Roadmap

Ideas for extending this project:

- [ ] JWT-based auth with refresh tokens
- [ ] Recording/transcription support
- [ ] Waiting room / host approval before joining
- [ ] Mute/remove participant (host controls)
- [ ] Persist chat history to MongoDB (currently only in-memory, lost on server restart)
- [ ] TURN server config for reliable connectivity across restrictive NATs/firewalls

---

## Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## License

This project currently has no explicit license file. Add a `LICENSE` (MIT is a common choice for portfolio projects) if you intend for others to freely use/modify this code.

---

## Author

**Ujjwal Maurya**

- GitHub: [@samratujjwal](https://github.com/samratujjwal)
- LinkedIn: [ujjwalmaurya45](https://linkedin.com/in/ujjwalmaurya45)
