# Railway Deployment Guide for VIT BFHL API

This guide will walk you through deploying your VIT BFHL API to Railway step by step.

## Prerequisites

1. **GitHub Account**: You need a GitHub account to host your code
2. **Railway Account**: Sign up at [railway.app](https://railway.app)
3. **Node.js Project**: Your project should be ready (which it is!)

## Step 1: Prepare Your Code

### 1.1 Update Personal Information
Before deploying, update your personal information in `server.js`:

```javascript
// Change these values to your actual information
const fullName = "your_actual_name"; // e.g., "rushi_patel"
const email = "your_email@domain.com"; // e.g., "rushi@email.com"
const rollNumber = "YOUR_ROLL_NUMBER"; // e.g., "VIT123456"
```

### 1.2 Commit and Push to GitHub

1. **Initialize Git Repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - VIT BFHL API"
   ```

2. **Create GitHub Repository**:
   - Go to [github.com](https://github.com)
   - Click "New repository"
   - Name it something like `vit-bfhl-api`
   - Make it **Public**
   - Don't initialize with README (we already have one)
   - Click "Create repository"

3. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/vit-bfhl-api.git
   git branch -M main
   git push -u origin main
   ```

## Step 2: Deploy to Railway

### 2.1 Sign Up/Login to Railway

1. Go to [railway.app](https://railway.app)
2. Click "Login with GitHub"
3. Authorize Railway to access your GitHub account

### 2.2 Create New Project

1. **Click "New Project"** on the Railway dashboard
2. **Select "Deploy from GitHub repo"**
3. **Choose your repository** (`vit-bfhl-api`)
4. **Click "Deploy Now"**

### 2.3 Configure Your App

Railway will automatically:
- Detect it's a Node.js project
- Install dependencies from `package.json`
- Start the server using `npm start`

**No additional configuration needed!** 🎉

### 2.4 Get Your Deployment URL

1. **Wait for deployment** (usually takes 2-5 minutes)
2. **Click on your project** in the Railway dashboard
3. **Copy the generated URL** (looks like: `https://your-app-name.railway.app`)

## Step 3: Test Your Deployed API

### 3.1 Test with Postman

1. **Open Postman**
2. **Create new POST request**
3. **URL**: `https://your-app-name.railway.app/bfhl`
4. **Headers**: `Content-Type: application/json`
5. **Body** (raw JSON):
   ```json
   {
     "data": ["a", "1", "334", "4", "R", "$"]
   }
   ```
6. **Click Send** and verify response

### 3.2 Test All Test Cases

Use these test cases to verify your API works:

**Test Case 1:**
```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

**Test Case 2:**
```json
{
  "data": ["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"]
}
```

**Test Case 3:**
```json
{
  "data": ["A", "ABcD", "DOE"]
}
```

## Step 4: Submit Your API

### 4.1 Form Submission

1. **Go to the form**: [https://forms.office.com/r/ZeVpUYp3zV](https://forms.office.com/r/ZeVpUYp3zV)
2. **Submit your API endpoint**: `https://your-app-name.railway.app/bfhl`
3. **Make sure the URL ends with `/bfhl`**

### 4.2 Verify Your Submission

- ✅ API endpoint is accessible
- ✅ All test cases return correct responses
- ✅ Response format matches requirements
- ✅ Status code is 200 for successful requests

## Troubleshooting

### Common Issues

1. **Deployment Fails**:
   - Check if all dependencies are in `package.json`
   - Ensure `package.json` has correct scripts
   - Check Railway logs for errors

2. **API Not Responding**:
   - Verify the deployment URL is correct
   - Check if the service is running in Railway dashboard
   - Look at Railway logs for any errors

3. **CORS Issues**:
   - The API already includes CORS middleware
   - If issues persist, check Railway environment variables

### Railway Dashboard Features

- **Logs**: View real-time application logs
- **Metrics**: Monitor CPU, memory usage
- **Environment Variables**: Set custom environment variables if needed
- **Domains**: Custom domain configuration (optional)

## Cost and Limits

- **Railway Free Tier**: 
  - 500 hours/month
  - Perfect for VIT submission
  - No credit card required

- **Scaling**: Can upgrade to paid plans if needed later

## Success Checklist

Before submitting, ensure:

- [ ] API is deployed and accessible
- [ ] All test cases return correct responses
- [ ] Response format matches VIT requirements exactly
- [ ] API endpoint URL is submitted to the form
- [ ] GitHub repository is public and accessible

## Support

If you encounter issues:

1. **Check Railway logs** in the dashboard
2. **Verify local testing** works first
3. **Check GitHub repository** for any issues
4. **Railway Discord**: [discord.gg/railway](https://discord.gg/railway)

---

**🎯 Your VIT BFHL API is now ready for submission!**

**Deployed URL**: `https://your-app-name.railway.app/bfhl`
**GitHub Repo**: `https://github.com/YOUR_USERNAME/vit-bfhl-api`

Good luck with your submission! 🚀
