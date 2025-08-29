const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Helper function to check if a string is a number
function isNumber(str) {
    return !isNaN(str) && !isNaN(parseFloat(str));
}

// Helper function to check if a string is an alphabet
function isAlphabet(str) {
    return /^[a-zA-Z]+$/.test(str);
}

// Helper function to check if a string is a special character
function isSpecialCharacter(str) {
    return /^[^a-zA-Z0-9\s]+$/.test(str);
}

// Helper function to convert string to alternating caps in reverse order
function toAlternatingCapsReverse(str) {
    let result = '';
    let isUpper = true;
    
    for (let i = str.length - 1; i >= 0; i--) {
        const char = str[i];
        if (isAlphabet(char)) {
            result += isUpper ? char.toUpperCase() : char.toLowerCase();
            isUpper = !isUpper;
        }
    }
    
    return result;
}

// Main BFHL endpoint
app.post('/bfhl', (req, res) => {
    try {
        const { data } = req.body;
        
        // Validate input
        if (!data || !Array.isArray(data)) {
            return res.status(400).json({
                is_success: false,
                error: "Invalid input. 'data' must be an array."
            });
        }

        // Initialize arrays and variables
        const evenNumbers = [];
        const oddNumbers = [];
        const alphabets = [];
        const specialCharacters = [];
        let sum = 0;
        let allAlphabets = '';

        // Process each element in the data array
        data.forEach(item => {
            const str = String(item);
            
            if (isNumber(str)) {
                const num = parseInt(str);
                if (num % 2 === 0) {
                    evenNumbers.push(str);
                } else {
                    oddNumbers.push(str);
                }
                sum += num;
            } else if (isAlphabet(str)) {
                alphabets.push(str.toUpperCase());
                allAlphabets += str;
            } else if (isSpecialCharacter(str)) {
                specialCharacters.push(str);
            }
        });

        // Generate user_id (you can customize this)
        const fullName = "john_doe"; // Change this to your name
        const currentDate = new Date();
        const day = String(currentDate.getDate()).padStart(2, '0');
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const year = currentDate.getFullYear();
        const user_id = `${fullName}_${day}${month}${year}`;

        // Prepare response
        const response = {
            is_success: true,
            user_id: user_id,
            email: "john@xyz.com", // Change this to your email
            roll_number: "ABCD123", // Change this to your roll number
            odd_numbers: oddNumbers,
            even_numbers: evenNumbers,
            alphabets: alphabets,
            special_characters: specialCharacters,
            sum: String(sum),
            concat_string: toAlternatingCapsReverse(allAlphabets)
        };

        res.status(200).json(response);

    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).json({
            is_success: false,
            error: "Internal server error"
        });
    }
});

// Health check endpoint
app.get('/', (req, res) => {
    res.json({
        message: "VIT BFHL API is running!",
        endpoint: "/bfhl",
        method: "POST",
        description: "Process array data and return categorized results"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`BFHL endpoint: http://localhost:${PORT}/bfhl`);
});

module.exports = app;
