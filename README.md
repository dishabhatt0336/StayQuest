# StayQuest 🏡

StayQuest is a full-stack Airbnb-inspired web application where users can explore, create, edit, and review property listings.  
The platform allows travelers to discover unique stays while hosts can manage their own listings with images, maps, authentication, and reviews.

## 🚀 Live Demo

🔗 Add your deployed Render link here

---

# ✨ Features

- 🔐 User Authentication & Authorization
- 🏠 Create, Edit & Delete Listings
- 📸 Image Upload with Cloudinary
- 🗺️ Interactive Maps using Mapbox
- ⭐ Reviews & Ratings System
- 🔎 Search Functionality
- 📱 Responsive UI with Bootstrap
- ⚡ Flash Messages & Session Handling
- ☁️ MongoDB Atlas Database Integration

---

# 🛠️ Tech Stack

## Frontend
- HTML5
- CSS3
- Bootstrap 5
- JavaScript
- EJS Templates

## Backend
- Node.js
- Express.js

## Database
- MongoDB
- MongoDB Atlas

## Authentication & Security
- Passport.js
- Express Session
- Cookie Parser
- Connect-Flash

## Cloud & APIs
- Cloudinary (Image Storage)
- Mapbox (Maps & Geocoding)

---

# 📦 NPM Packages Used

```bash
express
mongoose
ejs
ejs-mate
method-override
passport
passport-local
passport-local-mongoose
express-session
connect-flash
cookie-parser
multer
cloudinary
multer-storage-cloudinary
dotenv
mapbox-sdk
joi

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/stayquest.git
cd stayquest
2️⃣ Install dependencies
npm install
3️⃣ Create a .env file

Add the following environment variables:

ATLASDB_URL=your_mongodb_atlas_url

SECRET=your_session_secret

CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_secret

MAP_TOKEN=your_mapbox_token
4️⃣ Run the project
node app.js

or

nodemon app.js
🌍 Deployment

The project is deployed using:

Render (Backend Hosting)
MongoDB Atlas (Database)
Cloudinary (Media Storage)
📂 Project Structure
StayQuest/
│
├── models/
├── routes/
├── controllers/
├── views/
├── public/
├── utils/
├── app.js
├── cloudConfig.js
├── middleware.js
└── package.json
🎯 Future Improvements
❤️ Wishlist Feature
💳 Online Booking & Payments
📅 Availability Calendar
🔔 Notifications
📱 Mobile App Version
👩‍💻 Author

Developed by Disha Bhatt ✨

GitHub: https://github.com/dishabhatt0336

📜 License

This project is for learning and educational purposes.
