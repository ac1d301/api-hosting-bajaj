# VIT Full Stack Question Paper - BFHL REST API

This is a REST API implementation for the VIT Full Stack Question Paper that processes arrays and returns categorized results.

## Features

- **POST /bfhl** endpoint that processes array data
- Returns categorized results including:
  - Even and odd numbers
  - Alphabets (converted to uppercase)
  - Special characters
  - Sum of all numbers
  - Concatenated string with alternating caps in reverse order
- Proper error handling and validation
- CORS enabled for cross-origin requests

## Tech Stack

- **Backend**: Node.js with Express.js
- **Hosting**: Railway (recommended) / Vercel / Render
- **Package Manager**: npm

## Installation & Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd vit-bfhl-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Start the production server**
   ```bash
   npm start
   ```

The API will be available at `http://localhost:3000`

## API Endpoints

### POST /bfhl

Processes an array and returns categorized results.

**Request Body:**
```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

**Response:**
```json
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

### GET /

Health check endpoint that returns API information.

## Testing with Postman

### Step 1: Setup Postman
1. Open Postman
2. Create a new request
3. Set the request method to **POST**

### Step 2: Configure Request
1. **URL**: `http://localhost:3000/bfhl` (for local testing)
2. **Headers**: 
   - Key: `Content-Type`
   - Value: `application/json`
3. **Body**: Select "raw" and "JSON" format

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
