const express = require('express');
const router = express.Router();
const { sendEmailNotificationHandler } = require('../handlers/send-email-notification-handler');

router.post('/email/send', sendEmailNotificationHandler);

module.exports = router;
