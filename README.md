
# Node Mailer App

Email notification service that leverages Gmail's OAuth2 authentication to send emails programmatically. This application provides a RESTful API for sending email notifications with proper error handling and standardized responses.

## Tech Stack

- Node.js - JavaScript runtime
- Express.js - Web framework for building APIs
- Nodemailer - Module for sending emails
- Google APIs - For OAuth2 authentication with Gmail
- Docker - Containerization for easy deployment and development
- Dotenv - Environment variable management

## Prerequisites

Ensure you have the following installed:
- Node.js (v18 or higher)
- npm or yarn
- Docker and Docker Compose (optional, for containerized setup)
- Gmail account
- Google Cloud Console project with OAuth2 credentials

## Setup and Installation

### Local Setup

1. Clone the repository and install dependencies `npm install`.
2. Update the `.env` file in the root directory with your Google Console credentials.
    ```sh
    - `CLIENT_ID`: Google OAuth2 client ID obtained from Google Cloud Console. 
    - `CLIENT_SECRET`: Google OAuth2 client SECRET obtained from Google Cloud Console. 
    - `REDIRECT_URI`: The redirect URI registered with Google for OAuth2 flow. 
    - `REFRESH_TOKEN`: Refresh token obtained through the OAuth2 flow.
    ```
3. Start the development server:
    ```sh
    npm run dev
    ```
4. Access the API at `http://localhost:3050/v1/notifications/email/send` or use Postman for interactions.

### Docker Setup

1. Make sure you have Docker installed on your machine.
2. Clone the repository and install dependencies `npm install`.
3. Update the `.env` file in the root directory with your Google Console credentials.
    ```sh
    - `CLIENT_ID`: Google OAuth2 client ID obtained from Google Cloud Console. 
    - `CLIENT_SECRET`: Google OAuth2 client SECRET obtained from Google Cloud Console. 
    - `REDIRECT_URI`: The redirect URI registered with Google for OAuth2 flow. 
    - `REFRESH_TOKEN`: Refresh token obtained through the OAuth2 flow.
    ```
4. Start the development server:
    ```sh
    docker-compose up --build -d
    ```
5. Access the API at `http://localhost:3050/v1/notifications/email/send` or use Postman for interactions.

## Setting Up Gmail OAuth2 for Email Notifications

### Step 1: Create a Google Cloud Project

1. Go to the Google Cloud Console
2. Create a new project or select an existing one
3. Navigate to "APIs & Services" > "Dashboard"
4. Click on "Enable APIs and Services"
5. Search for "Gmail API" and enable it

### Step 2: Configure OAuth Consent Screen

1. Go to "APIs & Services" > "OAuth consent screen"
2. Select User Type (External or Internal)
3. Fill in application details (name, email, etc.)
4. Add scopes: `https://mail.google.com/` (for full Gmail access)
5. Add test users if you're using External user type
6. Complete the setup process

### Step 3: Create OAuth2 Credentials

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "OAuth client ID"
3. Select "Web application" as the application type
4. Add a name for your client
5. Add authorized JavaScript origins (for local testing: `http://localhost:3050`)
6. Add authorized redirect URIs:
    - Include `https://developers.google.com/oauthplayground` for testing
    - Include your application's redirect URI if applicable
7. Click "Create"
8. Note the Client ID and Client Secret that are generated (you'll need these for your .env file)

### Step 4: Generate a Refresh Token

1. Go to OAuth Playground
2. Click the settings icon (⚙️) in the top-right corner
3. Check "Use your own OAuth credentials"
4. Enter your Client ID and Client Secret from Step 3
5. Close the settings
6. Under "Step 1", select "Gmail API v1" and choose `https://mail.google.com/`
7. Click "Authorize APIs"
8. Sign in with the Gmail account you want to use for sending emails
9. Click "Allow" to grant the requested permissions
10. In "Step 2", click "Exchange authorization code for tokens"
11. The refresh token will be displayed in the response (copy this for your .env file)

### Step 5: Configure Environment Variables

Update your .env file with the obtained credentials:

```sh
CLIENT_ID='your-google-client-id-here'
CLIENT_SECRET='your-google-client-secret-here'
REDIRECT_URI='https://developers.google.com/oauthplayground'
REFRESH_TOKEN='your-refresh-token-here'
```
