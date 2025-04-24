
/**
 * Handler for sending emails through the notification service.
 * Processes email sending requests and returns standardized API responses.
 * 
 * @param {Express.Request} req - Express request object
 * @param {Object} req.body - Request body containing email details
 * @param {string|string[]} req.body.recipients - Email recipient(s)
 * @param {string} req.body.subject - Email subject line
 * @param {string} req.body.htmlContent - HTML formatted email content
 * @param {string} req.body.textContent - Plain text email content
 
 * @throws {Error} Forwards any errors to Express error handler
 */

const { ApiResponse } = require('../utils/responses');
const { emailNotificationTransporter } = require('../utils/email-notification-transporter');

const sendEmailNotificationHandler = async (req, res, next) => {
    
    try {
        const { recipients, subject, htmlContent, textContent } = req.body;
        const mailOptions = {
            from: 'noreply@beatbnk.com',
            to: recipients, 
            subject: subject,
            text: textContent,
            html: htmlContent
        };
        const transporter = await emailNotificationTransporter();
        await transporter.sendMail(mailOptions);
        const apiResponse = new ApiResponse();
        apiResponse.message = 'Email notification sent successfully.';
        return res.status(apiResponse.code).json(apiResponse);
    } catch (error) {
        next(error);
    }
};

module.exports = { sendEmailNotificationHandler };
