# VIT BFHL REST API

A robust REST API for processing and categorizing array data as part of the VIT Full Stack Developer assessment. The API processes input arrays and returns categorized results including numbers, alphabets, and special characters with various transformations.

## ✨ Features

- **Array Processing**: Categorizes input data into numbers, alphabets, and special characters
- **Data Analysis**:
  - Identifies even and odd numbers
  - Converts alphabets to uppercase
  - Detects special characters
  - Calculates sum of all numbers
  - Generates a concatenated string with alternating caps in reverse order
- **Robust Error Handling**: Comprehensive input validation and error responses
- **CORS Support**: Enabled for cross-origin requests
- **RESTful Design**: Follows REST principles for clean API design

## 🚀 Tech Stack

- **Runtime**: Node.js (v14+)
- **Framework**: Express.js
- **Dependencies**:
  - `cors`: For handling cross-origin requests
  - `dotenv`: For environment variable management
- **Package Manager**: npm
- **Linting**: ESLint (recommended)

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)
- Git (for version control)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/api-hosting-bajaj.git
   cd vit-bfhl-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the root directory with the following content:
   ```env
   PORT=3000
   NODE_ENV=development
   ```

4. **Start the server**
   - For development (with auto-reload):
     ```bash
     npm run dev
     ```
   - For production:
     ```bash
     npm start
     ```

The API will be available at `http://localhost:3000`

## 📚 API Documentation

### Base URL
```
http://localhost:3000
```

### Endpoints

#### 1. Process Array Data
- **Endpoint**: `POST /bfhl`
- **Description**: Processes an array of alphanumeric and special characters, categorizing them as requested.
- **Request Headers**:
  - `Content-Type: application/json`

**Request Body:**
```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

**Response (Success - 200 OK):**
```json
{
  "is_success": true,
  "user_id": "sai_teja_v_29082025",
  "email": "saitejav@xyz.com",
  "roll_number": "22BRS1238",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "RA"
}
```

**Response (Error - 400 Bad Request):**
```json
{
  "is_success": false,
  "error": "Invalid input. 'data' must be an array."
}
```

#### 2. Health Check
- **Endpoint**: `GET /`
- **Description**: Health check endpoint to verify the API is running.
- **Response:**
  ```json
  {
    "message": "VIT BFHL API is running!",
    "endpoint": "/bfhl",
    "method": "POST",
    "description": "Process array data and return categorized results"
  }
  ```

## 🧪 Testing with Postman

1. **Import the Collection**
   - Open Postman
   - Click "Import" and select the `VIT_BFHL_API.postman_collection.json` file
   - The collection includes pre-configured requests for all endpoints

2. **Send a Test Request**
   - Select the "Process Array" request
   - Ensure the request method is set to `POST`
   - The URL should be `http://localhost:3000/bfhl` (or your deployed URL)
   - In the "Body" tab, select "raw" and "JSON" format
   - Enter your test data and click "Send"

## 🚀 Deployment

### Railway (Recommended)
1. Install Railway CLI: `npm i -g @railway/cli`
2. Run `railway login`
3. Run `railway up`

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` and follow the prompts

### Environment Variables
Make sure to set the following environment variables in your deployment:
- `PORT`: The port your application will run on
- `NODE_ENV`: Set to 'production' in production

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  Made with ❤️ for VIT Full Stack Assessment
</div>

### Step 3: Test Cases

#### Test Case 1:
```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

#### Test Case 2:
```json
{
  "data": ["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"]
}
```

#### Test Case 3:
```json
{
  "data": ["A", "ABcD", "DOE"]
}
```

### Step 4: Send Request
Click "Send" and verify the response matches the expected format.

## Deployment to Railway

### Step 1: Prepare for Deployment
1. **Update personal information** in `server.js`:
   - Change `fullName` to your actual name
   - Update `email` to your email
   - Update `roll_number` to your roll number

2. **Commit and push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

### Step 2: Deploy to Railway

1. **Visit Railway**: Go to [railway.app](https://railway.app)

2. **Sign up/Login**: Use your GitHub account

3. **Create New Project**:
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository

4. **Configure Environment**:
   - Railway will automatically detect it's a Node.js project
   - Set environment variables if needed (usually not required)

5. **Deploy**:
   - Railway will automatically build and deploy your app
   - Wait for deployment to complete

6. **Get Your URL**:
   - Railway will provide a URL like: `https://your-app-name.railway.app`
   - Your API endpoint will be: `https://your-app-name.railway.app/bfhl`

### Step 3: Test Deployed API

1. **Update Postman URL** to your Railway URL
2. **Test all the test cases** to ensure they work
3. **Submit the form** with your Railway URL + `/bfhl`

## Environment Variables

- `PORT`: Server port (default: 3000)
- `NODE_ENV`: Environment (development/production)

## Error Handling

The API includes comprehensive error handling:
- Input validation
- Proper HTTP status codes
- Descriptive error messages
- Try-catch blocks for unexpected errors

## Response Format

All responses follow the specified format:
- `is_success`: Boolean indicating operation status
- `user_id`: Formatted as `{full_name_ddmmyyyy}`
- Numbers returned as strings
- Arrays for different categories
- Sum as string
- Concatenated string with alternating caps in reverse order

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - feel free to use this project for your VIT submission.

## Support

If you encounter any issues:
1. Check the console logs
2. Verify your input format
3. Ensure all dependencies are installed
4. Check if the port is available

---

**Good luck with your VIT submission! 🚀**
