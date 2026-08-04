# wanderlust
WanderLust is a full-stack property listing web application inspired by Airbnb that allows users to discover, create, manage, and review vacation rental listings.

## Features

- User Authentication (Sign Up, Login, Logout)
- Authorization for Listings & Reviews
- Create, Edit and Delete Listings
- Image Upload using Cloudinary
- Interactive Maps using Mapbox
- Reviews & Ratings
- Search Listings
- Category Filters
- Session Management
- Flash Messages
- Responsive UI
- MVC Architecture
- RESTful Routing
- MongoDB Database Integration

---

## Tech Stack

### Frontend
- HTML5
- CSS3
- Bootstrap
- JavaScript
- EJS

### Backend
- Node.js
- Express.js
- Express Router
- Express Session
- Cookie Parser
- Passport.js
- Connect Flash

### Database
- MongoDB
- Mongoose

### Cloud Services
- Cloudinary
- Mapbox Geocoding API

---

## Project Structure

```
.
├── controllers/
├── models/
├── routes/
├── middleware.js
├── utils/
├── views/
├── public/
├── app.js
├── cloudConfig.js
└── package.json
```

---

## Key Functionalities

### Authentication
- Secure Registration
- Login & Logout
- Password Hashing
- Session-based Authentication

### Listings
- Create Listings
- Edit Listings
- Delete Listings
- Image Upload
- Ownership Validation

### Reviews
- Add Reviews
- Delete Reviews
- Rating System
- Authorization

### Maps
- Convert Addresses to Coordinates
- Display Interactive Maps
- Custom Map Markers

---

## Installation

```bash
git clone https://github.com/IshaRanjan/WanderLust.git

cd WanderLust

npm install

npm start
```

---

## Environment Variables

Create a `.env` file.

```
ATLASDB_URL=
CLOUD_NAME=
CLOUD_API_KEY=
CLOUD_API_SECRET=
MAP_TOKEN=
SECRET=
```

---

## Future Improvements

- Booking & Reservation System
- Payment Integration
- Wishlist
- User Profile Dashboard
- Availability Calendar
- Email Notifications

---

## Author

Isha Ranjan
