# MemoryStack

A modern full-stack social media application where users can create, upload, and share their memories through images and captions.

## 🚀 Features

* 📸 Upload images and create posts
* 📝 Add captions to memories
* ☁️ Cloud-based image storage
* 📂 View all shared posts
* 🔄 Real-time post fetching
* 🎨 Responsive user interface
* 🔗 RESTful API architecture

## 🛠️ Tech Stack

### Frontend

* React.js
* Axios
* CSS

### Backend

* Node.js
* Express.js
* Multer

### Database

* MongoDB
* Mongoose

### Cloud Storage

* Cloudinary

## 📁 Project Structure

```bash
MemoryStack/
│
├── Frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── App.jsx
│
├── Backend/
│   ├── src/
│   │   ├── models/
│   │   ├── service/
│   │   ├── routes/
│   │   └── app.js
│   │
│   └── server.js
│
└── README.md
```

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Shailesh-Paul/MemoryStack.git
cd MemoryStack
```

### Backend Setup

```bash
cd Backend
npm install
```

Create a `.env` file:

```env
PORT=3000

MONGODB_URI=your_mongodb_connection_string

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Start Backend:

```bash
npm run dev
```

### Frontend Setup

```bash
cd Frontend
npm install
npm run dev
```

## API Endpoints

### Create Post

```http
POST /create-post
```

Form Data:

```bash
image : File
caption : String
```

### Get All Posts

```http
GET /posts
```

## Screenshots

Add screenshots of:

* Home Page
* Create Post Page
* Posts Feed
* Upload Feature

## Future Enhancements

* User Authentication (JWT)
* Like & Comment System
* Follow/Unfollow Users
* User Profiles
* Infinite Scrolling
* Notifications
* Real-time Chat
* AI-based Memory Recommendations

## Learning Outcomes

This project demonstrates:

* REST API Development
* File Upload Handling with Multer
* Cloud Storage Integration
* MongoDB Data Modeling
* React Frontend Development
* Full Stack Application Architecture

## Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License.

---

Made with ❤️ by Shailesh Paul
