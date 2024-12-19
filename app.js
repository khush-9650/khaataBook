const express = require('express');
const app = express();
const userRoutes = require('./routes/user.routes');


app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('index');
});

app.use('/user', userRoutes);


app.listen(3000, () => {
    console.log('App is running at port 3000');
})