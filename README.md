
Stayaara - MERN Real Estate App 

Real Estate App built on the MERN (MongoDB, Express, React, Node.js) stack. Whether you're looking to explore available properties for rent or sale, or you want to manage your own listings, our app has got you covered!


## Features
Browse Public Listings
- Discover a variety of rental and sale properties in your preferred locations.

User Friendly Sign Up
- Create your account effortlessly using your email and password.

Sign Up with Google
-  For your convenience, the application supports Google account authentication.

Listing Management
- Once you're logged in, take control of your property listings!
- Create new listings, update existing ones, or remove listings that are no longer relevant.

View Your Listings
- Easily keep track of all your property listings in one place.

## Tech Stack

**Client:** React, ReactTypeScript, Redux Toolkit, Material UI, Formik

**API Handlers:** RTK Query

**Server:** Node, Express

**Database:** Mongo DB

**Cloudinary:** Image Uploading
**Email:** Authentication









## Screenshots
<img width="1919" height="985" alt="g" src="https://github.com/user-attachments/assets/7c53a382-7fcb-4d2a-90c5-1b1c508a93e9" />

<img width="1847" height="983" alt="image" src="https://github.com/user-attachments/assets/a42fe376-8262-4cbc-b94d-64a103fa3d16" />



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

### Backend ###

```bash
 NODE_ENV:  development
 PORT:      5000
 DATABASE:  Insert your MongoDB database connection link
```

### Frontend ###

```bash
 REACT_APP_API_URL:  'http://127.0.0.1:5000/api/v1/'
```

```bash
 REACT_APP_FIREBASE_API_KEY:  'Enter your Firebase key'
```


## API Reference

### ROUTES

- Endpoint: `http://127.0.0.1:5000/api/v1/users`
- Endpoint: `http://127.0.0.1:5000/api/v1/listings`

### USER API

#### Signup
- **Method:** `POST`
- **Endpoint:** `/signup`

#### Login
- **Method:** `POST`
- **Endpoint:** `/login`

#### Get User
- **Method:** `GET`
- **Endpoint:** `/:id`

#### Update User
- **Method:** `PUT`
- **Endpoint:** `/update/:id`

#### Delete User
- **Method:** `DELETE`
- **Endpoint:** `/delete/:id`

#### Google Authentication
- **Method:** `POST`
- **Endpoint:** `/google`

### LISTING API

#### Get All Listings
- **Method:** `GET`
- **Endpoint:** `/get`

#### Get Single Listing
- **Method:** `GET`
- **Endpoint:** `/listing/:id`

#### Create Listing
- **Method:** `POST`
- **Endpoint:** `/`

#### Get User Listings
- **Method:** `GET`
- **Endpoint:** `/:id`

#### Delete Listing
- **Method:** `DELETE`
- **Endpoint:** `/:id`

#### Update Listing
- **Method:** `PUT`
- **Endpoint:** `/:id`

<div align="center">

---


</div>
