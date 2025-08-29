# VIT BFHL REST API

A robust REST API for processing and categorizing array data as part of the VIT Full Stack Developer assessment. The API processes input arrays and returns categorized results including numbers, alphabets, and special characters with various transformations.

## Features

- **Array Processing**: Categorizes input data into numbers, alphabets, and special characters
- **Data Analysis**:
  - Identifies even and odd numbers
  - Converts alphabets to uppercase
  - Detects special characters
  - Calculates sum of all numbers
  - Generates a concatenated string with alternating caps in reverse order

    
## Tech Stack

- **Runtime**: Node.js (v14+)
- **Framework**: Express.js
- **Dependencies**:
  - `cors`: For handling cross-origin requests
  - `dotenv`: For environment variable management
- **Package Manager**: npm
- **Linting**: ESLint (recommended)

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)
- Git (for version control)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/api-hosting-bajaj.git
   cd api-hosting-bajaj
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

## API Documentation

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

## Testing with Postman

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


### Environment Variables
Make sure to set the following environment variables in your deployment:
- `PORT`: The port your application will run on
- `NODE_ENV`: Set to 'production' in production



### Test Cases

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

### Send Request
Click "Send" and verify the response matches the expected format.




