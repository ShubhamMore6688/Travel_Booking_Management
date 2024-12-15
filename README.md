# Travel Booking Management System  

A full-stack web application designed to manage travel packages, booking requests, and administrative operations.  

---

## Features  

### Frontend  
1. **Homepage**: Displays all available tour packages.  
2. **Package Details**: A dedicated page for each package with a 'Book Now' button.  
3. **Booking Forms**: Allows users to submit booking requests with form validation (e.g., required fields, valid email format).  
4. **Invoice Generation**: Displays booking details as a styled HTML page, with an optional downloadable PDF invoice.  

### Backend  
1. **Public API Endpoints**:  
   - `GET /packages`: Retrieve all tour packages.  
   - `GET /packages/:id`: Retrieve details of a specific package.  
   - `POST /bookings`: Submit a package booking.  

2. **Admin API Endpoints**:  
   - `POST /admin/packages`: Add a new package.  
   - `PUT /admin/packages/:id`: Update an existing package.  
   - `DELETE /admin/packages/:id`: Delete a package.  

### Admin Panel  
1. Accessible via the route `/admin`.  
2. Features basic authentication with hardcoded credentials.  

---

## Project Setup  

### Prerequisites  
- Node.js and npm installed  
- MongoDB instance running locally or remotely  

---

### Backend Setup  

1. Clone the backend repository:  
   ```bash
   git clone <backend-repo-url>
   cd <backend-repo-folder>
   ```  

2. Install dependencies:  
   ```bash
   npm install
   ```  

3. Configure environment variables in a `.env` file:  
   ```plaintext
   MONGODB_URI=<your-mongodb-uri> 
   ```  

4. Start the backend server:  
   ```bash
   npm start
   ```  

---

### Frontend Setup  

1. Clone the frontend repository:  
   ```bash
   git clone <frontend-repo-url>
   cd <frontend-repo-folder>
   ```  

2. Install dependencies:  
   ```bash
   npm install
   ```  

3. Configure environment variables in a `.env` file (or `.env.local` for Vite):  
   ```plaintext
   VITE_BACKEND_URL=http://localhost:3000
   ```  

4. Start the frontend development server:  
   ```bash
   npm run dev
   ```  

---

## API Routes  

### Public Endpoints  

1. **Retrieve All Packages**:  
   - **URL**: `GET /packages`  
   - **Description**: Retrieves a list of all available tour packages.  

2. **Retrieve Specific Package**:  
   - **URL**: `GET /packages/:id`  
   - **Description**: Retrieves detailed information about a specific tour package.  

3. **Submit Booking Request**:  
   - **URL**: `POST /bookings`  
   - **Description**: Submits a booking request for a package.  
   - **Request Body**:  
     ```json
     {
       "name": "John Doe",
       "email": "johndoe@example.com",
       "packageId": "12345",
       "numberOfPeople": 2
     }
     ```  
   - **Response**: Confirmation of the booking request.  

---

### Admin Endpoints  

1. **Add New Package**:  
   - **URL**: `POST /admin/packages`  
   - **Description**: Adds a new tour package.  
   - **Request Body**:  
     ```json
     {
       "title": "Holiday in Paris",
       "description": "A 7-day luxurious trip to Paris",
       "price": 1200,
       "availability": true
     }
     ```  
   - **Response**: Newly created package object.  

2. **Update Existing Package**:  
   - **URL**: `PUT /admin/packages/:id`  
   - **Description**: Updates details of an existing tour package.  
   - **Request Body**: Similar to the body for adding a package.  
   - **Response**: Updated package object.  

3. **Delete Package**:  
   - **URL**: `DELETE /admin/packages/:id`  
   - **Description**: Deletes a tour package by its ID.  
   - **Response**: Confirmation of the deletion.  

---

## Admin Panel  

1. Navigate to `/admin`.  
2. Log in using the following credentials:  
   - **Username**: `admin`  
   - **Password**: `admin123`  

---

## Invoice Generation  

1. After a successful booking, users are redirected to an invoice page (`/invoice/:bookingId`).  
2. The page displays the booking details in a styled HTML format.  

---
