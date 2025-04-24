require('dotenv').config();

module.exports = {
    app: {
        DEBUG: process.env.DEBUG || false,
        PORT: process.env.PORT || 3000,
    },
    email: {
        CLIENT_ID: process.env.CLIENT_ID,
        CLIENT_SECRET: process.env.CLIENT_SECRET,
        REDIRECT_URI: process.env.REDIRECT_URI,
        REFRESH_TOKEN: process.env.REFRESH_TOKEN,
    },
};
