/**
 * @module email-notification-transporter
 * @description Provides a configured nodemailer transport for sending emails via Gmail using OAuth2 authentication
 */

const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const config = require('../configs/config');

/**
 * Creates and configures a nodemailer transporter with Gmail OAuth2 authentication
 * 
 * @description
 * This function sets up the OAuth2 authentication flow required for sending emails through
 * Gmail's SMTP server. It uses the following flow:
 * 1. Creates a Google OAuth2 client with credentials from config
 * 2. Sets up the client with a refresh token
 * 3. Obtains a fresh access token using the refresh token
 * 4. Configures a nodemailer transporter with OAuth2 authentication
 * 
 * The OAuth2 approach is preferred over password authentication because:
 * - It works with accounts that have 2FA enabled
 * - It's more secure than storing email passwords
 * - It provides limited, specific access to just email sending functionality
 * - It complies with Google's security requirements for apps
 */
async function emailNotificationTransporter() {
    const oAuth2Client = new google.auth.OAuth2(config.email.CLIENT_ID, config.email.CLIENT_SECRET, config.email.REDIRECT_URI);
    oAuth2Client.setCredentials({ refresh_token: config.email.REFRESH_TOKEN });
    const accessToken = await oAuth2Client.getAccessToken();
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: 'samaurah@gmail.com',
            clientId: config.email.CLIENT_ID,
            clientSecret: config.email.CLIENT_SECRET,
            refreshToken: config.email.REFRESH_TOKEN,
            accessToken: accessToken
        }
    });
    return transporter;
}

module.exports = { emailNotificationTransporter };
