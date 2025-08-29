const http = require('http');

// Test data from the examples
const testCases = [
    {
        name: "Test Case 1",
        data: ["a", "1", "334", "4", "R", "$"]
    },
    {
        name: "Test Case 2", 
        data: ["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"]
    },
    {
        name: "Test Case 3",
        data: ["A", "ABcD", "DOE"]
    }
];

function testAPI(testCase) {
    return new Promise((resolve, reject) => {
        const postData = JSON.stringify({ data: testCase.data });
        
        const options = {
            hostname: 'localhost',
            port: 3000,
            path: '/bfhl',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(postData)
            }
        };

        const req = http.request(options, (res) => {
            let data = '';
            
            res.on('data', (chunk) => {
                data += chunk;
            });
            
            res.on('end', () => {
                try {
                    const response = JSON.parse(data);
                    resolve({ statusCode: res.statusCode, response });
                } catch (error) {
                    reject(error);
                }
            });
        });

        req.on('error', (error) => {
            reject(error);
        });

        req.write(postData);
        req.end();
    });
}

async function runTests() {
    console.log('🚀 Testing VIT BFHL API...\n');
    
    for (const testCase of testCases) {
        try {
            console.log(`📋 ${testCase.name}`);
            console.log(`Input: [${testCase.data.join(', ')}]`);
            
            const result = await testAPI(testCase);
            
            console.log(`Status: ${result.statusCode}`);
            console.log('Response:');
            console.log(JSON.stringify(result.response, null, 2));
            console.log('✅ Test passed!\n');
            
        } catch (error) {
            console.log(`❌ Test failed: ${error.message}\n`);
        }
    }
    
    console.log('🎉 All tests completed!');
}

// Run tests if this file is executed directly
if (require.main === module) {
    runTests();
}

module.exports = { testAPI, runTests };
