
### Role-Based Access Control (RBAC) with Advanced Authentication in MERN Stack

This project implements a robust **Role-Based Access Control** system with advanced authentication features, built on the **MERN stack** (MongoDB, Express.js, React.js, Node.js). It includes user authentication, role management, and secure operations.

Credentials
      **Admin** :
              email:madhubalan1247@gmail.com
              password:Madhu@123
       **Customer** :
              email:ktmbalan17@gmail.com
              password:Balan@123

             

## Features

### Authentication
- **User Registration**: Allows new users to register.
- **Login**: Secure login using JWT (JSON Web Token).
- **Forgot Password**: Users can request a password reset.- it is only available on my email ID
- **Reset Password**: The reset password link was sent via email with token-based validation.- it is only available on my email ID
- **OTP Verification**: Ensures secure login and registration via OTP.- it is only available on my email ID
- **Email Verification**: Confirms the email address before granting access.

### Role Management
- Define roles (e.g., Admin, customer).
- Assign specific permissions to roles.
- Middleware for role-based access to specific routes.

### Security
- Password hashing with **bcrypt**.
- JWT for secure session management.
- Secure storage and retrieval of sensitive data.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- Mailtrap or any other SMTP service for email testing

## Installation

1. Clone the repository:
   ```bash
   gh repo clone madhubalan17js/RBAC-AdvAuth-MERNs
   cd your-repo-name
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```env
   PORT="5000"
   MONGO_URI="mongodb+srv://madhubalan1247:vSzztW9AaiYTuGM1@cluster0.kdbf1.mongodb.net/auth_db?retryWrites=true&w=majority&appName=Cluster0"
   JWT_SECRET="mysecretkey"
   NODE_ENV="production"
   MAILTRAP_TOKEN="cd055cac9b3a6769154b9a2eb6ce561e"
   MAILTRAP_ENDPOINT="send.api.mailtrap.io"
  
   ```

4. Start the server:
   ```bash
   npm i
   npm run dev
   ```

5. Navigate to the frontend:
   ```bash
   cd client
   npm install
   npm run dev
   ```

## Project Structure

```plaintext
RBAC-Adv-Auth/
│
├── backend/
│   ├── controllers/       # Contains business logic
│   ├── models/            # MongoDB schemas for User, Product
│   ├── routes/            # API routes
│   ├── middleware/        # Authentication and role-based middleware
│   └── email/             # Utility functions (e.g., email sending, token handling)
│
├── frontend/
│   ├── src/
│       ├── components/    # React components
│       ├── pages/         # Main application pages
│       ├── Store/         # State management (Zustand)
│       └── services/      # API calls
│
├── .env                  # Environment variables
├── README.md             # Project documentation
└── package.json          # Dependency management
```

## API Endpoints

### Authentication
- **GET** `/api/auth/`: Get Users Data
- **GET** `/api/check-auth`: Check Verification Token And Check Auth From Browser
- **POST** `/api/auth/signup`: Register a new user
- **POST** `/api/auth/login`: Login user
- **POST** `/api/auth/forgot-password`: Request password reset
- **POST** `/api/auth/reset-password/:token`: Reset user password
- **POST** `/api/auth/verify-email`: Verify OTP
- **POST** `/api/auth/logout`: Logout

### Crud For Products
- **GET** `/api/products`: Get all roles
- **POST** `/api/add-product`: Create a new role 
- **PUT** `/api/edit-product`: Update role 
- **DELETE** `/api/delete-product`: Delete role 

### Roles and Permissions
-**Customer**: Customer user can Crud The product Details  but he can only access Products Nav
-**Admin**: Admin user can Crud The product Details and can access Products and Users Nav How many users use our Web using 
## Technologies Used

### Backend
- **Node.js**: Runtime environment
- **Express.js**: Web framework
- **MongoDB**: Database
- **Mongoose**: ODM for MongoDB

### Frontend
- **React.js**: User interface
- **Tailwind CSS**: Styling framework
- **Zustand**: State management

### Additional Libraries
- **bcrypt**: Password hashing
- **jsonwebtoken**: JWT implementation
- **mailTrap**: Email handling
- **dotenv**: Environment variable management

## How to Use

1. **Register a new user** via the registration page.
2. **Login** using the registered credentials.
3. Use the **Forgot Password** feature if needed. it is only available on my email ID 
4. Upon successful login, access features according to the assigned role.

