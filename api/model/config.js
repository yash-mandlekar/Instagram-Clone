const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://pvalmadir:pvalmadir@cluster0.kr3psg1.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('Database Connected'))
