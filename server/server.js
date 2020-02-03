const express = require('express');
const apiRouter = require('./routes');
const app = express();


app.use('/api/test', apiRouter);

app.use(express.json());

app.listen(process.env.Port || '80', () => {
    console.log(`Server up on port: $(process.env.Port || '80'} `)
});