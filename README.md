੥🌍 Treat Holidays – Travel Website Home Page

A responsive home page for a travel and tour booking platform built with **React** and **Material UI (MUI)**. It showcases curated destinations, top-selling packages, booking advantages, and testimonials — all styled and responsive for desktop, tablet, and mobile.

---
🚀 Features

✅ Hero Section** with overlay and CTA

🗺️ Popular Destinations** with dynamic loading states

🧭 Top Selling Packages** with view details button

🏆 Booking Advantages** in a grid layout

🧑‍💬 Customer Testimonials** with avatars

📱 Fully Responsive Design**

---

📁 Folder Structure

```
src/
├── api/
│   └── homeApi.js         # Mock/fetch functions for destinations & packages
├── components/
│   ├── Destinations/
│   │   └── DestinationList.jsx
│   ├── TourPackages/
│   │   └── TopSellingPackages.jsx
│   ├── Advantages/
│   │   └── Advantage.jsx
│   └── Footer/
│       └── Testimonials.jsx
├── pages/
│   └── HomePage.jsx       # Main landing page
├── App.js
└── index.js
```

---
 🧩 Technologies Used

* [React.js](https://reactjs.org/)
* [Material UI](https://mui.com/)
* React Hooks (`useEffect`, `useState`)
* Responsive design via MUI Grid system and `useMediaQuery`

---

 🛠️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/treat-holidays-home.git
   cd treat-holidays-home
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the app**

   ```bash
   npm start
   ```

4. **Visit the app**
   Navigate to `http://localhost:3000` in your browser.

---

 🧪 Mock API Hooks (Example)

If using mock data for testing:

```js
// homeApi.js
export const useDestinations = () => ({
  isLoading: false,
  data: [
    { _id: '1', name: 'Goa', imageUrl: 'goa.jpg', price: 5000 },
    // ...other destinations
  ]
});

export const useTopSellingPackages = () => ({
  isLoading: false,
  data: [
    { _id: '1', name: 'Kerala Backwaters', imageUrl: 'kerala.jpg' },
    // ...other packages
  ]
});
```

---

🖥️ Responsive Behavior

| Screen Size | Layout                                    |
| ----------- | ----------------------------------------- |
| Desktop     | 3 cards per row                           |
| Tablet      | 2 cards per row                           |
| Mobile      | 1 card per row, adjusted font and padding |




BACKEND 

```
# Tourist Holidays Backend API

This backend API serves travel destinations and top-selling tour packages data for the Treat Holidays website. Built with Node.js, Express, and MongoDB.

---

## Features

- REST API using Express.js
- MongoDB data storage with Mongoose schemas
- Endpoints for fetching travel destinations and top-selling packages
- CORS enabled for cross-origin requests
- Environment configuration via `.env`

---

## Technologies

- Node.js
- Express.js
- MongoDB & Mongoose
- dotenv
- cors

---

## Setup & Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/yourusername/treat-holidays-backend.git
   cd treat-holidays-backend
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create `.env` file with your MongoDB URI:

   ```
   MONGO_URI=your_mongodb_connection_string
   ```

4. Start the server:

   ```bash
   npm start
   ```

Server will run on `http://localhost:5000`.

---

## API Endpoints

* **GET /api/destinations**
  Returns a list of travel destinations with fields: `_id`, `name`, `imageUrl`, `price`, `details`.

* **GET /api/packages/top-selling**
  Returns top 6 selling packages with fields: `_id`, `name`, `imageUrl`, `details`.

---

## Example Response

```json
[
  {
    "_id": "60f8d6b0b2b6a245f4a1b234",
    "name": "Goa",
    "imageUrl": "https://example.com/goa.jpg",
    "price": 15000,
    "details": "Beautiful beach destination"
  }
]
```

---

## Project Structure

```
/backend
  ├── models/
  │    ├── Model.Destination.js
  │    └── Model.Top-selling.js
  ├── routes/
  │    ├── Routes.Destinations.js
  │    └── Routes.Top-selling.js
  ├── server.js
  └── .env
```