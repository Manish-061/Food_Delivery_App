# 🍕 Foodies API - Food Delivery REST API

A Spring Boot REST API for online food delivery application with AWS S3 integration for image storage and MongoDB for data persistence.

## 🏗️ Project Structure

```
foodiesapi/
├── src/main/java/in/manish/foodiesapi/
│   ├── config/
│   │   |── AWSConfig.java          # AWS S3 configuration
│   ├── controller/
│   │   └── FoodController.java     # REST endpoints
│   ├── entity/
│   │   └── FoodEntity.java         # MongoDB entity
│   ├── io/
│   │   ├── FoodRequest.java        # Request DTOs
│   │   └── FoodResponse.java       # Response DTOs
│   ├── repository/
│   │   └── FoodRepository.java     # MongoDB repository
│   ├── service/
│   │   ├── FoodService.java        # Service interface
│   │   └── FoodServiceImpl.java    # Service implementation
│   └── FoodiesapiApplication.java  # Main Spring Boot class
├── src/main/resources/
│   └── application.properties      # App configuration
├── .env                           # Environment variables (DO NOT COMMIT)
└── pom.xml                       # Maven dependencies
```

## 🔧 Technologies Used

- **Framework**: Spring Boot 3.4.7
- **Database**: MongoDB
- **Cloud Storage**: AWS S3
- **Build Tool**: Maven
- **Java Version**: 21
- **Key Dependencies**:
  - Spring Boot Starter Web
  - Spring Boot Starter Data MongoDB
  - AWS SDK for S3
  - Lombok (for reducing boilerplate code)
  - Dotenv Java (for environment variables)

## 🚀 How Environment Variables Work

### Current Implementation

Your `application.properties` file uses Spring Boot's environment variable resolution:

```properties
# AWS S3 Configuration
aws.access.key = ${AWS_ACCESS_KEY}
aws.secret.key = ${AWS_SECRET_KEY}
aws.region = ap-south-1
aws.s3.bucketname = foodies-food-manish
```

### Environment Variable Resolution Order

Spring Boot resolves `${AWS_ACCESS_KEY}` in this order:

1. **JVM System Properties** (`-DAWS_ACCESS_KEY=value`)
2. **Operating System Environment Variables**
3. **`.env` file** (via our custom `DotenvConfig` class)
4. **Default value** (if specified as `${AWS_ACCESS_KEY:default_value}`)


```

## ⚙️ Setup Instructions

### 1. Prerequisites

- **Java 21** installed
- **MongoDB** installed and running
- **AWS Account** with S3 access
- **IntelliJ IDEA** (or any IDE)
- **Maven** (usually bundled with IDE)

### 2. Configure AWS Credentials

**Option A: Using .env file (Recommended for development)**

1. Update the `.env` file in the project root:
   ```env
   AWS_ACCESS_KEY=AKIA...your_actual_access_key
   AWS_SECRET_KEY=abc123...your_actual_secret_key
   ```

**Option B: IntelliJ Run Configuration**

1. In IntelliJ: `Run → Edit Configurations`
2. Select your main application configuration
3. In **Environment Variables**, add:
   - `AWS_ACCESS_KEY=your_actual_access_key`
   - `AWS_SECRET_KEY=your_actual_secret_key`

**Option C: System Environment Variables**

1. Windows: `System Properties → Environment Variables`
2. Add the AWS credentials as system variables

### 3. Start MongoDB

Ensure MongoDB is running on `localhost:27017`:

```bash
# Windows (as Administrator)
net start MongoDB

# Or start manually
mongod --dbpath "C:\data\db"
```

To verify MongoDB is running:
```bash
netstat -an | findstr :27017
```

### 4. Create AWS S3 Bucket

1. Go to AWS S3 Console
2. Create a bucket named: `foodies-food-manish` (or update the name in `application.properties`)
3. Set bucket permissions for public read access (for image URLs)

### 5. Build and Run

```bash
# Clean and compile
mvn clean compile

# Run the application
mvn spring-boot:run
```

**Alternative: Run in IntelliJ**
1. Right-click on `FoodiesapiApplication.java`
2. Select "Run FoodiesapiApplication"

## 📡 API Endpoints

### Base URL: `http://localhost:8080`

### 1. Add Food Item

**Endpoint**: `POST /api/foods`

**Content-Type**: `multipart/form-data`

**Request Parameters**:
- `food` (text): JSON string with food details
- `file` (file): Image file to upload

**Example Request**:
```json
// food parameter (as text)
{
  "name": "Margherita Pizza",
  "description": "Classic Italian pizza with tomato sauce, mozzarella cheese, and fresh basil",
  "price": 299.99,
  "category": "Pizza"
}
```

**Response**:
```json
{
  "id": "507f1f77bcf86cd799439011",
  "name": "Margherita Pizza",
  "description": "Classic Italian pizza with tomato sauce, mozzarella cheese, and fresh basil",
  "price": 299.99,
  "category": "Pizza",
  "imageUrl": "https://foodies-food-manish.s3.amazonaws.com/uuid-generated-filename.jpg"
}
```

## 🧪 Testing with Postman

### Step 1: Import Collection

1. Open Postman
2. Click **Import**
3. Create a new request with these details:

### Step 2: Configure Request

1. **Method**: `POST`
2. **URL**: `http://localhost:8080/api/foods`
3. **Body**: Select `form-data`
4. **Add Parameters**:
   - Key: `food`, Type: `Text`, Value:
     ```json
     {"name":"Butter Chicken","description":"Creamy tomato-based curry with tender chicken pieces","price":349.99,"category":"Indian"}
     ```
   - Key: `file`, Type: `File`, Value: [Select an image file]

### Step 3: Send Request

Click **Send**. You should receive a JSON response with the created food item including the S3 image URL.

## 🐛 Troubleshooting

### Issue: "AWS credentials not found"
**Solution**: Verify your `.env` file or environment variables are correctly set.

### Issue: "MongoDB connection failed"
**Solution**: 
- Check if MongoDB is running: `netstat -an | findstr :27017`
- Start MongoDB service

### Issue: "S3 bucket access denied"
**Solution**: 
- Verify AWS credentials have S3 permissions
- Check bucket name matches configuration
- Ensure bucket allows public read for uploaded files

### Issue: "Build failed - Lombok not working"
**Solution**: 
- In IntelliJ: `File → Settings → Plugins → Install Lombok plugin`
- Enable annotation processing: `Settings → Build → Compiler → Annotation Processors`

## 📁 Database Schema

### MongoDB Collection: `foods`

```javascript
{
  "_id": ObjectId("..."),
  "name": "String",
  "description": "String", 
  "price": Number,
  "category": "String",
  "imageUrl": "String (S3 URL)"
}
```


1. Add GET endpoints to retrieve food items
2. Implement food categories endpoint
3. Add search and filtering capabilities
4. Implement user authentication
5. Add order management features
6. Deploy to cloud platform (AWS/Azure/GCP)

---
