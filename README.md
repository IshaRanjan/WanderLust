# 🏡 WanderLust

A full-stack travel and accommodation listing platform inspired by Airbnb, built with Node.js, Express.js, MongoDB, and EJS.

Users can explore destinations, create and manage property listings, upload images, leave reviews, and discover stays through an interactive map.

## 🚀 Live Demo

### [🌐 Visit WanderLust](https://wanderlust-lost-in-beauty.onrender.com)

---

## ✨ Features

- 🔐 **User Authentication**
  - User registration and login
  - Session-based authentication with Passport.js
  - Protected routes and authorization

- 🏠 **Property Listings**
  - Create, view, edit, and delete listings
  - Listing descriptions, pricing, locations, and images
  - Owner-based listing authorization

- 🖼️ **Image Uploads**
  - Image uploads using Cloudinary
  - Cloud-hosted listing images
  - Image optimization for faster loading

- ⭐ **Reviews & Ratings**
  - Add reviews and ratings to listings
  - Delete reviews with authorization
  - Reviews linked to authenticated users

- 🗺️ **Interactive Maps**
  - Location-based map integration
  - Geocoding using OpenStreetMap/Nominatim
  - Listing locations displayed on maps

- 🔎 **Destination Search**
  - Search interface for discovering destinations

- 💰 **Tax Display**
  - Optional display of total price including taxes

- 📱 **Responsive UI**
  - Responsive layout for desktop, tablet, and mobile devices

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript
- EJS
- EJS-Mate
- Bootstrap
- Font Awesome

### Backend
- Node.js
- Express.js
- RESTful routing
- Passport.js
- Express Session

### Database
- MongoDB
- MongoDB Atlas
- Mongoose

### Cloud & APIs
- Cloudinary — image storage
- OpenStreetMap — map data
- Nominatim — location geocoding

### Deployment
- Render
- MongoDB Atlas
- Cloudinary

---

## 🏗️ Architecture

```text
                    ┌─────────────────┐
                    │      User       │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │   EJS / UI      │
                    │   Bootstrap     │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │    Express.js   │
                    │     Server      │
                    └───────┬─┬─┬─────┘
                            │ │ │
              ┌─────────────┘ │ └──────────────┐
              ▼               ▼                ▼
       ┌─────────────┐ ┌─────────────┐ ┌──────────────┐
       │ MongoDB     │ │ Cloudinary  │ │ OpenStreetMap│
       │ Atlas       │ │             │ │ / Nominatim  │
       └─────────────┘ └─────────────┘ └──────────────┘
