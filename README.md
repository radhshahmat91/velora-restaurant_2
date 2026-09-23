# Velora Restaurant — MongoDB Full-Stack Edition

Aesthetic restaurant ordering and reservation platform built with React/Vite + Express + MongoDB/Mongoose.

## Stack
React, Vite, Express.js, MongoDB Atlas, Mongoose and REST API.

## Setup
1. Install Node.js.
2. From the project root run:
```bash
npm install
npm run install:all
```
3. Create a MongoDB Atlas cluster and database user.
4. Copy `server/.env.example` to `server/.env` and add your Atlas connection string.
5. Copy `client/.env.example` to `client/.env`.
6. Seed the database:
```bash
npm run seed
```
7. Start both apps:
```bash
npm run dev
```

Frontend: `http://localhost:5173`  
API: `http://localhost:5000`  
Health check: `http://localhost:5000/api/health`

## Server environment
```env
PORT=5000
MONGODB_URI=mongodb+srv://USERNAME:PASSWORD@CLUSTER.mongodb.net/velora?retryWrites=true&w=majority
CLIENT_URL=http://localhost:5173
ADMIN_KEY=use-a-long-random-secret
```

## Frontend environment
```env
VITE_API_URL=http://localhost:5000/api
```

## Real MongoDB features
- Menu is loaded from MongoDB.
- Checkout creates a real order document.
- Customer records are created/updated from orders.
- Reservations are persisted.
- Party/event requests are persisted.
- Admin API supports orders, reservations, events, customers, statistics and menu CRUD.
- Admin API requires `x-admin-key`.

Collections: `foods`, `orders`, `customers`, `reservations`, `events`.

## Admin API
Send `x-admin-key: YOUR_ADMIN_KEY`.

`GET /api/stats`  
`GET /api/orders`  
`PATCH /api/orders/:id`  
`GET /api/reservations`  
`PATCH /api/reservations/:id`  
`GET /api/events`  
`GET /api/customers`  
`POST /api/menu`  
`PATCH /api/menu/:id`  
`DELETE /api/menu/:id`

## Important about payments
The checkout records Cash on Delivery or Online as the selected method, but it does **not** pretend that an online payment succeeded. Before taking real online payments, connect a payment provider such as SSLCommerz, Stripe, or bKash and verify payments with server-side webhooks.

The visual admin dashboard contains some original demo presentation data; the database/API layer is real and ready to be wired into those dashboard panels.
