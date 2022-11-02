const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/instagram')
    .then(() => console.log('Database Connected'))
