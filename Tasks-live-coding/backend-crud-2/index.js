const express = require('express');

const router = require('./router');

const app =express();

require('./db/db')

app.use(express.json());

app.use(router)

app.listen(5000, () => {
    console.log('server is running on port 5000')
});
