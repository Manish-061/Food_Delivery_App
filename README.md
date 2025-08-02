# 🍔 Food Delivery Application

A full-stack food delivery application built with **Spring Boot** backend, **React** admin panel, and **MongoDB** database. The application provides a complete solution for managing food items, orders, and administrative tasks in a food delivery business.

## 📋 Table of Contents
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Installation & Setup](#-installation--setup)
- [Environment Configuration](#-environment-configuration)
- [Running the Application](#-running-the-application)
- [API Documentation](#-api-documentation)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

### Admin Panel Features
- 📝 **Food Management**: Add, edit, and delete food items
- 📋 **Order Management**: View and manage customer orders
- 📊 **Dashboard**: Overview of business metrics
- 🖼️ **Image Upload**: Upload food images to AWS S3
- 📱 **Responsive Design**: Works on desktop and mobile devices

### Backend API Features
- 🔐 **RESTful API**: Well-structured REST endpoints
- 📦 **MongoDB Integration**: NoSQL database for scalability
- ☁️ **AWS S3 Integration**: Cloud storage for images
- ✅ **Data Validation**: Request validation and error handling
- 🚀 **Spring Boot**: Modern Java framework

## 🛠️ Tech Stack

### Backend (foodiesapi)
- **Framework**: Spring Boot 3.4.7
- **Language**: Java 21
- **Database**: MongoDB
- **Cloud Storage**: AWS S3
- **Build Tool**: Maven
- **Additional**: Lombok, Spring Data MongoDB, Spring Validation

### Admin Panel (adminpanel)
- **Framework**: React 19.1.0
- **Build Tool**: Vite 7.0.4
- **UI Framework**: Bootstrap 5.3.7
- **Icons**: Bootstrap Icons
- **HTTP Client**: Axios
- **Routing**: React Router DOM
- **Notifications**: React Toastify

## 📁 Project Structure

```
Food_Delivery_Application/
├── 📂 foodiesapi/                 # Spring Boot Backend API
│   ├── 📂 src/main/java/in/manish/foodiesapi/
│   │   ├── 📂 config/             # Configuration classes
│   │   ├── 📂 controller/         # REST Controllers
│   │   ├── 📂 entity/             # Database entities
│   │   ├── 📂 io/                 # Request/Response DTOs
│   │   ├── 📂 repository/         # Data repositories
│   │   └── 📂 service/            # Business logic
│   ├── 📂 src/main/resources/     # Application properties
│   └── 📄 pom.xml                 # Maven dependencies
├── 📂 adminpanel/                 # React Admin Panel
│   ├── 📂 src/
│   │   ├── 📂 assets/             # Images and static files
│   │   ├── 📂 components/         # Reusable components
│   │   ├── 📂 pages/              # Page components
│   │   └── 📂 services/           # API service functions
│   ├── 📄 package.json            # NPM dependencies
│   └── 📄 vite.config.js          # Vite configuration
└── 📄 README.md                   # Project documentation
```

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Java 21** or higher
- **Node.js 18** or higher
- **MongoDB** (local or cloud instance)
- **Maven 3.6** or higher
- **AWS Account** (for S3 storage)

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/Manish-061/Food_Delivery_App.git
cd Food_Delivery_Application
```

### 2. Backend Setup (foodiesapi)

```bash
# Navigate to backend directory
cd foodiesapi

# Install dependencies
mvn clean install

# Admin Panel Setup (adminpanel)

# Navigate to admin panel directory
cd adminpanel

# Install dependencies
npm install
```

## ⚙️ Environment Configuration

### Backend Configuration

Create environment variables or update `application.properties`:

```properties
# MongoDB Configuration
spring.data.mongodb.uri=mongodb://localhost:27017/foodies

# AWS S3 Configuration
aws.access.key=${AWS_ACCESS_KEY}
aws.secret.key=${AWS_SECRET_KEY}
aws.region=ap-south-1
aws.s3.bucketname=foodies-food-manish
```

### Environment Variables

Set the following environment variables:

```bash
# Windows (PowerShell)
$env:AWS_ACCESS_KEY="your-aws-access-key"
$env:AWS_SECRET_KEY="your-aws-secret-key"

# Linux/Mac
export AWS_ACCESS_KEY="your-aws-access-key"
export AWS_SECRET_KEY="your-aws-secret-key"
```

### MongoDB Setup

1. **Local MongoDB**: Install and start MongoDB on port 27017
2. **MongoDB Atlas**: Update the connection string in `application.properties`

```properties
# For MongoDB Atlas
spring.data.mongodb.uri=mongodb+srv://username:password@cluster.mongodb.net/foodies
```

## 🏃‍♂️ Running the Application

### Start Backend Server

```bash
# Navigate to backend directory
cd foodiesapi

# Run using Maven
mvn spring-boot:run

# Or run the JAR file
java -jar target/foodiesapi-0.0.1-SNAPSHOT.jar
```

The backend will start on `http://localhost:8080`

### Start Admin Panel

```bash
# Navigate to admin panel directory
cd adminpanel

# Start development server
npm run dev

# Or using yarn
yarn dev
```

The admin panel will start on `http://localhost:5173`

## 📚 API Documentation

### Base URL
```
http://localhost:8080/api
```

### Food Management Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/foods` | Get all food items |
| GET | `/foods/{id}` | Get food item by ID |
| POST | `/foods` | Create new food item |
| PUT | `/foods/{id}` | Update food item |
| DELETE | `/foods/{id}` | Delete food item |

### Request/Response Examples

#### Create Food Item
```http
POST /api/foods
Content-Type: application/json

{
  "name": "Margherita Pizza",
  "description": "Classic pizza with tomatoes and mozzarella",
  "price": 12.99,
  "category": "Pizza",
  "imageUrl": "https://s3-bucket-url/pizza.jpg"
}
```

#### Response
```json
{
  "id": "60f7b3b3b3b3b3b3b3b3b3b3",
  "name": "Margherita Pizza",
  "description": "Classic pizza with tomatoes and mozzarella",
  "price": 12.99,
  "category": "Pizza",
  "imageUrl": "https://s3-bucket-url/pizza.jpg",
  "createdAt": "2024-08-02T07:40:53Z",
  "updatedAt": "2024-08-02T07:40:53Z"
}
```

## 🎯 Usage Guide

### Admin Panel Usage

1. **Access Admin Panel**: Navigate to `http://localhost:5173`
2. **Add Food Items**: Use the "Add Food" section to create new menu items
3. **Manage Foods**: View, edit, or delete existing food items in "List Foods"
4. **Track Orders**: Monitor customer orders in the "Orders" section

### Key Features
- **Image Upload**: Drag and drop or click to upload food images
- **Form Validation**: Real-time validation for all input fields
- **Responsive Design**: Works seamlessly on all device sizes
- **Toast Notifications**: User-friendly success/error messages

## 🔧 Development

### Backend Development

```bash
# Run in development mode with auto-reload
cd foodiesapi
mvn spring-boot:run -Dspring-boot.run.profiles=dev

# Run tests
mvn test

# Generate JAR file
mvn clean package
```

### Frontend Development

```bash
# Start development server with hot reload
cd adminpanel
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📱 Screenshots

*Add screenshots of your application here*


## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Manish**
- GitHub: [@Manish-061](https://github.com/Manish-061)
- LinkedIn: [Manish Kumar](www.linkedin.com/in/09-2003-manish)

## 🙏 Acknowledgments

- Spring Boot community for excellent documentation
- React team for the amazing framework
- MongoDB for the flexible database solution
- AWS for reliable cloud storage

---

⭐ If you found this project helpful, please give it a star!

📧 For questions or support, please open an issue or contact the maintainer.
