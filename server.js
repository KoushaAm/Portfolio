const express = require('express');
const app = express();

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('pages/index');
});




app.listen(3000, () => {
    // format string
    console.log(`listening at http://localhost:3000`);
});
