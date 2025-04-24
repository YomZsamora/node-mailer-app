const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/v1/notifications/', notificationsRoutes);
app.use(exceptionHandler);

const server = app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

module.exports = server;
