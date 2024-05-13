"use strict";
const express = require('express');
const app = express();
const port = 3001; // or any other port you prefer
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
